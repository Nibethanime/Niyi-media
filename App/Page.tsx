'use client'
import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('3D Chinese Donghua')
  
  const styles = ["3D Chinese Donghua","Western Fantasy Epic","Anime Style","Dark Souls Cinematic","Magic Academy"]

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-center">Nibeth AI</h1>
        <p className="text-center mt-2 text-purple-300">Create fantasy videos with AI</p>
        
        <div className="mt-10 bg-gray-900/50 p-6 rounded-2xl">
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A xianxia warrior flying over floating mountains..."
            className="w-full p-4 bg-black rounded-lg h-32 text-white"
          />
          <select value={style} onChange={(e) => setStyle(e.target.value)} className="w-full mt-4 p-3 bg-black rounded-lg text-white">
            {styles.map(s => <option key={s}>{s}</option>)}
          </select>
          <button className="w-full mt-4 bg-purple-600 p-4 rounded-lg font-bold">
            Generate Video
          </button>
        </div>
      </div>
    </main>
  )
}
