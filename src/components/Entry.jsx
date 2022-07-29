import React from "react";
import emojipedia from "../emojipedia";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoj}
        </span>
        <span>{props.nam}</span>
      </dt>
      <dd>{props.mean}</dd>
    </div>
  );
}
export default Entry;
