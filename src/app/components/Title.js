import React from "react";

export default function Title({ text, size, color, bold, direction, shadow }) {
  return (
    <h1
      style={{
        fontSize: size,
        color: color,
        fontWeight: bold,
        textAlign: direction,
        textShadow: shadow == true ? "#9823C2 2px 0 10px" : "none",
      }}
    >
      {text}
    </h1>
  );
}
