import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import axios from "axios";
import { config, img_300, img_not_available } from "../../config/config";
import { Col, Container, Row } from "react-bootstrap";
import DarkVariantExample from "../../components/Carousel";

const DetailsContainer = () => {
  const { movieId, mediaType } = useParams();
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [credits, setCredits] = useState();
  const titleName =
    content && content.name && content.name !== ""
      ? content.name
      : content && content.title && content.title !== ""
      ? content.title
      : "";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${movieId}?api_key=${config.MovieApiKey}&language=en-US`
      );
      setContent(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${movieId}/videos?api_key=${config.MovieApiKey}&language=en-US`
      );
      setVideo(data.results[0]?.key);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCredits = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${movieId}/credits?api_key=${config.MovieApiKey}&language=en-US`
      );
      setCredits(data.cast);
      //console.log("sdata", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCredits();
    fetchVideo();
  }, []);

  const renderDataHtml = () => {
    const ImageURL = content.poster_path
      ? img_300 + content.poster_path
      : img_not_available;
    const tagline = content.tagline || "";
    const vote_average = parseInt(content.vote_average);
    const original_language = content.original_language || "";
    const adult = !content.adult ? "10+" : "18+";
    const origin_country =
      content.origin_country && content.origin_country[0]
        ? content.origin_country[0]
        : content.production_countries &&
          content.production_countries[0] &&
          content.production_countries[0].name
        ? content.production_countries[0].name
        : "";
    const overview = content.overview;
    const first_air_date = content.first_air_date || content.release_date;
    const budget = content.budget || "";
    const genres =
      content.genres && content.genres.length > 0
        ? content.genres.map((item) => <span key={item.id}>{item.name}</span>)
        : "";
    return (
      <Row>
        <Col className="col-12">
          <h1>
            {titleName}
            {tagline && tagline !== "" ? <small> {tagline}</small> : ""}
          </h1>
        </Col>
        <Col className="col-12 col-xl-6">
          <div style={{ display: "flex" }} className="card--details">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flex: 2,
              }}
            >
              <img
                width={"100%"}
                height={"100%"}
                src={ImageURL}
                alt="myimage"
              />
            </div>
            <div style={{ flex: 4 }} className="card__content">
              <ul className="card__meta">
                <li>
                  <span>Genre:</span>
                  <span className="linkTag">{genres}</span>
                </li>
                <li>
                  <span>Type:</span>
                  <span className="linkTag">{mediaType.toUpperCase()}</span>
                </li>

                <li>
                  <span>Release year:</span>{" "}
                  <span className="linkTag">{first_air_date}</span>
                </li>
                {budget && budget !== "" ? (
                  <li>
                    <span>Budget:- </span>
                    <span className="linkTag"> {budget}</span>
                  </li>
                ) : (
                  ""
                )}

                <li>
                  <span>Country:</span>{" "}
                  <span className="linkTag">{origin_country}</span>{" "}
                </li>
              </ul>
              <div className="description_readmore_wrapper ">{overview}</div>
            </div>
          </div>
        </Col>
        <Col className="col-12 col-xl-6">
          <div className="frameSec">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <main className="detailsPage" style={{ margin: 0 }}>
        <Container>
          {titleName && titleName !== "" ? renderDataHtml() : "Loading....."}
        </Container>
        <section className="section">
          <div className="contentHead">
            <Container>
              <Row>
                <Col className="col-12">
                  {credits && credits.length > 0 ? (
                    <DarkVariantExample data={credits} />
                  ) : (
                    "Lading data..."
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailsContainer;
