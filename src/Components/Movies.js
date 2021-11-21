import React from "react";
import styled from "styled-components";
// import { selectMovies } from "../features/movies/movieSlice";
// import { useSelector } from "react-redux";

function Movies() {
  // const movies = useSelector(selectMovies);
  // console.log(movies); sagarKumar

  return (
    <Container>
      <h3>Recommended For Marvel Movies:</h3>
      <Content>
        {/* {movies &&
          movies.map((movie) => { */}
            <Wrap>
              <img src="https://cdn.shopify.com/s/files/1/1057/4964/products/avengers-infinity-war-vintage-movie-poster-original-1-sheet-27x41_eaadd0b3-347a-41bd-8d72-3fe20089fc5d_600x.jpg?v=1613682070" />
            </Wrap>
          {/* })} */}

        <Wrap>
          <img
            src="https://cdn.shopify.com/s/files/1/1057/4964/products/avengers-endgame-vintage-movie-poster-original-1-sheet-27x41_600x.jpg?v=1621573289"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://rukminim1.flixcart.com/image/416/416/jr0y9ow0/poster/m/a/s/medium-venom-marvel-movie-poster-multicolour-13-x-19-inch-matte-original-imafcwzwnz8zxz8c.jpeg?q=70"
            alt=""
          />
        </Wrap>

        <Wrap>
          <img
            src="https://media.comicbook.com/2017/10/avengers-2-movie-poster-marvel-cinematic-universe-1038898.jpg"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin-top: -20px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms ease-in-out;
  box-shadow: 2px 2px grey;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  &:hover {
    /* transform: scale(1.01); */
    border: 3px solid whitesmoke;
  }
`;
