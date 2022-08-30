import React from "react";

const pokemons = ["Jigglypuff", "Tapu Koko"]
function AnswerPage() {
    let pokemon = pokemons[Math.floor(Math.random() * pokemons.length)]
    return(
    <div>
        <h1>✨✨✨✨✨✨✨✨✨✨✨</h1>
        <h1>You will be very lucky and successful with...</h1>
        <h1>{pokemon}!</h1>
        <h1>✨✨✨✨✨✨✨✨✨✨✨</h1>
    </div>)
}

export default AnswerPage;