import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Personal Book Library
        </h1>
        <p className="text-gray-600 mb-8">Coming soon: your books, your way.</p>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}!
        </button>
      </div>
    </div>
  );
}

export default App;
