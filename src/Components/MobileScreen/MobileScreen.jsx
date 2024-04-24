import React from "react";
import styles from "./MobileScreen.module.css";
const MobileScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Screen_out}>
        <div className={styles.Screen_Preview}>Preview</div>
        <div className={styles.Screen_text}>YOUR UI WILL BE DISPLAYED HERE</div>
      </div>
    </div>
  );
};

export default MobileScreen;
