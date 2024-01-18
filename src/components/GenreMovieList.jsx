import GenresList from "./GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genres.map((item, index) => (
        <div key={index} className="p-8 md:px-16">
          <h2 className="text-[25px] md:text-[30px]">{item.name}</h2>
          <MovieList genreId={item.id} />
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
