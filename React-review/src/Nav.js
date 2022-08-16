import React,{useContext} from "react";
import { MovieContext } from "./movieContext";
const Nav = () =>{
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            <h3>Nebyou Chaka</h3>
            <p> List of Movies:{movies.length}</p>
        </div>
    )
}
export default Nav;