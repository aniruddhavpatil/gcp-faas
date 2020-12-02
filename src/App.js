import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from 'react';
import URLForm from './URLForm.js';
import BarChart from './BarChart.js';

function App() {
  const [response, setResponse] = useState("")

  const state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: 1
  }
  const url = "https://us-central1-faas-297303.cloudfunctions.net/hello_faas_world";
  axios.get(url).then( res => {
    setResponse(res.data)
    console.log(response);
  }
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Input URL below
        </p>
  <URLForm></URLForm>
  <BarChart data={state.data} width={state.width} height={state.height} />
  <div>{response}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
