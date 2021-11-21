import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTAlogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
          voluptatibus odio? Nemo recusandae labore ex obcaecati eum quibusdam
          enim officia!
        </Description>
        <CTAlogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed;
    content: "";
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -12;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const CTAlogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Description = styled.p`
  font-size: 11px;
  text-align: center;
  line-height: 1.4;
`;

const CTAlogoTwo = styled.img``;
