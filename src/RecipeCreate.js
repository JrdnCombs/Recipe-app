import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    };
  
  const [formData, setFormData] = useState({ ...initialFormState });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = ["name", "cuisine", "photo", "ingredients", "preparation"];
    if (requiredFields.some((field) => formData[field].trim() === "")) {
    alert("Please fill in all required fields.");
    return;
    }

    addRecipe(formData);
    setFormData({ ...initialFormState });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="text"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="URL"
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="text"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Preparation"
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
