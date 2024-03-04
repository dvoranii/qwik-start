import { component$ } from "@builder.io/qwik";
import styles from "./contact.module.css";
import { routeAction$, Form, type DocumentHead } from "@builder.io/qwik-city";

export const useHandleSubmmit = routeAction$(async (formData) => {
  console.log(formData.name);
  console.log(formData.email);
  console.log(formData.message);
});

export default component$(() => {

  const handleSubmit = useHandleSubmmit();

  return (
    <div class={styles.contact}>
      <h1>Contact Us</h1>
      <Form action={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
        />
        <label>Message</label>
        <textarea
          name="message"
          class={styles.textArea}
        ></textarea>
        <div class="btn--wrapper">
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Contact",
};
