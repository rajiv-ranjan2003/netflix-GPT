import { useSelector } from "react-redux"
import MovieList from "./MovieList";


const GptMovieSuggestions = () => {
  const  {movieResults,movieNames}=useSelector(store=>store.gpt)
  
  if(!movieNames) return null;

  return (
    <div className="p-4 m-4 text-white bg-black bg-opacity-90 w-full h-full">
      <div>
        {movieNames.map((movieName,index)=>  <MovieList key={movieName}  title={movieName} movies={movieResults[index]}/>)}
      
      </div>
    </div>
  )
}

export default GptMovieSuggestions
