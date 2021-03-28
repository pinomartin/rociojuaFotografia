import React from "react";

export const Card = ({ id, imgSrc, imgAlt, title }) => {
  return (
    <div className="col-12 col-md-4 ">
      <div key={id} className="card">
        <img src={imgSrc} className="" alt="..." />
      </div>
    </div>
  );
};
