'use client';

import dynamic from 'next/dynamic';

const JSONViewer = dynamic(() => import('react-json-view'), { ssr: false });

export default function RunResult({ result, resultRef }) {
  return (
    <div ref={resultRef} className="bg-darkSurface border border-green-700 p-6 rounded space-y-4">
      <h2 className="text-lg font-semibold text-green-400">Run Result</h2>
      <div className="max-h-[400px] overflow-auto bg-darkBg p-3 rounded">
        <JSONViewer src={result} collapsed={1} theme="monokai" enableClipboard={false} />
      </div>
    </div>
  );
}
