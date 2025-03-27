import { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import movies from "./Array";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  return (
    <>
      <Header />
      <Card />
    </>
  );
}
