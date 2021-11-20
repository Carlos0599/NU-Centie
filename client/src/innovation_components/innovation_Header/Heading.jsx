import { useEffect } from "react";
import style from "../innovation_Header/Heading.module.css";

const categories = [
  { category: "" },
  { category: "Showing results" },
  { category: "" },
];

function Heading({ category }) {
  return (
    <div className={style.heading}>
      <h1 className={style.heading__label}>Innovations</h1>
      <div className={style.heading__divider}></div>
      <div className="container">
        <div className={style.heading__categories}>
          {categories.map((item, index) => (
            <h2
              className={
                item.category === category
                  ? style.heading__categories_selected
                  : ""
              }
              key={index}
            >
              <p>{item.category}</p>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Heading;
