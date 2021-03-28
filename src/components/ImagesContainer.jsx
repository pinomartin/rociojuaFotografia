import React from "react";
import { imageData } from "../data/images";
import { Card } from "./Card";
export const ImagesContainer = () => {
  return (
    <section>
      <div className="jumbotron__container row g-0">
        {
          // console.log(imageData)
          imageData.map((item) => (
             <Card id={item.id} imgSrc={item.imgSrc} imgAlt={item.imgAlt} title={item.title}/>
          ))
        }
      </div>
    </section>
  );
};
