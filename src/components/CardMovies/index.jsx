import React from "react";
import { Link } from "react-router-dom";
import { img_300, img_not_available } from "../../config/config";

const CardMovies = ({ data, mediaType }) => {
  const {
    id,
    poster_path,
    original_title,
    original_language,
    name,
    vote_average,
  } = data;
  const ImageURL = poster_path ? img_300 + poster_path : img_not_available;
  const title = original_title || name;
  const Vote_average = parseInt(vote_average);
  const release_Date = data.release_date || data.first_air_date;
  const media_type = data.media_type
    ? data.media_type
    : data.type
    ? data.type
    : mediaType;
  return (
    <>
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
        <Link className="video-thumb" to={`/details/${id}/${media_type}`}>
          <figure className="video-image">
            <span>
              <img src={ImageURL} alt={"card imgae"} />
            </span>
            <div className="circle-rate">
              <svg
                className="circle-chart"
                viewBox="0 0 30 30"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="circle-chart__background"
                  stroke="#2f3439"
                  strokeWidth="2"
                  fill="none"
                  cx="15"
                  cy="15"
                  r="14"
                ></circle>
                <circle
                  className="circle-chart__circle"
                  stroke="#4eb04b"
                  strokeWidth="2"
                  strokeDasharray={`${vote_average}0,100`}
                  cx="15"
                  cy="15"
                  r="14"
                ></circle>
              </svg>
              <b>{Vote_average}</b>
            </div>
            <div className="hd">
              {media_type}
              <b>{original_language || ""}</b>
            </div>
          </figure>
          <div className="video-content">
            <ul className="tags">
              <li>Relase Date</li>
            </ul>
            <small>{release_Date}</small>
            <h3 className="name">{title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardMovies;
