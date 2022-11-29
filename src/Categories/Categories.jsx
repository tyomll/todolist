import "./Categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Categories({ categories, onCategoryAdd, setCategory }) {
  const [categoryValue, setCategoryValue] = useState("");
  return (
    <div className="category">
      <h2>My Lists</h2>
      <div className="categories-body">
        <div className="categories">
          <li>
            <span
              onClick={() => {
                setCategory("All tasks");
              }}
            >
              All tasks
            </span>
          </li>
          {categories.map((categoryItem) => {
            return (
              <li key={categoryItem.id}>
                <span
                  onClick={() => {
                    setCategory(categoryItem.text);
                  }}
                >
                  {categoryItem.text}
                </span>
              </li>
            );
          })}
        </div>

        <form
          className="category-input-form"
          onSubmit={(e) => {
            e.preventDefault();
            onCategoryAdd(categoryValue);
            setCategoryValue("");
          }}
        >
          <button className="category-add">
            <FontAwesomeIcon icon={faPlus} size="lg" color="white" />
          </button>
          <input
            value={categoryValue}
            type="text"
            className="category-input"
            placeholder="New list name"
            onChange={(e) => {
              setCategoryValue(e.target.value);
            }}
          ></input>
        </form>
      </div>
    </div>
  );
}
export default Categories;
