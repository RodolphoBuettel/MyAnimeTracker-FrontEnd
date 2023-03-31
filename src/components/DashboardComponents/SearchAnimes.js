import { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { allAnime } from "../../services/dashboardApi";
import AnimeBox from "./AnimeBox";
import NavBar from "./NavBar";
import InfiniteScroll from "react-infinite-scroller";


function useIntersectionObserver(ref, options) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}

export default function SearchAnimes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [animes, setAnimes] = useState([]);
  const [limit, setLimit]  = useState(10);
  const [offset, setOffset] = useState(7);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${offset}`;
      const filters = {};
      const response = await allAnime(url, filters);
      setAnimes([...animes, ...response]);
    };
    
    fetchData();
  }, [limit, offset]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
  };

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const loadMoreRef = useRef(null);
  const isIntersecting = useIntersectionObserver(loadMoreRef, {
    rootMargin: "0px 0px 100% 0px",
  });

  useEffect(() => {
    if (isIntersecting) {
      loadMore();
    }
  }, [isIntersecting]);


  return (
    <Container>
      <NavBar />
      <Content>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Pesquisar..."
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton type="submit">Buscar</SearchButton>
        </SearchForm>
          <AnimeContent>
            {animes.map((anime) => (
              <AnimeBox key={anime.id} anime={anime} />
            ))}
             <div ref={loadMoreRef}></div>
          </AnimeContent>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #333333;
  min-height: 100vh;
  z-index: 1;
`;

const Content = styled.div`
 width: 100%;
`;

const AnimeContent = styled.div`
display: flex;
justify-content: space-evenly;
padding-top: 20px;
flex-wrap: wrap;
overflow: scroll;
overflow-x: hidden;
max-height: 100vh;
margin: 0 auto;
`;

const SearchForm = styled.form`
background-color: blue;
height: 60px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  width: 80%;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;