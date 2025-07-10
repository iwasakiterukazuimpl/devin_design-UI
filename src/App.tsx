import { useState } from 'react'
import { Settings, Edit3, Plus, Send } from 'lucide-react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  return (
    <div className="w-full h-screen bg-white flex flex-col" style={{ width: '402px', height: '874px', fontFamily: 'Noto Sans JP, sans-serif' }}>
      {/* Header with settings, title, and new chat button */}
      <div className="flex justify-between items-center px-6" style={{ marginTop: '60px' }}>
        {/* Settings button (gear icon) */}
        <button className="p-2">
          <Settings size={24} color="#505050" />
        </button>
        
        {/* Title */}
        <h1 className="text-xl font-bold" style={{ color: '#505050' }}>
          New chat
        </h1>
        
        {/* New chat button (pencil icon) */}
        <button className="p-2">
          <Edit3 size={24} color="#505050" />
        </button>
      </div>

      {/* Center content - "何をしますか？" */}
      <div className="flex-1 flex items-center justify-center">
        <p className="text-lg" style={{ color: '#313131', fontWeight: 'normal' }}>
          何をしますか？
        </p>
      </div>

      {/* Bottom section with text input and buttons */}
      <div className="flex justify-center relative" style={{ marginBottom: '30px' }}>
        {/* Text input box with gradient border */}
        <div className="relative" style={{ width: '350px', height: '60px' }}>
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, #2F6BF8, #F82269)',
              padding: '3px',
              borderRadius: '30px'
            }}
          >
            <div 
              className="w-full h-full flex items-center px-16"
              style={{ 
                backgroundColor: '#F7F7F7',
                borderRadius: '30px'
              }}
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent outline-none text-base"
                style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
                placeholder=""
              />
            </div>
          </div>
          
          {/* Attach button (+ icon) - positioned on left inside text box */}
          <button 
            className="absolute left-5 top-1/2 transform -translate-y-1/2 p-1"
          >
            <Plus size={20} color="#A0A0A0" />
          </button>
          
          {/* Send button - positioned on right inside text box */}
          <button 
            className="absolute right-5 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(45deg, #2F6BF8, #F82269)'
            }}
          >
            <Send size={16} color="#F7F7F7" className="ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
