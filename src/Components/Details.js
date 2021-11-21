import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <BackGround>
        <img
          src="https://4.bp.blogspot.com/-KuWXfA_2zEw/WsPYrBXXXOI/AAAAAAAAVyw/1cMGP21yZcU5Y9uEKNGHuu5LabzGdKGfwCLcBGAs/s1600/Bao-Lead-Image.jpg"
          alt=""
        />
      </BackGround>
      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF737B93E2F2ABE27C74CBBEB322F18A421E7986129E9989587CEF2295B0447F/scale?width=1344&aspectRatio=1.78&format=png"
          alt=""
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2019 . 7m . Family, Anime, Kids, Fantasy.</SubTitle>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, esse?
        Nam aliquam perferendis hic debitis, ut impedit expedita voluptatibus
        explicabo at eius maiores, pariatur architecto!
      </Description>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const BackGround = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -1;
  opacity: 0.6;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  width: 35vw;
  margin-left: -50px;
  margin-top: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  background-color: grey;
  border: none;
  border-radius: 5px;
  padding: 2px;
  padding-right: 10px;
  margin-right: 10px;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;
  margin-right: 15px;

  &:hover {
    background: rgb(198, 198, 198);
    color: black;
  }
`;

const TrailerButton = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 5px;
  padding: 2px;
  padding-right: 10px;
  margin: 2px;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;
  margin-right: 15px;

  &:hover {
    background: rgb(198, 198, 198);
    color: black;
  }
`;

const AddButton = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  background-color: black;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;

  margin-right: 15px;

  span {
    font-size: 28px;
  }
`;

const GroupWatchButton = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  justify-content: center;
  background-color: black;
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 15px;
  min-height: 20px;
  margin-top: 25px;
`;

const Description = styled.div`
  font-weight: 1px;
  font-size: 19px;
  margin-top: 16px;
  max-width: 750px;
`;
