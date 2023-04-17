import { useEffect, useState } from "react";
import styled from "styled-components";
import Options from "./Options";
import { getAnime } from "../../services/myAnimesApi";
import { useNavigate } from "react-router-dom";


export default function AnimeBox({ anime }) {
    const imageUrl = anime.attributes.posterImage.tiny;
    const [myAnime, setMyAnime] = useState({});
    const token = JSON.parse(localStorage.getItem('myToken'));
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAnime(anime.id, token);
            setMyAnime(result);
        };

        fetchData();
    }, [anime.id, token]);

    function animeDetails() {
        navigate(`/anime/:${anime.id}`);
    }

    return (
        <Anime>
            <h1 onClick={animeDetails}>
                {anime.attributes.canonicalTitle}
            </h1>
            <Img imageUrl={imageUrl}></Img>
            <Options id={anime.id} animeId={myAnime.animeId} animeName = {anime.attributes.canonicalTitle} />
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
    cursor: pointer;
}
@media screen and (max-width: 450px) {
    width: 100%;
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

