import { component$, $, useStore } from "@builder.io/qwik";
import styles from "./contact.module.css";
import { type DocumentHead } from "@builder.io/qwik-city";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default component$(() => {
  const formData = useStore<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit$ = $(async () => {
    console.log(formData.name);
    console.log(formData.email);
    console.log(formData.message);
  });

  return (
    <div class={styles.contact}>
      <h1>Contact Us</h1>
      <form preventdefault:submit onSubmit$={handleSubmit$}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onInput$={(event) =>
            (formData.name = (event.target as HTMLInputElement).value)
          }
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onInput$={(event) =>
            (formData.email = (event.target as HTMLInputElement).value)
          }
        />
        <label>Message</label>
        <textarea
          name="message"
          class={styles.textArea}
          onInput$={(event) =>
            (formData.message = (event.target as HTMLInputElement).value)
          }
        ></textarea>
        <div class="btn--wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Contact",
};
