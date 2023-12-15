import React, { useEffect } from "react";
import "./index.css";
import { BsFillXCircleFill } from "react-icons/bs";

import { ListGroup } from "react-bootstrap";
import axios from "axios";
import { config } from "../../config/config";
const LeftListBar = ({
  genres,
  selectedGenres,
  setSelectedGenres,
  setGenres,
  type,
  setPageNo,
}) => {
  const getDataList = async () => {
    const {
      data: { genres },
    } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${config.MovieApiKey}&language=en-US`
    );
    // console.log(genres);
    setGenres(genres);
  };
  useEffect(() => {
    getDataList();
  }, []);

  useEffect(() => {
    return () => {
      setGenres({});
    };
  }, []);

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    return setPageNo(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
    setGenres([...genres, genre]);
    return setPageNo(1);
  };
  return (
    <div className="asideBar">
      <h3>Filter by :- </h3>
      <ListGroup>
        {selectedGenres &&
          selectedGenres.map((item) => {
            return (
              <ListGroup.Item
                className="selected"
                key={`${item.id}newtag`}
                onClick={() => handleRemove(item)}
              >
                {item.name}
                <i>
                  <BsFillXCircleFill />
                </i>
              </ListGroup.Item>
            );
          })}
        {genres && genres.length > 0
          ? genres.map((item) => {
              return (
                <ListGroup.Item
                  key={item.id}
                  //   className="selected"
                  onClick={() => handleAdd(item)}
                >
                  {item.name}
                </ListGroup.Item>
              );
            })
          : "Loading Content...."}
      </ListGroup>
    </div>
  );
};

export default LeftListBar;
