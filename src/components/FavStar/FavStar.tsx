import { createEffect, createSignal } from "solid-js";
import "./styles.css";

export const FavStar = (props: { id: string }) => {
  const [isFav, setIsFav] = createSignal(false);
  const [favList, setFavList] = createSignal<string[]>([]);

  createEffect(() => {
    const favList = localStorage.getItem("favList");
    if (favList) {
      setFavList(JSON.parse(favList));
    }
  }, []);

  createEffect(() => {
    localStorage.setItem("favList", JSON.stringify(favList()));
  }, [favList()]);

  const handleFav = (e: MouseEvent) => {
    e.preventDefault();

    if (isFav()) {
      setFavList(favList().filter((id) => id !== props.id));
    } else {
      setFavList([...favList(), props.id]);
    }
    setIsFav(!isFav());
  };

  return (
    <label
      for={`fav-${props.id}`}
      class={`custom-checkbox ${isFav() ? "fav-star-full" : "fav-star-empty"}`}
      onClick={(e) => handleFav(e)}
    >
      <input
        id={`fav-${props.id}`}
        type="checkbox"
        name={isFav() ? "Remove from favorites" : "Add to favorites"}
      />

      <span>★</span>
    </label>
  );
};
