import styles from './SearchBar.module.css';

export const SearchBar = (props: { handleChange: (e: any) => void }) => {
  return (
    <div class={styles.coin_search}>
      <input
        class={styles.coin_input}
        type="text"
        placeholder="Search..."
        onInput={(e) => props.handleChange(e)}
      />
    </div>
  );
};