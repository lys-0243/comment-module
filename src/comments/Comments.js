import { useState, useEffect } from "react";
import { getComments as getCommentsApi, createComment as createCommentApi } from "../api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ currentUserId }) => {
  const [commentsBackends, setcommentsBackends] = useState([]);
  
  const rootComments = commentsBackends.filter(
    (commentsBackends) => commentsBackends.parentId === null
  );

  const addComment = (text, parentId)  => {
    console.log(text, parentId);
    createCommentApi(text, parentId).then(comment => {
        
        setcommentsBackends([comment])
        console.log(commentsBackends)
    })
  };

  const getReplies = (commentId) => {
    return commentsBackends
      .filter((commentsBackend) => commentsBackend.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  }; 

  useEffect(() => {
    getCommentsApi().then((data) => {
      setcommentsBackends(data);
    });
  });

  return (
    <div className="comments">
      <h3 className="comments-title">Commentaires</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit= {addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
          />
          
        ))}
        
      </div>
    </div>
  );
};

export default Comments;
