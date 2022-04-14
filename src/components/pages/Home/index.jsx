/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Button } from "../../atoms/Button";

export const Home = () => {
  return (
    <div css={app}>
      <Button className="submit">送信</Button>
    </div>
  );
};

const app = css`
  text-align: center;
  /* background-color: #7eecff; */
`;
