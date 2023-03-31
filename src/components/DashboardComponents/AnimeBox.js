import { useState } from "react";
import styled from "styled-components";


export default function AnimeBox({ anime }) {
    console.log(anime);
    const imageUrl = anime.attributes.posterImage.tiny;
    return (
        <Anime>
            <h1>
                {anime.attributes.canonicalTitle}
            </h1>
            <Img imageUrl={imageUrl} >

            </Img>
        </Anime>
    );
};

const Anime = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: blue;
width: 300px;
height: 300px;
margin-bottom: 20px;
margin-right: 20px;
h1{
    margin-top: 15px;
    margin-bottom: 20px;
}
`;

const Img = styled.div`
background-image: url(${props => props.imageUrl});
background-size:cover;
background-position: center center;
width: 200px;
height: 200px;
`;