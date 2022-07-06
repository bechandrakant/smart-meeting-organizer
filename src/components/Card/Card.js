import React, { useState } from "react";
import CardCSS from "./Card.module.scss";

const Card = ({
  title,
  descriptions
}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={`${CardCSS.card}`}
      data-testid={"card-" + title}
      style={{ background: isSelected ? "#ccffcc" : "white" }}
      onClick={(e) => {
        setIsSelected(!isSelected);
      }}
    >
      <h2 className={CardCSS.title}>{title}</h2>
      {descriptions &&
        descriptions.map((description) => {
          return (
            <p className={CardCSS.description} key={Math.random() * 100000}>
              {description}
            </p>
          );
        })}
    </div>
  );
}

export default Card