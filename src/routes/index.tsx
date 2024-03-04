import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../../hero/hero";

// This is the home page
export default component$(() => {
  return (
    <>
      <Hero />
      {/* <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "My New Qwik Site",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
