import { component$ } from "@builder.io/qwik";
import styles from "./contact.module.css";
import {
  routeAction$,
  Form,
  type DocumentHead,
  zod$,
  z,
} from "@builder.io/qwik-city";
import { submitContactForm } from "../../utils/apiService";
import dotenv from "dotenv";
dotenv.config();

export const useHandleSubmit = routeAction$(
  async (formData) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const result = await submitContactForm(formData, backendUrl);

    console.log(result.message);
  },
  zod$({
    name: z.string(),
    email: z.string(),
    message: z.string(),
  })
);

export default component$(() => {
  const handleSubmit = useHandleSubmit();

  return (
    <div class={styles.contact}>
      <h1>Contact Us</h1>
      <Form action={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" class={styles.textArea}></textarea>
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
