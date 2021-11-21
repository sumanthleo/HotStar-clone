import React from "react";
import styled from "styled-components";

function Viewer() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
    </Container>
  );
}

export default Viewer;

const Container = styled.div`
  margin-top: 10px;
  display: grid;
  padding: 30px 0px 25px;
  grid-gap: 30px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border: 2px solid grey;
  border-radius: 15px;
  box-shadow: 2px 2px grey , 0px 16px 10px -10px black;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover{
      transform: scale(1.19);
      border-color: whitesmoke;
  }
`;
