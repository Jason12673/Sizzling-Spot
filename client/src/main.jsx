import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
      <div className="text-center text-white px-6">
        <h1 className="text-6xl font-bold mb-4">Sizzling Spot</h1>
        <p className="text-2xl mb-8">Your Pomodoro Timer</p>
        <p className="text-lg mb-12 max-w-md mx-auto">
          Stay focused and productive with our simple and effective Pomodoro technique timer
        </p>
        <button className="bg-white text-red-500 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors">
          Start Timer
        </button>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
