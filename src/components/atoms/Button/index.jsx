/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

export const Button = (props) => {
  const { children, className, onClick } = props;
  return (
    <button css={csses[className]} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

const csses = {
  submit: css`
    height: 30px;
    width: 80px;
    color: #fff;
    background-color: #1c7c54;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    line-height: 16px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  `
};
