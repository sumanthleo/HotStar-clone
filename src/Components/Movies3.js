import React from "react";
import styled from "styled-components";

function Movies3() {
  return (
    <Container>
      <h3>Recommended Movie By Language</h3>
      <Content>
        <Wrap>
          <img src="http://pm1.narvii.com/6874/42fcf1aea8011a591de77e8bb3c01740a236c73fr1-640-950v2_uhq.jpg" />
          <span>
            <h4>English</h4>
          </span>
        </Wrap>

        <Wrap>
          <img
            src="https://m.media-amazon.com/images/I/81MTnbVuX-L._SL1500_.jpg"
            alt=""
          />
          <span>
            <h4>Telugu</h4>
          </span>
        </Wrap>
        <Wrap>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg"
            alt=""
          />
          <span>
            <h4>Hindi</h4>
          </span>
        </Wrap>

        <Wrap>
          <img src="https://pbs.twimg.com/media/Dz7Sv2JVsAAU2De.jpg" alt="" />
          <span>
            <h4>Tamil</h4>
          </span>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies3;

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 2fr));
`;
const Wrap = styled.div`
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms ease-in-out;
  box-shadow: 2px 2px grey;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  h4 {
    text-align: center;
    background: transparent;
  }
  &:hover {
    /* transform: scale(1.01); */
    border: 3px solid whitesmoke;
  }
`;
