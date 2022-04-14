/** @jsxImportSource @emotion/react */
import React from "react";
import logo from "./logo.svg";
import { css, keyframes } from "@emotion/react";
import { Button } from "./components/atoms/Button";

function App() {
  return (
    <div css={app}>
      <Button className="submit">送信</Button>
    </div>
  );
}

const app = css`
  text-align: center;
  /* background-color: #7eecff; */
`;

export default App;
