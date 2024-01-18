const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110px] md:w-[200px] rounded-3xl
        hover:border-[3px] hover:scale-110
        border-slate-400 cursor-pointer
        transition-all duration-200 ease-in"
      />
    </>
  );
}

export default MovieCard;
