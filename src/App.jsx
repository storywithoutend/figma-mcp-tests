import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Logo Section */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" 
               className="transition-transform hover:scale-110">
              <img src={viteLogo} className="h-20 w-20" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer"
               className="transition-transform hover:scale-110">
              <img src={reactLogo} className="h-20 w-20 animate-spin" alt="React logo" 
                   style={{animationDuration: '20s'}} />
            </a>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Vite + React + Tailwind
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ready for Cloudflare Pages deployment
          </p>

          {/* Counter Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md mx-auto mb-8">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg 
                         transition-colors duration-200 transform hover:scale-105 active:scale-95 mb-4"
            >
              Count is {count}
            </button>
            <p className="text-gray-600 dark:text-gray-300">
              Edit <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-blue-500 text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">Powered by Vite for instant development</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Tailwind CSS</h3>
              <p className="text-gray-600 dark:text-gray-300">Utility-first CSS framework for rapid development</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-purple-500 text-3xl mb-3">☁️</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Cloudflare Ready</h3>
              <p className="text-gray-600 dark:text-gray-300">Optimized for Cloudflare Pages deployment</p>
            </div>
          </div>

          <p className="text-gray-500 dark:text-gray-400">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
