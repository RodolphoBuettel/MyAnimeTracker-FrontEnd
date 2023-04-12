import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteAnime, postAnime } from "../../services/myAnimesApi";


export default function Options({ id, animeId }) {
    const [like, setLike] = useState("white");
    const [dislike, setDislike] = useState("white");
    const token = JSON.parse(localStorage.getItem('myToken'));

    useEffect(() => {
        if (Number(id) === animeId) {
            setLike("yellow");
        }
    }, [animeId, id]);

    async function Favorite() {
        if (like === "white") {
            setLike("yellow");
            try{
                await postAnime(Number(id), token);  
            }catch(err){
                console.log(err);
            }
            return;
        }else if(like === "yellow"){
            setLike("white");
            try{
                await deleteAnime(Number(id), token);  
            }catch(err){
                console.log(err);
            }
            return;
        }
        setLike("white");
    };

    // async function ExcludeFavorite() {
    //     if (dislike === "white") {
    //         setDislike("red");
    //         setLike("white");
    //         try{
    //             await deleteAnime(Number(id), token);  
    //         }catch(err){
    //             console.log(err);
    //         }
    //         return;
    //     }
    //     setDislike("white");
    // }


    return (
        <Buttons like={like} dislike={dislike}>
            <ion-icon size="large" name="star" onClick={Favorite}></ion-icon>
            {/* <ion-icon size="large" name="star" onClick={Favorite}></ion-icon> */}
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