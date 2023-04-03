import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Options from "./Options";
import UserContext from "../../contexts/ContextApi";
import { getAnime } from "../../services/myAnimesApi";


export default function AnimeBox({ anime }) {
    const imageUrl = anime.attributes.posterImage.tiny;

    return (
        <Anime>
            <h1>
                {anime.attributes.canonicalTitle}
            </h1>
            <Img imageUrl={imageUrl}></Img>
            <Options id={anime.id} />
        </Anime>
    );
};

const Anime = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: black;
width: 300px;
height: 300px;
margin-bottom: 20px;
margin-right: 20px;
h1{
    color: white;
    margin-top: 15px;
    margin-bottom: 20px;
}
`;

const Img = styled.div`
background-image: url(${props => props.imageUrl});
background-size:cover;
background-position: center center;
border-radius: 5px;
width: 200px;
height: 200px;
`;

