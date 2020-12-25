import { React, useState} from 'react';
import Rating from './components/rating';

function App(props) {
  const [yourMom, setYourMom] = useState(['fee','foo','fum'])
  return (
    <div className="bg-black w-full h-screen">
      <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css"/>
      <p>{yourMom}</p>
      <Rating value={yourMom} />
    </div>
  );
}

export default App;
