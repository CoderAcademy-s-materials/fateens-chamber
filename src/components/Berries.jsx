import React from "react";

const initialBerries = [
  "starf",
  "razz",
  "micle",
  "pecha",
  "cheri",
  "watmel",
  "oran",
];
class Berries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      berries: initialBerries,
      userInput: "",
    };

    // Binding is needed so that when we do 'this' it would work in the callback
    this.filterBerries = this.filterBerries.bind(this);
  }

  filterBerries(event) {
    this.setState({
      userInput: event.target.value,
    });
  }

  componentDidMount() {
    // console.log("componentDidMount")
    const url = "https://pokeapi.co/api/v2/berry/?limit=100";

    fetch(url).then((result) => {
        return result.json();
    }).then((data) => {
        const berryNames = data.results.map((berry) => berry.name);
        // console.log("data", berryNames);
        this.setState({
            berries: berryNames
        });
    }).catch((error) => {
        console.log("Error!", error);
    }).finally(() => {
        console.log("Fetch completed.");
    })
  }

  //   componentDidUpdate(){
  //     console.log("componentDidUpdate")
  //   }

  render() {
    const filteredBerries = this.state.berries.filter((berry) => {
      return berry.includes(this.state.userInput);
    });

    return (
      <div id="berries">
        <h1>Luchy Berries</h1>
        <h3>
          I sense a feeling... berries will bring you good luck this month...
        </h3>
        <h3>
          And that your luck will be magnified when you leave them at my
          chamber.
        </h3>
        <p>
          <i>Please bring any berries in the following list.</i>
        </p>
        <p>
          <b>🫐 Berry list:</b>
        </p>

        {/* search box */}
        <label>Search: </label>
        <input type="text" onChange={this.filterBerries}></input>

        <ul>
          {filteredBerries.map((berry, index) => {
            return <li key={index}>{berry}</li>;
          })}
        </ul>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bulbapedia.bulbagarden.net/wiki/Berry#Generation_III"
          >
            Click here for information about berries.
          </a>
        </p>
      </div>
    );
  }
}

export default Berries;
