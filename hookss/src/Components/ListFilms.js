import React from 'react'
import FilmCards from './FilmCards'

const ListFilms = ({Films, searchName, searchRate }) => {
  return (
    
    <div>
      {Films.filter(
        (e) =>
          e.title
            .toLowerCase()
            .trim()
            .includes(searchName.toLowerCase().trim()) && (e.rate <= searchRate)
      ).map((Film) => (
        <FilmCards
          title={Film.title}
          description={Film.description}
          imgUrl={Film.imgUrl}
          date={Film.date}
          rate={Film.rate}
        />
      ))}
    </div>
  );
};


 

export default ListFilms;