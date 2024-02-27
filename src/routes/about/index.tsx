import { component$ } from "@builder.io/qwik";
import styles from "./about.module.css";
import { type DocumentHead } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <div class={styles.about}>
      <div class={styles.container}>
        <p>About</p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About",
};
