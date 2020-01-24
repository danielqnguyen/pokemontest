import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./App.css";

const Pokemon = ({ match }) => {
  // console.log("match:", match);
  // console.log("match.params.id:", match.params.id);
  // Hint:
  // Combine: https://pokeapi.co/api/v2/pokemon/ + match.params.id
  // The 4th pokemon in the pokedex is Charmander: https://pokeapi.co/api/v2/pokemon/4

  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  useEffect(() => {
    async function getPokemon() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
      );
      let data = response.data;
      setName(data.name);
      setPicture(data.sprites.front_default);
    }
    getPokemon();
  }, [match.params.id]);

  return (
    // show the name and image of a specific pokemon in this Pokemon component */
    <>
      <div className="box">
        <div className="inner">
          <h3>{name}</h3>
          <img src={picture} alt="kanto"></img>
        </div>
        <Link className="linkName" to="/">
          home
        </Link>
      </div>
    </>
  );
};

export default Pokemon;
