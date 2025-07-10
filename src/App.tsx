import { useState } from 'react'
import { Settings, Plus, Play, Edit } from 'lucide-react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  return (
    <div className="w-full h-screen bg-white flex flex-col" style={{ width: '402px', height: '874px' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-white">
        <Settings className="w-6 h-6 text-gray-600" />
        <h1 className="text-lg font-medium text-gray-800">New chat</h1>
        <Edit className="w-6 h-6 text-gray-600" />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center px-8">
        <p className="text-2xl text-gray-800 text-center font-normal">
          何をしますか？
        </p>
      </div>

      {/* Bottom input area */}
      <div className="px-4 pb-8">
        <div className="relative">
          <div className="flex items-center bg-white rounded-full p-1 shadow-sm border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-border">
            <div className="flex-1 bg-white rounded-full">
              <div className="flex items-center px-4 py-3">
                <Plus className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                  placeholder=""
                />
                <button className="ml-3 w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
