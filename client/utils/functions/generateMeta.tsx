import React from "react";

export function generateFavicons() {
  const FAVICON_SIZES = ["16", "32", "144", "256", "512"];

  return FAVICON_SIZES.map((s, i) => (
    <link
      key={i}
      rel="icon"
      href={`/assets/favicon/${s}x${s}.png`}
      sizes={`${s}x${s}`}
    />
  ));
}

export function generateMetaData() {
  return (
    <>
      <title>JavaScript Questions</title>
      <meta
        name="description"
        content="Train your JavaScript skills with 100+ interactive questions"
      />
      {generateFavicons()}
    </>
  );
}
