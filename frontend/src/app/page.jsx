'use client';

import { useState, useRef } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ActorList from '../components/ActorList';
import SchemaEditor from '../components/SchemaEditor';
import RunResult from '../components/RunResult';

export default function Home() {
  const [apiKey, setApiKey] = useState('');
  const [actors, setActors] = useState([]);
  const [publicActors, setPublicActors] = useState([]);
  const [schema, setSchema] = useState(null);
  const [input, setInput] = useState('{}');
  const [runResult, setRunResult] = useState(null);
  const [actorId, setActorId] = useState('');
  const [loading, setLoading] = useState(false);
  const resultRef = useRef(null);

  const notify = (msg, type = "info") => toast[type](msg, { autoClose: 3000 });
  const scrollToResult = () => setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth" }), 200);
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchMyActors = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${backend}/api/actors`, { apiKey });
      setActors(res.data.data?.items || []);
      notify('My Actors fetched', 'success');
    } catch {
      notify('Failed to fetch your actors', 'error');
      setActors([]);
    } finally { setLoading(false); }
  };

  const fetchPublicActors = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${backend}/api/actors/public`);
      setPublicActors(res.data.data?.items || []);
      notify('Public Actors fetched', 'success');
    } catch {
      notify('Failed to fetch public actors', 'error');
      setPublicActors([]);
    } finally { setLoading(false); }
  };

  const fetchSchema = async id => {
  setLoading(true);

  setSchema(null);
  setInput('{}');
  setRunResult(null);

  try {
    const res = await axios.post(`${backend}/api/schema`, { actorId: id, apiKey });
    setSchema(res.data);
    setActorId(id);
    notify('Schema loaded', 'success');

    const s = res.data.inputSchema || {};
    const sample = Object.fromEntries(Object.keys(s).map(k => {
      const t = s[k].type;
      return [k, t === 'string' ? "" : t === 'boolean' ? false : t === 'array' ? [] : t === 'object' ? {} : null];
    }));

    setInput(Object.keys(sample).length ? JSON.stringify(sample, null, 2) : '{}');
  } catch {
    notify('Failed to load schema', 'error');
    setSchema(null);
  } finally {
    setLoading(false);
  }
};

  const runActor = async () => {
    setLoading(true);
    try {
      const parsed = JSON.parse(input);
      const res = await axios.post(`${backend}/api/run`, { actorId, apiKey, input: parsed });
      setRunResult(res.data);
      notify('Actor run successful', 'success');
      scrollToResult();
    } catch {
      notify('Failed to run actor', 'error');
      setRunResult(null);
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-darkBg text-lightText">
      <ToastContainer />
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center" style={{ color: '#58a6ff' }}>
          Apify Integration Dashboard
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <input
            type="text"
            placeholder="Apify API Key"
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            className="flex-1 px-4 py-2 bg-darkSurface border border-gray-600 rounded text-lightText focus:ring-2 focus:ring-accentBlue"
          />
          <div className="flex gap-2 mt-1 sm:mt-0">
            <button onClick={fetchMyActors} disabled={loading} className="px-4 py-2 bg-accentGreen hover:bg-green-600 text-white rounded shadow transition hover:scale-105">
              My Actors
            </button>
            <button onClick={fetchPublicActors} disabled={loading} className="px-4 py-2 bg-accentBlue hover:bg-blue-500 text-white rounded shadow transition hover:scale-105">
              Public Actors
            </button>
          </div>
        </div>

        {loading && <div className="text-center"><ClipLoader color="#58a6ff" /></div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActorList title="🎭 My Actors" actors={actors} fetchSchema={fetchSchema} />
          <ActorList title="🌐 Public Actors" actors={publicActors} fetchSchema={fetchSchema} />
        </div>

        {schema && (
          <SchemaEditor actorId={actorId} input={input} setInput={setInput} runActor={runActor} loading={loading} />
        )}

        {runResult && (
          <RunResult result={runResult} resultRef={resultRef} />
        )}
      </div>
    </div>
  );
}
