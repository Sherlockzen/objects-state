import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className=' flex flex-col items-center'>
        <h1 className=' text-5xl p-24'>Formulário de Cadastro</h1>
        <form className=' 
        border-2 
        border-orange-600 
        w-2/5 
        p-12 
        flex 
        flex-col 
        gap-6'>
          <label className=' flex flex-col'>
            Digite seu nome
            <input
            className=' w-48 border border-black' 
            name='name' />
          </label>
          <label className=' flex flex-col'>
            Digite seu estado
            <input
            className=' w-48 border border-black' 
            name='name' />
          </label>
          <label className=' flex flex-col'>
            Digite sua cidade
            <input
            className=' w-48 border border-black' 
            name='name' />
          </label>

          <button type='submit'
          className='border border-zinc-600'
          >
            Salvar
            </button>
          
        </form>
      </div>  
    </div>
  )
}

export default App
