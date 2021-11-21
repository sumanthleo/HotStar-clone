import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Movies2 from "./Movies2";
import Viewers from "./Viewer";
import Movies3 from "./Movies3";

import db from "../FireBase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      
      dispatch(setMovies(tempMovies));
    });
  });

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
      <Movies2 />
      <Movies3 />
      <Movies />
      <Movies2 />
    </Container>
  );
}

export default Home;
const Container = styled.main`
  min-height: calc(100vh - 65px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -12;
  }
`;
