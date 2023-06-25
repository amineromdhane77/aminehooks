import React from "react";
import "./MovieCard.css";


const FilmCards = ({title,description,imgUrl,date}) => {
  return (
    <div style={{display:"inline-block"}}>
        <div className="card">
        <a href="#">
          <img className="img1" src={imgUrl}></img>
          <img className="img2" src={imgUrl}></img>
          <div className="title">{title}</div>
          <div className="text">{description}</div>
          <a href="#">
            <div className="catagory">
              Series <i className="fas fa-film"></i>
            </div>
          </a>
          <a href="#">
            <div className="views">
              {date} <i className="far fa-eye"></i>{" "}
            </div>
          </a>
        </a>
      </div>

    </div>
  );
};

export default FilmCards;