import React, { useState } from "react";

const CommentForm = ({ submitLabel, handleSubmit }) => {
  const [text, setText] = useState("");
  const isTextAreaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        name="comment"
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        cols="30"
        placeholder="Comment text."
      />
      <button className="comment-form-button"  disabled={isTextAreaDisabled}>

        {submitLabel}
      </button>
    </form>
  );
};

export default CommentForm;
