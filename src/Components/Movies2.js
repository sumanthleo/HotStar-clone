import React from "react";
import styled from "styled-components";

function Movies2() {
  return (
    <Container>
      <h3>Recommended For DC Movies:</h3>
      <Content>
        <Wrap>
          <img
            src="https://i.pinimg.com/originals/ef/55/00/ef5500d595435c1d97e072791f4f61e8.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.dccomics.com/sites/default/files/styles/comics320x485/public/movie-covers/2018/11/Movies-Thumb_Aquaman2018_single_5bedc81a90d565.98093378.jpg?itok=fN1OGW6_"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://imgc.allpostersimages.com/img/posters/dc-comics-movie-the-dark-knight-batman-logo-on-fire-one-sheet_u-L-F9KMWE0.jpg?artPerspective=n"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.dccomics.com/sites/default/files/styles/comics320x485/public/movie-covers/2019/08/Movies-Thumb_TheJoker_20190828_5d66fba5ad5239.73009138.jpg?itok=QXpVNnxI"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies2;

const Container = styled.div`
  margin-top: 0px;
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
    border: 3px solid whitesmoke;
  }
`;
