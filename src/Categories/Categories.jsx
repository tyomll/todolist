import "./Categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Categories({ categories, onCategoryAdd, setCategory, setCategoryColor}) {
    const [categoryValue, setCategoryValue] = useState("");
  return (
    <div className="category">
      <h2>My Lists</h2>
      <div className="category-div">
        {categories.map((categoryItem) => {
          return (
            <li key={categoryItem.id}>
              <span
                style={{color: categoryItem.color}}
                onClick={() => {
                    categoryItem.color ="white"
                    setCategoryColor("rgba(255, 255, 255, 0.685)")
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
          placeholder="new list name"
          onChange={(e) => {
            setCategoryValue(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}
export default Categories;
