'use client';

export default function ActorList({ title, actors, fetchSchema }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2" style={{ color: '#58a6ff' }}>{title}</h3>
      <ul className="space-y-2">
        {actors.length === 0 ? (
          <li className="italic text-gray-500">No actors found.</li>
        ) : actors.map(a => (
          <li key={a.id} className="bg-darkSurface border border-gray-600 p-3 flex justify-between items-center rounded">
            <div>
              <p className="font-medium text-lightText">{a.name}</p>
              <p className="text-sm text-gray-400">{a.title}</p>
            </div>
            <button
              onClick={() => fetchSchema(a.id)}
              className="px-3 py-1 bg-accentBlue text-black rounded hover:scale-105 transition"
            >
              Load
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
