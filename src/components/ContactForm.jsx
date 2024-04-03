import { useState } from "react";
import { useSnackbar } from "notistack";

function ContactForm() {
  const [rating, setRating] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit() {
    try {
      if (!rating || !body) {
        enqueueSnackbar("Please fill in all the fields", { variant: "error" });
        return;
      }
      if (rating < 1 || rating > 5) {
        enqueueSnackbar("Rating must be between 1 and 5", { variant: "error" });
        return;
      }
      if (body.length < 10) {
        enqueueSnackbar("Body must be at least 10 characters long", {
          variant: "error",
        });
        return;
      }
      setSending(true);
      const response = await fetch(
        "https://cars-api-1lde.onrender.com/api/reviews/create-review",
        {
          method: "POST",
          body: JSON.stringify({ rating, body }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      } else {
        enqueueSnackbar("Sent, Thank you for you feedback", {
          variant: "success",
        });
        setBody("");
        setRating("");
        setSending(false);
      }
    } catch (error) {
      console.log("Error sending the review", error);
    }
  }

  return (
    <div className="contact-container">
      <h1>Leave us a review</h1>
      <div className="contact-form">
        <div className="form-group">
          <label>Rating:</label>
          <input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            type="number"
            name="rating"
          />
        </div>
        <div className="form-group">
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            name="body"
            rows="4"
          ></textarea>
        </div>
        <button onClick={handleSubmit} type="submit">
          {sending ? "Sending" : "Send"}
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
