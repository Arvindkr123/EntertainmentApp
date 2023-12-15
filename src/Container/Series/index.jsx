import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardMovies from "../../components/CardMovies";
import axios from "axios";
import { config } from "../../config/config";
import PaginationComponent from "../../components/Pagination";
import useGenres from "../../Hooks/useGenres";
import LeftListBar from "../../components/LeftListBar";

const TvSeriesContainer = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const [content, setContent] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [paginationNumber, setPaginationNumber] = useState(0);
  //console.log(content, paginationNumber);

  const genreforURL = useGenres(selectedGenres);
  // console.log(selectedGenres);

  const getTrendingData = async () => {
    const {
      data: { results, total_pages },
    } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${config.MovieApiKey}&page=${pageNo}&with_genres=&language=en-US&with_genres=${genreforURL}`
    );
    setContent(results);
    setPaginationNumber(total_pages);
    //console.log(results);
  };

  useEffect(() => {
    getTrendingData();
  }, [pageNo, genreforURL]);

  useEffect(() => {
    getTrendingData();
  }, []);

  useEffect(() => {
    getTrendingData();
  }, [pageNo]);

  const handleClick = (number) => {
    setPageNo(number);
  };

  return (
    <main style={{ margin: 0 }} className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <section>
              <h1 className="txtCenter">Top Trending </h1>
              <h3 className="txtCenter">Tv Series For You</h3>
            </section>
          </Col>
        </Row>

        <Row>
          {/* Left Side categroy bar */}
          <Col className="col-2">
            <LeftListBar
              genres={genres}
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
              setGenres={setGenres}
              type="tv"
              setPageNo={setPageNo}
            />
          </Col>

          <Col className="col-10">
            {/* movie of content showing here... */}
            <Row>
              {content && content.length > 0 ? (
                content.map((item) => {
                  return (
                    <CardMovies key={item.id} data={item} mediaType={"tv"} />
                  );
                })
              ) : (
                <h2>"Loading Content..."</h2>
              )}

              {paginationNumber && paginationNumber > 1 ? (
                <PaginationComponent
                  maxnum={paginationNumber}
                  activenum={pageNo}
                  handleClick={handleClick}
                />
              ) : (
                ""
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default TvSeriesContainer;
