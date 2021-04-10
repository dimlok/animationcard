import React, { useState, useRef } from "react";
import styled from "styled-components";
import "./styles.css";
import { useTransition, animated, useSpring, config } from "react-spring";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Card = styled(animated.div)`
  display: flex;
  background-image: url();
  height: 400px;
  width: 250px;
  border-radius: 30px;
  > p {
    color: white;
  }
  box-shadow: 10px 10px 5px 5px rgba(0, 0, 0, 0.14);
`;

const Content = styled(animated.div)`
  height: 350px;
  width: 600px;
  background-color: green;
  border-radius: 30px;
  margin-left: 15px;
  padding: 25px;
`;

const Header = styled.div`
  padding: 25px;
  width: 100%;
  height: 15%;
  color: white;
  background: rgba(1, 1, 1, 0.5);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export default function App() {
  const [show, setShow] = useState(false);
  const transition = useTransition(show, {
    from: { transform: "translate3d(1000px,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0,0)", opacity: 1 },
    leave: { transform: "translate3d(1000px,0,0)", opacity: 0 }
  });
  const springRef = useRef();
  const { height, width } = useSpring({
    springRef: springRef,
    config: config.stiff,
    from: { height: "300px", width: "200px" },
    to: {
      height: show ? "400px" : "300px",
      width: show ? "300px" : "200px"
    }
  });
  return (
    <>
      <h1>Spring Lib</h1>
      <Container>
        <Card
          style={{ width, height }}
          onClick={() => {
            setShow((v) => !v);
          }}
        >
          <Header>
            Hier ist eine Karte
            <p>asdhikfis sdhofois</p>
          </Header>
        </Card>
        {transition((style, item) =>
          item && show ? <Content style={style}>Hier kommt karte</Content> : ""
        )}
      </Container>
    </>
  );
}
