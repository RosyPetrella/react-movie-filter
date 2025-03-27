// import movies from "./Array";
export default function Card({ movies }) {
  console.log(movies);
  return (
    <>
      <div className="container">
        {movies.map((movie, index) => (
          <div key={index} className="card">
            <div className="card-title">{movie.title}</div>
            <div className="card-body">{movie.genre}</div>
          </div>
        ))}
      </div>
    </>
  );
}
