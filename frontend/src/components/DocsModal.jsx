'use client';

import { useState } from 'react';

export default function DocsModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)} className="text-white text-xl">❓</button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-darkSurface text-lightText p-6 rounded max-w-lg w-full">
            <h2 className="text-xl font-bold mb-2 text-accentBlue">How to Use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Enter your Apify API Key to fetch your actors.</li>
              <li>Click "Public Actors" to see publicly available ones.</li>
              <li>Click "Load" to load an actor’s input schema.</li>
              <li>Provide input and click "Run" to execute the actor.</li>
              <li>Scroll down to view results and debug.</li>
            </ul>
            <button onClick={() => setOpen(false)} className="mt-4 bg-accentBlue text-black px-4 py-1 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}