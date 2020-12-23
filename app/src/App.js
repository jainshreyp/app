import { React, useState} from 'react';
import Welcome from './components/welcome';

function App(props) {
  const [yourMom, setYourMom] = useState(['fee','foo','fum'])
  return (
    <div className="App">
      <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css"/>
      <p>{yourMom}</p>
      <Welcome value={yourMom} />
    </div>
  );
}
export default App;
