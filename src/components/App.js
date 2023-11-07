// import React, { useState } from 'react';
// import BotCollection from './BotCollection';
// import YourBotArmy from './YourBotArmy';
// import useQueryBots from './useQueryBots';

// function App() {
//   const [botArmy, setBotArmy] = useState([]);
//   const{bots}=useQueryBots()
//   const addBotToArmy = (bot) => {
//     if(!botArmy.find((botar)=>botar.id===bot.id))

  
//       setBotArmy([...botArmy, bot]);
//   }

//    const onUpdateBots = (updatedBots) => {
//     setBotArmy(updatedBots);
//   };
//   const onDelete = (botId) => {
//     // Filter out the bot with the specified ID
//     const updatedArmy = botArmy.filter((bot) => bot.id !== botId);
//     setBotArmy(updatedArmy);
//   }
//   // Implement "deleting" functionality here

//   return (
//     <div>
//       <useQueryBots/>
//         <YourBotArmy onDelete={onDelete} botArmy={botArmy} />
//       <BotCollection addBotToArmy={addBotToArmy} onUpdateBots={onUpdateBots} />
    
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import useQueryBots from './useQueryBots';

function App() {
  const [botArmy, setBotArmy] = useState([]);
  const { bots } = useQueryBots();

  console.log(botArmy)

  const addBotToArmy = (bot) => {
    console.log(bot)
    if (!botArmy.find((botar) => botar.id === bot.id)) {
      console.log("Bot found")
      setBotArmy([...botArmy, bot]);
    }
  }

  const onUpdateBots = (updatedBots) => {
    setBotArmy(updatedBots);
  };

  const onDelete = (botId) => {
    const updatedArmy = botArmy.filter((bot) => bot.id !== botId);
    setBotArmy(updatedArmy);
  }

  return (
    <div>
      {/* Render the bot data from useQueryBots */}
      <YourBotArmy onDelete={onDelete} botArmy={botArmy} />
      <BotCollection addBotToArmy={addBotToArmy} onUpdateBots={onUpdateBots} />
    </div>
  );
}

export default App;
