import styled from "styled-components";


export default function AnimeBox({a}){
    console.log(a)
    return (
        <>
        <Anime>
            {a}
        </Anime>
        </>
    );
};

const Anime = styled.div`
    background-color: blue;
`;