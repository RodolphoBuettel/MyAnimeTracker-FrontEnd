import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { deleteAnime, getAnime, getAnimes, postAnime } from "../../services/myAnimesApi";
import UserContext from "../../contexts/ContextApi";


export default function Options({id}) {
    
    const [like, setLike] = useState("white");
    const [dislike, setDislike] = useState("white");
    const [myAnime, setMyAnime] = useState({});
    const token = JSON.parse(localStorage.getItem('myToken'));

    useEffect(() => {
        const fetchData = async () => {
         const result = await getAnime(id, token);
            setMyAnime(result);
        };
        
        fetchData();
      }, [id, token]);
 
    const {animeId} = myAnime;
    if(animeId === id){
        console.log("ola");
        setLike("red");
    }

   async function Favorite(){
        if(like === "white"){
            setLike("red");
            setDislike("white");
            // try{
            //     await postAnime(Number(id), token);  
            // }catch(err){
            //     console.log(err);
            // }
            return;
        }
        setLike("white");
    };

    async function ExcludeFavorite(){
        if(dislike === "white"){
            setDislike("red");
            setLike("white");
            return;
        }
        setDislike("white");
    }


    return (
        <Buttons like={like} dislike={dislike} >
            {animeId === id ? (
                <ion-icon size="large" name="heart" onClick={Favorite}></ion-icon>
            ): (
            <ion-icon size="large" name="heart" onClick={Favorite}></ion-icon>
            )
                }
            <ion-icon size="large" name="heart-dislike" onClick={ExcludeFavorite}></ion-icon>
        </Buttons>
    )
};

const Buttons = styled.div`
display: flex;
justify-content: space-between;
width: 200px;
margin-top: 5px;
ion-icon[name="heart"] {
  color:${props => props.like};
  cursor: pointer;
}
ion-icon[name="heart-dislike"] {
  color:${props => props.dislike};
  cursor: pointer;
}
`;