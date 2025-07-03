import { Link, useNavigate} from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import { useState } from "react";

import './NavBar.css'
const Navbar = () => {

  const [search, setSearch ] = useState("")
  const Navigate = useNavigate();

  const handleSubmit = (e) =>{
    
    e.preventDefault()

    if (!search ) return
  {
    Navigate(`/search?q=${search}`)
    setSearch("")
  }
  }

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
        <BiCameraMovie />Pear
        </Link>
      </h2>

     <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquisar por um filme..." onChange={(e) => setSearch(e.target.value)}
          value={search}/>
          
        <button type="submit">
            <BiSearchAlt2 />
        </button>
     </form>
    </nav>
  );
};

export default Navbar;
