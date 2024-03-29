export async function submitContactForm(formData: any, backendUrl: string) {
  try {
    const response = await fetch(`${backendUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (
      response.ok &&
      response.headers.get("content-type")?.includes("application/json")
    ) {
      const data = await response.json();
      return { success: true, message: data.message };
    } else {
      const message = await response.text();
      return {
        success: false,
        message: message || "Failed to submit contact information.",
      };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "There was a problem submitting the form.",
    };
  }
}
