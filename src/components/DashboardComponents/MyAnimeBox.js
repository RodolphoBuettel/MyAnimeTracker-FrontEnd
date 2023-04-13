import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAnimeById } from "../../services/dashboardApi";
import MyOptions from "./MyOptions";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { getAnime, addEp } from "../../services/myAnimesApi";


export default function MyAnimeBox({ anime }) {
    const [myAnime, setMyAnime] = useState({});
    const [imgUrl, setImgUrl] = useState("");
    const [title, setTitle] = useState("");
    const token = JSON.parse(localStorage.getItem('myToken'));
    const [episodesWatched, setEpisodesWatched] = useState(0);
    const [numEp, setNumEp] = useState(0);

    async function addEpisode() {
        try {
            setEpisodesWatched(episodesWatched + 1);
            await addEp(anime.animeId, token, (episodesWatched + 1));
        } catch (err) {
            console.log(err);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://kitsu.io/api/edge/anime/${anime.animeId}`;
            const response = await getAnimeById(url);
            setMyAnime(response);
            setImgUrl(response.attributes.posterImage.tiny);
            setTitle(response.attributes.canonicalTitle);
            setNumEp(response.attributes.episodeCount);
            const result = await getAnime(anime.animeId, token);
            setEpisodesWatched(result.episodesCount);
        };
        fetchData();
    }, [anime.animeId, anime.id, token]);


    function animeDetails() {
        navigate(`/anime/:${anime.animeId}`);
    }

    return (
        <Anime>
            <h1 onClick={animeDetails}>
                {title}
            </h1>
            <Img imageUrl={imgUrl}></Img>
            <MyOptions id={myAnime.id} animeId={myAnime.animeId} />
            <h1>Episodios assistidos: </h1>
            <ion-icon onClick={addEpisode} size="large" name="add-circle"></ion-icon>
            <ProgressBar variant="success"
                style={{ color: 'white' }}
                now={episodesWatched}
                max={numEp}
                label={`${episodesWatched}/${numEp}`} />
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
ion-icon[name="add-circle"] {
  color: white;
  cursor: pointer;
}
`;

const Img = styled.div`
background-image: url(${props => props.imageUrl});
background-size:cover;
background-position: center center;
border-radius: 5px;
width: 200px;
height: 200px;
`;;
