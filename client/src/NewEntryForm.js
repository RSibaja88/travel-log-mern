import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createEntry } from "./API";
import "./NewEntryForm.css";

const NewEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = async (entry) => {
    try {
      setLoading(true);
      entry.latitude = location.latitude;
      entry.longitude = location.longitude;
      const created = await createEntry(entry);
      console.log("created: ", created);
      onClose();
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entryForm">
      {error ? <h3 className="erH3">Entry Failed: {error}</h3> : null}
      <label htmlFor="apiKey">API Key: </label>
      <input type="password" name="apiKey" required ref={register} />
      <label htmlFor="title">Location: </label>
      <input name="title" required ref={register} />
      <label htmlFor="description">About Visit: </label>
      <textarea name="description" rows={3} required ref={register}></textarea>
      <label htmlFor="image">Image URL: </label>
      <input name="image" ref={register} />
      <label htmlFor="rating">Rating: </label>
      <input name="rating" type="number" ref={register} />
      <label htmlFor="visit_date">Date Visited: </label>
      <input name="visit_date" type="date" required ref={register} />
      <button className="submitButton" disabled={loading}>
        {loading ? "Pending Details" : "Submit Travel Log"}
      </button>
    </form>
  );
};
export default NewEntryForm;
