# Dynamic Updates

The animation will start as soon as a valid animation is wired up.

```jsx
import React from "react";
import styled from "styled-components";

function App() {
  const [animated, setAnimated] = React.useState(false);

  return (
    <Wrapper>
      <Box animated={animated} />
      <button
        onClick={() => {
          setAnimated(!animated);
        }}
      >
        {animated ? "Disable animation" : "Enable animation"}
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 100vh;
`;

const Box = styled.div`
  width: 80px;
  height: 80px;
  background: slateblue;
  animation: jump 1000ms infinite;
  animation-play-state: ${({ animated }) => (animated ? "running" : "paused")};
`;

export default App;
```
