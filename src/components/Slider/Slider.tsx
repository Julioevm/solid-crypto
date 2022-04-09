import "./styles.css";

function Slider(props: { handleClick: () => void }) {
  return (
    <div class="slider_wrapper">
      <p>Favourites</p>
      <label class="switch">
        <input type="checkbox" onClick={() => props.handleClick()} />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default Slider;
