import react,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

   const [joke, setJoke] = useState([]);

   useEffect(() =>  {
    getJoke();
  
}, [])

   
   const getJoke = async() => {
     await axios.get("https://official-joke-api.appspot.com/random_joke").then((Response) => {

         console.log(Response);
         setJoke(Response.data);

     }).catch((err) => {
       console.log(err);
     })
   }



  return (
    <div className="App">
      <h2>API REQUEST</h2>
       <div className="card">
        <h3>{joke.setup}</h3>
        <p>{joke.punchline}</p>
        <button>see more</button>
    </div>
    </div>
  );
}

export default App;
