import React, { useState } from "react";
import styled from "styled-components";
import "./styles.css";
import { useTransition, animated } from "react-spring";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  background-color: green;
  height: 400px;
  width: 250px;
  border-radius: 30px;
  > p {
    color: white;
  }
  box-shadow: 10px 10px 5px 5px rgba(0, 0, 0, 0.14);
`;

export default function App() {
  const [show, setShow] = useState(false);
  const transition = useTransition(show, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 }
  });
  return (
    <Container>
      <h1
        onClick={() => {
          setShow((v) => !v);
        }}
      >
        Spring Lib
      </h1>
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <Card>
              <p>Hier ist eine Karte</p>
            </Card>
          </animated.div>
        ) : (
          ""
        )
      )}
    </Container>
  );
}
