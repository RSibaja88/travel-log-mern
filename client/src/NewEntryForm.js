import React from "react";
import { useForm } from "react-hook-form";
import { createEntry } from "./API";

const NewEntryForm = ({ location }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (entry) => {
    try {
      entry.latitude = location.latitude;
      entry.longitude = location.longitude;
      const created = await createEntry(entry);
      console.log("created: ", created);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entryForm">
      <label htmlFor="title">City/State: </label>
      <input name="title" required ref={register} />
      <label htmlFor="description">About Visit: </label>
      <textarea name="description" rows={3} required ref={register}></textarea>
      <label htmlFor="image">Image URL: </label>
      <input name="image" ref={register} />
      <label htmlFor="rating">Rating: </label>
      <input name="rating" type="number" ref={register} />
      <label htmlFor="visit_date">Date Visited: </label>
      <input name="visit_date" type="date" required ref={register} />
      <button>Create Travel Log</button>
    </form>
  );
};
export default NewEntryForm;
