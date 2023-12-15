import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { config } from "../../config/config";
import CardMovies from "../../components/CardMovies";

const HomeContainer = () => {
  const [content, setContent] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [paginationNumber, setPaginationNumber] = useState(0);
  //console.log(content, paginationNumber);

  const getTrendingData = async () => {
    const {
      data: { results, total_pages },
    } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${config.MovieApiKey}&page=${pageNo}`
    );
    setContent(results);
    setPaginationNumber(total_pages);
    //console.log(results);
  };

  useEffect(() => {
    getTrendingData();
  }, []);

  return (
    <main style={{ margin: 0 }} className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <section>
              <h1 className="txtCenter">Top Trending </h1>
              <h3 className="txtCenter">Tv and Movie For You</h3>
            </section>
          </Col>

          {/* movie of content showing here... */}
          {content && content.length > 0
            ? content.map((item) => {
                return (
                  <CardMovies key={item.id} data={item} mediaType={"tv"} />
                );
              })
            : "Loading Content..."}
        </Row>
      </Container>
    </main>
  );
};

export default HomeContainer;
