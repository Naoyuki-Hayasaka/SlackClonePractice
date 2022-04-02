/** @jsxImportSource @emotion/react */
import React from "react";
import logo from "./logo.svg";
import { css, keyframes } from "@emotion/react";

function App() {
  return (
    <div css={app}>
      <header css={appHeader}>
        <img src={logo} css={appLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          css={appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const app = css`
  text-align: center;
  background-color: #7eecff;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const appLogo = css`
  height: 40vmin;
  pointer-events: none;
  animation: ${appLogoSpin} infinite 20s linear;
`;

const appHeader = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const appLink = css`
  color: #61dafb;
`;



export default App;
