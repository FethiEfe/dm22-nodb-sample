import React from "react";
import axios from "axios";

export default function Wish(props) {
  return (
    <article>
      <img src={props.image} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <button
          onClick={() =>
            axios
              .delete("/api/wishes/" + props.name)
              .then(response => props.updateWishes())
          }
        >
          Delete
        </button>
      </div>
    </article>
  );
}
