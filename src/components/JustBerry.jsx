import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const JustBerry = () => {
  let navigate = useNavigate();
  let { name } = useParams();
  const [pokeData, setPokeData ]  = useState("");

  
  useEffect(
    () => {
      const fetchBerry = async () => {
        // Get Berry item url
        let rawBerryData = await fetch(`https://pokeapi.co/api/v2/berry/${name}`);
        let berryData = await rawBerryData.json();
        // console.log(berryData.item.url)
    
        // Call berry item url to get the item
        let itemUrl = berryData.item.url;
        let rawItemData = await fetch(itemUrl);
        let itemData = await rawItemData.json();
    
        setPokeData(itemData)
      };
    
      fetchBerry();
    },
    // only run on component did mount
    [name]
  );

  return (
    <div>
      {pokeData ? (
        <div>
          <h1>Just a Berry named {name}</h1> {/* {name} is from "berries/:name" from router in the App.js */}
          <img src={pokeData.sprites.default} alt="poke item" />
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      <button onClick={()=> navigate(-1)}>Back</button>
    </div>
  );
};

export default JustBerry;
