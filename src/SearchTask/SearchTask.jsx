import "./SearchTask.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function SearchTask({ trigger, setTrigger, setSearch }) {
  const [text, setText] = useState("");
  return trigger ? (
    <div className="searching-background">
      <div className="search-box">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          <FontAwesomeIcon icon={faCircleXmark} size="lg" color="white" />
        </button>
        <div className="search-box-heading">
          <h3>What task are you searching for?</h3>
        </div>
        <form
          className="search-input"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={text}
            onChange={(e) => {
              if (e.target.value !== " ") {
                setText(e.target.value);
              }
            }}
          />
          <span
            onClick={(e) => {
              setTrigger(false);
              setSearch(text);
            }}
          >
            <FontAwesomeIcon icon={faSearch} size="lg" color="white" />
          </span>
          <p
            className="clear-btn"
            onClick={() => {
              setText("");
              setSearch("");
              setTrigger(false);
            }}
          >
            Clear Search Results
          </p>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
export default SearchTask;
