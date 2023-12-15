import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { config } from "../../config/config.js";
import CardMovies from "../../components/CardMovies/index.jsx";
import PaginationComponent from "../../components/Pagination/index.jsx";
import SearchBarCardComponents from "../../components/‎SearchBarCardComponents‎/index.jsx";

const SearchContainer = () => {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);
  const [searchValue, setSearchValue] = useState("crime");
  const [typeValue, setTypeValue] = useState("movie");

  const GetDataTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${typeValue}?api_key=${config.MovieApiKey}&page=${pageno}&language=en-US&query=${searchValue}&include_adult=false`
    );
    // console.log("data", data.results);
    setContent(data.results);
    setPaginationno(data.total_pages);
  };

  useEffect(() => {
    GetDataTrending();
  }, []);

  const handleClick = (number) => {
    setPageno(number);
  };

  const fetchQueryData = () => {
    GetDataTrending();
  };

  useEffect(() => {
    GetDataTrending();
  }, [pageno]);

  return (
    <main style={{ margin: 0 }} className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <section>
              <h1 className="txtCenter">Search Movies / TV Series</h1>
              <h3 className="txtCenter"> For You</h3>
              <SearchBarCardComponents
                searchValue={searchValue}
                setSearchValue={(value) => setSearchValue(value)}
                typeValue={typeValue}
                setTypeValue={(value) => setTypeValue(value)}
                filterData={fetchQueryData}
              />
            </section>
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
            <Row>
              {content && content.length > 0
                ? content.map((item, index) => {
                    return (
                      <CardMovies
                        key={index}
                        data={item}
                        mediaType={typeValue}
                      />
                    );
                  })
                : "Loading ...."}

              {paginationno && paginationno > 1 ? (
                <PaginationComponent
                  maxnum={paginationno}
                  activenum={pageno}
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

export default SearchContainer;
