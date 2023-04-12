import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../../services/dashboardApi";
import styled from "styled-components";

export default function AnimeDetails() {
    const { id } = useParams();
    let idNumber = id.slice(1);
    const [anime, setAnime] = useState();
    const [imageUrl, setImageUrl] = useState("");
    const [backgroundImgUrl, setBackgroundImgUrl] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [episodes, setEpisodes] = useState("");
    const [rank, setRank] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://kitsu.io/api/edge/anime/${idNumber}`;
            const response = await getAnimeById(url);
            setAnime(response);
            setImageUrl(response.attributes.posterImage.small);
            setBackgroundImgUrl(response.attributes.coverImage.tiny);
            setDescription(response.attributes.description);
            setTitle(response.attributes.canonicalTitle);
            setRank(response.attributes.popularityRank);
            setEpisodes(response.attributes.episodeCount);
        };
        fetchData();
    }, [idNumber]);

    console.log(anime);

    return (
        <Container >
            <InicialMenu>
                <h1>MyAnimeTracker</h1>
            </InicialMenu>
            <AnimePoster imageUrl = {backgroundImgUrl}>
                <img src={imageUrl} alt="img" />
            </AnimePoster>
            <Title>
                {title}
            </Title>
            <Description>
               {description}
            </Description>
            <Episodes>
                Numero de episodios: {episodes}
            </Episodes>
            <Rank>
                Rank: {rank}
            </Rank>
        </Container>
    );
};

const Container = styled.div`
background-color: #333333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InicialMenu = styled.div`
width: 100%;
height: 50px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
h1{
    color: black;
    font-size: 35px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
}
`;

const AnimePoster = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 200px;
background-image: url(${props => props.imageUrl});
background-size:cover;
backdrop-filter: blur(7px);
img{
    height: 200px;
}
`;

const Title = styled.h2`
    color: white;
    font-size: 40px;
    margin-top: 20px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 15px;
`;

const Description = styled.h3`
color: white;

    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`;

const Episodes = styled.h2`
color: white;
margin-top: 15px;
margin-bottom: 15px;
font-size: 20px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
`;

const Rank = styled.h2`
color: white;
margin-bottom: 15px;
font-size: 20px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
`;