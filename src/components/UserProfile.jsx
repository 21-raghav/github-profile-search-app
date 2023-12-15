import { DateTime } from "luxon";

import Card from "./UI/Card";
import styles from "./UserProfile.module.css";

const UserProfile = ({ data }) => {
  let noUserFound = false;
  // check if user exists
  if (data.message === "Not Found") {
    noUserFound = !noUserFound;
    return (
      <Card className={styles["no-user"]}>
        <p>No User Found!</p>
      </Card>
    );
  }
  // date format in luxon API
  let joiningDate;
  joiningDate = DateTime.fromISO(data.created_at).toLocaleString(
    DateTime.DATE_MED
  );

  return (
    <Card className={styles["profile-wrapper"]}>
      <div className={styles["profile-header"]}>
        <img src={data.avatar_url} alt="User's Display Photo" />
        <div className={styles["profile-name"]}>
          <h2>{data.name}</h2>
          <p>@{data.login}</p>
          <p>Joined {joiningDate}</p>
        </div>
      </div>
      <p className={styles["profile-bio"]}>
        {data.bio || "This profile has no bio."}
      </p>
      <div className={styles["profile-stats"]}>
        <div>
          <p className={styles["profile-stat-th"]}>Repos</p>
          <p className={styles["profile-stat-td"]}>{data.public_repos}</p>
        </div>
        <div>
          <p className={styles["profile-stat-th"]}>Followers</p>
          <p className={styles["profile-stat-td"]}>{data.followers}</p>
        </div>
        <div>
          <p className={styles["profile-stat-th"]}>Following</p>
          <p className={styles["profile-stat-td"]}>{data.following}</p>
        </div>
      </div>
      <div className={styles["profile-links"]}>
        <div className={styles["profile-link-item"]}>
          <img src="../assets/icon-location.svg" alt="" />
          <p id="location">{data.location || "Not available"}</p>
        </div>
        <div className={styles["profile-link-item"]}>
          <img src="../assets/icon-website.svg" alt="" />
          <p id="page">{data.blog || "Not available"}</p>
        </div>
        <div className={styles["profile-link-item"]}>
          <img src="../assets/icon-twitter.svg" alt="" />
          <p id="twitter">{data.twitter_username || "Not available"}</p>
        </div>
        <div className={styles["profile-link-item"]}>
          <img src="../assets/icon-company.svg" alt="" />
          <p id="company">{data.company || "Not available"}</p>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;
