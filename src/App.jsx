import React, { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";

import styles from "./App.module.css";

// Initially displayed user
const DEMO_USER = {
  avatar_url: "./assets/octocat.png",
  name: "The Octocat",
  login: "octocat",
  created_at: "2011-01-25T09:00:00Z",
  bio: null,
  public_repos: 8,
  followers: 11193,
  following: 9,
  location: "San Francisco",
  blog: "https://github.blog",
  twitter_username: null,
  company: "@github",
};

const App = () => {
  const [userProfile, setUserProfile] = useState(DEMO_USER);
  const [theme, setTheme] = useState("");

  function userData(userData) {
    setUserProfile(userData);
  }

  function updatedTheme(newTheme) {
    setTheme(newTheme);
  }

  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <div className={`${styles.container}`}>
        <Header theme={theme} themeChange={updatedTheme} />
        <SearchBar profileData={userData} />
        <UserProfile data={userProfile} />
      </div>
    </div>
  );
};

export default App;
