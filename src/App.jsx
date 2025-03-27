import { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import movies from "./Array";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) => movie.genre === selectedGenre);
      setFilteredMovies(filtered);
    }
  }, [selectedGenre]);

  const genres = [...new Set(movies.map((movie) => movie.genre))];

  return (
    <>
      <Header />
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All genres</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <Card movies={filteredMovies} />
    </>
  );
}
