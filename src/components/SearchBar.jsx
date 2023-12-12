import { useRef } from "react";

import Card from "./UI/Card";
import styles from "./SearchBar.module.css";

const BASE_URL = "https://api.github.com/users/";

const SearchBar = ({ profileData }) => {
  const ref = useRef("");
  const spanRef = useRef();

  function handleChange(e) {
    ref.current = e.target.value;
  }

  function handleClick(e) {
    e.preventDefault();
    if (ref.current === "") {
      spanRef.current.classList.add(styles.active);
      setTimeout(() => spanRef.current.classList.remove(styles.active), 4000);
    } else {
      getUserData(BASE_URL + ref.current);
      spanRef.current.classList.remove(styles.active);
    }
  }

  async function getUserData(gitUrl) {
    try {
      let data = await fetch(gitUrl);
      let response = await data.json();
      profileData(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Card>
      <form className={styles.container}>
        {/* <div className={styles.input_wrapper}>
          <span ref={spanRef} className={`${styles.err_msg}`}>
            Can't submit empty input field!
          </span> */}
          {/* <img src="../assets/icon-search.svg"/> */}
          <span className={styles.search_input}>
            <input
              onChange={handleChange}
              id="input"
              type="search"
              name="user-input"
              placeholder="Search github username..."
              spellCheck="false"
            />
          </span>
        {/* </div> */}
          <button onClick={handleClick} className={styles["btn-search"]}>Search</button>
      </form>
    </Card>
  );
};

export default SearchBar;
