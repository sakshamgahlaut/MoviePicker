const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Language: {movie.language}</p>
      <p>Rating: {movie.rating}</p>
      <p>Year: {movie.year}</p>
    </div>
  );
};

export default MovieCard;
