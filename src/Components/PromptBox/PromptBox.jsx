import React from "react";
import styles from "./PromptBox.module.css";

const PromptBox = () => {
  return (
    <div className={styles.box}>
      <div className={styles.box_text}>Enter your prompt</div>
      <div className={styles.input_box}>
        <div className={styles.input_box_placeholder}>
          Describe the UI you want to generate...
        </div>
      </div>

      {/* .box{.input_box{.box_text{.input_box_placeholder{ */}
    </div>
  );
};

export default PromptBox;
