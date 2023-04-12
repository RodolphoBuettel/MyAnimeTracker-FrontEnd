import styled from "styled-components";
import { deleteAnime } from "../../services/myAnimesApi";


export default function MyOptions({id}){
    
    const token = JSON.parse(localStorage.getItem('myToken'));

    async function excludeFavorite() {
            try{
                await deleteAnime(Number(id), token); 
                window.location.reload(true); 
            }catch(err){
                console.log(err);
            }
            return;
        };

    return (
        <Box onClick={excludeFavorite}>
           <ion-icon size= "large" name="star"></ion-icon>
        </Box>
    );
};

const Box = styled.div`
margin-top: 10px;
ion-icon[name="star"] {
  color: yellow;
  cursor: pointer;
}
`;