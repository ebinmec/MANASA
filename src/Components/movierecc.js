import {useState,useEffect} from 'react';
import backgroundImg from "../Assets/background.jpg";
import "./movierecc.css"
import "animate.css";


export default function MovieRecc() {
  const [emotion, setEmotion] = useState();
  const [movies, setMovies] = useState([]);

  const handleInputChange = event => {
    setEmotion(event.target.value);
  };

  useEffect(()=> {
   /* fetch("/members").then(
      data => {
        console.log(data)
        fetch(`http://localhost:5000/movies?emotion=${data}`)
    
    .then(data => {
      setMovies(data.movies)
      console.log(data); // Prints the array of movies to the console
    })
    .catch(error => console.error(error));
      }
    )
    */
    fetch(`http://localhost:5000/movies?emotion=happy`)
    
    .then(data => {
      setMovies(data.movies)
      console.log(data); // Prints the array of movies to the console
    })
    .catch(error => console.error(error));
      
  },[])
  
 /* const selectMovie=() => {
    fetch(`http://localhost:5000/movies?emotion=${emotion}`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.movies)
      console.log(data); // Prints the array of movies to the console
    })
    .catch(error => console.error(error));
  
  }*/
  return (
    
    <div
      style={{
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft:0
  }}
>
  <h1
    className="text-3xl "
    style={{
      textAlign: "center",
      fontSize: "3rem",
      color: "black",
      textShadow: "2px 2px 4px #000000",
    }}
  >
    Movie Recommendation System</h1>
{/*
  <h1 className="text-3xl " style={{textAlign:"center",marginTop:"2rem",fontSize:"1.5rem",fontFamily: "cursive", }}>How are you feeling?</h1><br></br>

<form style={{display:"flex",justifyContent:"space-evenly",fontSize:"1.5rem"}}>
  <div> <input
        type="radio"
        name="emotion"
        value="Happy"
        id="happy"
        checked={emotion === 'Happy'}
        onChange={handleInputChange}
      />
      <label htmlFor="happy">Happy</label>
  </div>
  <div>
  <input
        type="radio"
        name="emotion"
        value="Sad"
        id="sad"
        checked={emotion === 'Sad'}
        onChange={handleInputChange}
      />
      <label htmlFor="sad">Sad</label>
  </div>
  <div>
  <input
        type="radio"
        name="emotion"
        value="Angry"
        id="angry"
        checked={emotion === 'Angry'}
        onChange={handleInputChange}
      />
      <label htmlFor="angry">Angry</label>
    </div>
     <div>
     <input
        type="radio"
        name="emotion"
        value="Stressed"
        id="stressed"
        checked={emotion === 'Stressed'}
        onChange={handleInputChange}
      />
      <label htmlFor="stressed">Stressed</label>
     </div>
     <div>
     <input
        type="radio"
        name="emotion"
        value="Bored"
        id="bored"
        checked={emotion === 'Bored'}
        onChange={handleInputChange}
      />
      <label htmlFor="bored">Bored</label>

     </div>    
    </form>
    
<div style={{    textAlign:"center",
    marginTop: "2rem",
    fontSize: "1.2rem"}}>
<button onClick={selectMovie} style={{background:"black",borderRadius:"0.5rem",padding:"0.5rem",color:"white",cursor:"pointer"}}>
      Find Movies
    </button>
</div>
<br></br>
  */}
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginTop: "2rem",margin: "auto", fontSize: "1rem" , fontFamily: "cursive"}}>
  {movies.map((movie, id) => {
    return (
<div key={id} 
  className="animate__animated animate__fadeInUp" 
  style={{ 
    animationDelay: `${id * 0.1}s`,
    backgroundColor: "#f2f2f2", 
    padding: "1rem", 
    transition: "background-color 0.3s ease", 
    border: "1px solid #ccc", 
    borderRadius: "0.5rem", 
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    marginBottom: "1rem",
    width: "700px",
    height: "175px"
  }}
>
  <a href={movie.imdb_link} target="_blank" rel="noreferrer" style={{ color: "blue" }}>
    <h3 style={{ margin: "0" }}>{movie.title}{movie.year}</h3>
  </a>
  <p style={{ margin: "0.5rem 0" }}>Rating: {movie.rating}</p>
  <p style={{ margin: "0.5rem 0" }}>Genre: {movie.genre}</p>
  <p style={{ margin: "0.5rem 0" }}>Cast: {movie.cast}</p>
  <p style={{ margin: "0.5rem 0" }}>Director: {movie.director}</p>
</div>
);
})}
</div>
   
    </div>
  )
}