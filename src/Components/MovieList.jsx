import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTitle } from "../Redux/movieSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
  const [title, setTitle] = useState("");
  return (
    <div>
      {movies?.map((el) => (
        <div key={el.id}>
          <form
            style={{ display: "flex", flexDirection: "column", width: "250px" }}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                changeTitle({
                  movie: { title: title, posterURL: el.posterURL },
                  id: el.id,
                })
              );
            }}
          >
            <input
              type="text"
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <button type="submit">Change Name</button>
          </form>

          <p> {el.title} </p>
          <img src={el.posterURL} width={"250px"} />
          <hr />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
