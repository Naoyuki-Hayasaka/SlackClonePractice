/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { Colors } from "../Theme";

export const Image = (props) => {
  const { className } = props;
  return <div css={csses[className]} />;
};

Image.propTypes = {
  className: PropTypes.string,
};

const csses = {
  submit: css`
    height: 30px;
    width: 80px;
    color: #fff;
    background-color: ${Colors.mainColor};
    border-radius: 20px;
    border: none;
    font-size: 16px;
    line-height: 16px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
    &:active {
      transform: translate(0, 0.5px);
    }
  `,
};
