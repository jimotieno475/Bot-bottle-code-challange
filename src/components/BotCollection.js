
import React, { useEffect } from 'react';
import useQueryBots from './useQueryBots';

function BotCollection({ addBotToArmy, onUpdateBots, onDeleteBots }) {
  const { bots, handleDeleteBot } = useQueryBots();

  // Function to handle bot deletion
  function handleDeleteClick(bot) {
    // Send a DELETE request to the server to delete the bot
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        // Call the handleDeleteBot function to update the state in the parent component
        handleDeleteBot(bot);
      })
      .catch((error) => {
        console.error('Error while deleting the bot:', error);
      });
  }

  // Use useEffect to listen for changes in the bots array
  useEffect(() => {
    // Perform any necessary actions when the bots array changes
  }, [bots]);

  const botList = bots.map((bot) => (
    <div key={bot.id} className="bot-card">
      <img src={bot.avatar_url} alt="bot avatar" onClick={() => addBotToArmy(bot)}/>
      <h3>{bot.name}</h3>
      <p>{bot.health}</p>
      <p>{bot.damage}</p>
      <p>{bot.armor}</p>
      <p>{bot.bot_class}</p>
      <p>{bot.catchphrase}</p>
      <p>{bot.created_at}</p>
      <p>{bot.updated_at}</p>
      
      <button onClick={() => handleDeleteClick(bot)}>Delete</button> {/* Pass 'bot' as a parameter */}
    </div>
  ));

  return (
    <div className="bot-collection">
      {botList}
    </div>
  );
}

export default BotCollection;
