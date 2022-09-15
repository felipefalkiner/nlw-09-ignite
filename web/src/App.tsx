import { useState, useEffect } from 'react';

import './styles/main.css';
import { MagnifyingGlassPlus, UserFocus } from "phosphor-react";

import logoImg from './assets/logo-nlw.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    Ad: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games/')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          // console.log("Nome: " + game.title + " | Contagem: " + game._count.Ad)
          return (
            <GameBanner 
            key={game.id}
            bannerUrl={game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.Ad}
            />
            
          )
        })}
        

      </div>      
      
      <CreateAdBanner />

    </div>
  
  )
}

export default App
