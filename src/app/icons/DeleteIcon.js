import React from "react";

const DeleteIcon = ({
  size,
  height,
  width,
  color = "currentColor",
  ...props
}) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={size || width || 24}
    height={size || height || 24}
    role="presentation"
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 1a9 9 0 100 18 9 9 0 000-18zm4.95 12.122a1 1 0 01-1.414 1.415L10 11.414l-3.536 3.536a1 1 0 01-1.414-1.415L8.586 10 5.05 6.464a1 1 0 111.414-1.415L10 8.586l3.536-3.537a1 1 0 111.414 1.415L11.414 10l3.536 3.536z"
      clipRule="evenodd"
    />
  </svg>
);

export default DeleteIcon;
