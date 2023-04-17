import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteAnime, postAnime } from "../../services/myAnimesApi";


export default function Options({ id, animeId, animeName }) {
    const [like, setLike] = useState("white");
    const token = JSON.parse(localStorage.getItem('myToken'));

    useEffect(() => {
        if (Number(id) === animeId) {
            setLike("yellow");
        }
    }, [animeId, id]);

    async function Favorite() {
        if (like === "white") {
            setLike("yellow");
            try {
                await postAnime(Number(id), token, animeName.toLowerCase());
            } catch (err) {
                console.log(err);
            }
            return;
        } else if (like === "yellow") {
            setLike("white");
            try {
                await deleteAnime(Number(id), token);
            } catch (err) {
                console.log(err);
            }
            return;
        }
        setLike("white");
    };

    return (
        <Buttons like={like}>
            <ion-icon size="large" name="star" onClick={Favorite}></ion-icon>
        </Buttons>
    )
};

const Buttons = styled.div`
display: flex;
justify-content: center;
width: 200px;
margin-top: 5px;
ion-icon[name="star"] {
  color:${props => props.like};
  cursor: pointer;
}
/* ion-icon[name="star"] {
  color:${props => props.dislike};
  cursor: pointer;
} */
`;