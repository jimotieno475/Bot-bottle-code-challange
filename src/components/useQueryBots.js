import { useState, useEffect } from 'react';

function useQueryBots() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
   fetch("http://localhost:3000/bots")
   .then((res)=>res.json())
   .then((bots)=>setBots(bots))
  }, []);
  function handleDeleteBot(deletedBot) {
    const updatedItems = bots.filter((bot) => bot.id !== deletedBot.id);
    setBots(updatedItems);
  }
 
  return (
    
      {
        bots:bots,
        handleDeleteBot:handleDeleteBot
       
      
      }
    
  );
}

export default useQueryBots;

