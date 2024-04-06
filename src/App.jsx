import './App.css'
import Foto from './Foto'

function App() {

  
  return (
    <div className='place-content-center gap-6 rounded-2xl bg-clr-secondary-dark-grey p-6 md:p-10'>
      <div className="grid place-content-center">
        <Foto />
      </div>
      <div>
        <h1 className="pb-1 text-2xl font-bold">Zah Rainy Raushana Kuwada</h1>
        <h2 className="font-bold text-clr-primary-green">
          Jakarta, Indonesia
        </h2>
      </div>
      <q>Artist</q>
      <div className="grid gap-4 ">
        <div
          className="rounded-lg bg-clr-secondary-grey py-3 font-bold transition-all duration-300 ease-in-out hover:bg-clr-primary-green hover:text-clr-secondary-black
      focus:cursor-pointer focus:bg-clr-primary-green focus:text-clr-secondary-black"
        >
          Instagram
        </div>
        <div
          className="rounded-lg bg-clr-secondary-grey py-3 font-bold transition-all duration-300 ease-in-out hover:bg-clr-primary-green hover:text-clr-secondary-black
      focus:cursor-pointer focus:bg-clr-primary-green focus:text-clr-secondary-black"
        >
          LinkedIn
        </div>
        <div
          className="rounded-lg bg-clr-secondary-grey py-3 font-bold transition-all duration-300 ease-in-out hover:bg-clr-primary-green hover:text-clr-secondary-black
      focus:cursor-pointer focus:bg-clr-primary-green focus:text-clr-secondary-black"
        >
          Spotify
        </div>
        <div
          className="rounded-lg bg-clr-secondary-grey py-3 font-bold transition-all duration-300 ease-in-out hover:bg-clr-primary-green hover:text-clr-secondary-black
      focus:cursor-pointer focus:bg-clr-primary-green focus:text-clr-secondary-black"
        >
          Twitter
        </div>
        <div
          className="rounded-lg bg-clr-secondary-grey py-3 font-bold transition-all duration-300 ease-in-out hover:bg-clr-primary-green hover:text-clr-secondary-black
      focus:cursor-pointer focus:bg-clr-primary-green focus:text-clr-secondary-black"
        >
          WhatsApp
        </div>
      </div>
    </div>
  )
}

export default App
