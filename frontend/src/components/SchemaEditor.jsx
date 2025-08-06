'use client';

export default function SchemaEditor({ actorId, input, setInput, loading, runActor }) {
  return (
    <div className="bg-darkSurface border border-gray-600 p-6 rounded space-y-4">
      <h2 className="text-xl font-semibold" style={{ color: '#58a6ff' }}>
        Schema for Actor: <span className="text-lightText">{actorId}</span>
      </h2>
      <textarea
        rows={8}
        value={input}
        onChange={e => setInput(e.target.value)}
        className="w-full p-3 bg-darkSurface border border-gray-600 rounded font-mono text-sm text-lightText placeholder-gray-400 focus:ring-2 focus:ring-accentBlue"
        placeholder={`{\n  "key": "value"\n}`}
      />
      <button
        onClick={runActor}
        disabled={loading}
        className="px-5 py-2 bg-accentBlue text-black rounded shadow transition hover:scale-105"
      >
        Run
      </button>
    </div>
  );
}
