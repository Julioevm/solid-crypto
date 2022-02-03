import styles from './SearchBar.module.css';

export const SearchBar = (props: {handleChange: (e: any) => void}) => {
  return (
    <div className={styles.coin_search}>
      <input className={styles.coin_input} type="text" placeholder='Search...' onInput={props.handleChange}/>
    </div>
  );
};