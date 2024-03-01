import { component$ } from "@builder.io/qwik";
import styles from "./contact.module.css";
import { type DocumentHead } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <div class={styles.contact}>
      <h1>Contact Us</h1>
      <form>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" class={styles.textArea}></textarea>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Contact",
};
