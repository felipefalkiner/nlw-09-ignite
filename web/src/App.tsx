import './styles/main.css';
import { MagnifyingGlassPlus } from "phosphor-react";

import logoImg from './assets/logo-nlw.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner bannerUrl="/game-1.png" title="Dota 2" adsCount={5} />

      </div>      
      
      <CreateAdBanner />

    </div>
  
  )
}

export default App
