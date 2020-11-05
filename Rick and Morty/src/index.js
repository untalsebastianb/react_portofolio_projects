import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import logo from "./images/logo.png";

function CharacterCard(props) {
  const { character } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
    </div>
  );
}

class App extends React.Component {
 
  state = {
    data: {}
  }

  URL = 'https://rickandmortyapi.com/api/character/'
  // Execute when component its mounted on DOM 
  componentDidMount () {
    this.fetchCharacters ()
  }

  // Asynchronous call
  fetchCharacters = async () => {
     // Fetch return a reponse
    const response = await fetch(this.URL)
    const data = await response.json()

    // Save data to the component state
    this.setState({
      data: data
    })
  }

  render() {
    if (this.state.error) {
      return "Error!";
    }

    return (
      <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="Rick y Morty" />

          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
