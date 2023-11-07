import React from "react";


function YourBotArmy({onDelete,botArmy}) {

  if (!Array.isArray(botArmy)) {
    // Handle the case where botArmy is not an array, e.g., set it to an empty array
    botArmy = [];
  }
 
  return (
      <div>
       < h2>Your Bot Army</h2>
          <div style={{display:"flex"}}>
      {/* Display bots in the army and provide a way to delete them */}
      
    
      { botArmy && botArmy.map((bot) => (
         <div key={bot.id} className="bot-card" >
           <img src={bot.avatar_url} alt="bot avator"onClick={() => onDelete(bot.id)}/>
         <h3>{bot.name}</h3>
         <p>{bot.health}</p>
         <p>{bot.damage}</p>
         <p>{bot.armor}</p>
         <p>{bot.bot_class}</p>
         <p>{bot.catchphrase}</p>
        
         <p>{bot.created_at}</p>
         <p>{bot.updated_at}</p>
      
       </div>
      ))}
    </div>
      </div>
  
  );
}

export default YourBotArmy;

