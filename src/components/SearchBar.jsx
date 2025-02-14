import React, { useRef } from "react";

import Card from "./UI/Card";
import styles from "./SearchBar.module.css";

// github API
const BASE_URL = "https://api.github.com/users/";

const SearchBar = ({ profileData }) => {
  const ref = useRef("");
  const spanRef = useRef();

  // extracts input value to be search
  function handleChange(e) {
    ref.current = e.target.value;
  }

  function handleClick(e) {
    e.preventDefault();
    if (ref.current === "") {
      return;
    } else {
      getUserData(BASE_URL + ref.current);
    }
  }

  // searches for users in github API
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
        <button onClick={handleClick} className={styles["btn-search"]}>
          Search
        </button>
      </form>
    </Card>
  );
};

export default SearchBar;
