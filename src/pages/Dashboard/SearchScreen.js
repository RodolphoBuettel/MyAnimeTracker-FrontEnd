import styled from "styled-components"
import NavBar from "../../components/DashboardComponents/NavBar";
import { AnimeContent, Content, SearchButton, SearchForm, SearchInput } from "../../assets/css/SearchBoxStyle";
import { useEffect, useRef, useState } from "react";
import { getAnimes, getAnimeByName } from "../../services/myAnimesApi";
import MyAnimeBox from "../../components/DashboardComponents/MyAnimeBox";

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
};

export default function SearchScreen() {
    const token = JSON.parse(localStorage.getItem('myToken'));
    const [myAnimes, setMyAnimes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const inputRef = useRef(null);
    const loadMore = () => {
        setPage(page + 1);
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

    const fetchData = async (page, pageSize) => {
        const result = await getAnimes(token, page, pageSize, searchTerm);
        setMyAnimes([...myAnimes, ...result]);
    };

    useEffect(() => {
        fetchData(page, pageSize);
    }, [token, page, pageSize]);

    console.log(myAnimes);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await getAnimeByName(token, searchTerm);
            setSearchResults(result);
            setSearchTerm("");
        } catch (err) {
            console.log(err);
        }
    };

    return <>
        <Dashboard>
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
                    {searchResults.length > 0
                        ? searchResults.map((anime) => (
                            <MyAnimeBox key={anime.id} anime={anime} />
                        ))
                        : myAnimes.map((anime) => (
                            <MyAnimeBox key={anime.id} anime={anime} />
                        ))}
                    <div ref={loadMoreRef}></div>
                </AnimeContent>
            </Content>
        </Dashboard>
    </>
};

const Dashboard = styled.div`
background-color: #333333;
display: flex;
min-height: 100vh;
`;

const Contein = styled.div`
    display: flex;
    background-color: blue;
    align-items: center;
    justify-content: center;
`;