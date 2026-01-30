import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="rounded-xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="mb-2 text-5xl font-bold text-gray-800">
            React + Tailwind Template
          </h1>
          <p className="mb-6 text-lg text-gray-600">
            TypeScript + Vite + Tailwind CSS
          </p>
          <div className="mb-4">
            <button
              onClick={() => setCount(prevCount => prevCount + 1)}
              className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Count is {count}
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Edit{' '}
            <code className="rounded bg-gray-100 px-2 py-1">src/App.tsx</code>{' '}
            and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
