import styles from "./Header.module.css";

const Header = ({theme, themeChange}) => {

  function handleClick() {
    if(theme === "") {
      themeChange("dark");
    } else {
      themeChange("");
    }
  }

  return (
    <header className={`${styles.container}`}>
      <h1>devfinder</h1>
      <button onClick={handleClick} className={styles["theme-btn"]}>
        {theme === "" ? "DARK" : "LIGHT"}&emsp;
        <img src={theme === "" ? "../assets/icon-moon.svg" : "../assets/icon-sun.svg"} alt="theme icon" />
      </button>
    </header>
  );
};

export default Header;
