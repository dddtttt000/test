import React from "react";

interface DropdownProps {
  options: {
    id: number;
    title: string;
    title_eng: string | null;
    genre: string;
    director: string;
    released: string;
  }[];
  handleDropDownClick: (data: movieType) => void;
}

interface movieType {
  id: number;
  title: string;
  title_eng: string | null;
  genre: string;
  director: string;
  released: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  handleDropDownClick,
}) => {
  console.log(options);
  return (
    <ul className="MP-movie-DropDownContainer">
      {options.map((movie) => {
        return (
          <li key={movie.id} onClick={() => handleDropDownClick(movie)}>
            <div>
              {movie.title} ({movie.genre}) ({movie.released}년작)
            </div>
            <div> 감독 : {movie.director}</div>
            <div className="MP-movie-dropdown-hr"></div>
          </li>
        );
      })}
      <li id="dropdown">원하는 결과가 없을 경우 다른 단어로 검색해주세요.</li>
    </ul>
  );
};

export default Dropdown;
