import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutContainer,
  DetailsContainer,
  HomeContainer,
  MoviesContainer,
  SearchContainer,
  TvSeriesContainer,
  ContactContainer,
} from "../Container";
import { FooterComponents, HeaderComponents } from "../components";

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <HeaderComponents />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/movies" element={<MoviesContainer />} />
        <Route path="/series" element={<TvSeriesContainer />} />
        <Route path="/search" element={<SearchContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
        <Route
          path="/details/:movieId/:meadiaType/"
          element={<DetailsContainer />}
        />
      </Routes>
      <FooterComponents />
    </BrowserRouter>
  );
};

export default RouteComponent;
