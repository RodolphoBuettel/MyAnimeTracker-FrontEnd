import { useEffect, useRef, useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { allAnime } from "../../services/dashboardApi";
import AnimeBox from "./AnimeBox";
import NavBar from "./NavBar";
import { AnimeContent, Content, SearchButton, SearchForm, SearchInput } from "../../assets/css/SearchBoxStyle";

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
  const [filtredAnimes, setFiltredAnimes] = useState([]);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${offset}`;
      const response = await allAnime(url);
      setAnimes([...animes, ...response]);
    };
    fetchData();
  }, [limit, offset]);


  const fetchSearchData = async () => {
    let url = `https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${offset}&filter[text]=${searchTerm}`;
    const response = await allAnime(url);
    setFiltredAnimes(response);
    setAnimes(response);
    setOffset(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchSearchData();
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
      <Content>
        <NavBar />
        <Contein>
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
        </Contein>
        <AnimeContent>
          {searchTerm && filtredAnimes.map((anime) => (
            <AnimeBox key={anime.id} anime={anime} />
          ))}
          {!searchTerm && animes.map((anime) => (
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
  overflow-y: hidden;
  flex-direction: row;
  background-color: #333333;
  min-height: 100vh;
  z-index: 1;
`;

const Contein = styled.div`
    display: flex;
    background-color: blue;
    align-items: center;
    justify-content: center;
`;