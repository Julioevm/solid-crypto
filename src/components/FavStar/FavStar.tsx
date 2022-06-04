import { createEffect, createSignal, on } from "solid-js";
import { favList, setFavList } from "../../App";
import "./styles.css";

export const FavStar = (props: { id: string }) => {
  const [isFav, setIsFav] = createSignal(false);

  createEffect(
    on(favList, () => {
      if (favList() && favList()!.includes(props.id)) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    })
  );

  const handleFav = (e: MouseEvent) => {
    e.preventDefault();

    if (isFav()) {
      setFavList(
        JSON.stringify(
          JSON.parse(favList()!).filter((id: string) => id !== props.id)
        )
      );
    } else {
      if (favList()) {
        setFavList(JSON.stringify([...JSON.parse(favList()!), props.id]));
      } else {
        setFavList(JSON.stringify([props.id]));
      }
    }
  };

  return (
    <label
      for={`fav-${props.id}`}
      class={`custom-checkbox ${isFav() ? "fav-star-full" : "fav-star-empty"}`}
      onClick={(e) => handleFav(e)}
      data-testid="fav-label"
    >
      <input
        id={`fav-${props.id}`}
        type="checkbox"
        name={isFav() ? "Remove from favorites" : "Add to favorites"}
        data-testid="fav-input"
      />

      <span>★</span>
    </label>
  );
};
