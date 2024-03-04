import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
// import ImgThunder from "../../../media/thunder.png?jsx";

export default component$(() => {
  return (
    <div class={styles.hero}>
      <div class={styles.wrapper}>
        <h1>
          On <span class="highlight">point</span>.
          <br />
          On <span class="highlight">trend</span>.
        </h1>
        <p>Have fun building your App with Qwik.</p>
      </div>
      {/* <ImgThunder class={styles["hero-image"]} alt="Image thunder" /> */}
    </div>
  );
});
