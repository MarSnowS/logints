import { Form } from './components/Form'
import { Welcome } from './components/Welcome'
import './index.css'

function App() {
  return (
    <>
    <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <Form />
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-white/10 backdrop-blur-lg'>
        <Welcome />
      </div>
    </div>
    </>
  )
}

export default App
