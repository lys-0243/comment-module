import { useState, useEffect } from "react";
import { getComments as getCommentsApi } from "../api";
import Comment from "./Comment";

const Comments = ({ currentUserId }) => {
  const [commentsBackends, setcommentsBackends] = useState([]);
  // console.log('Tous les commentaires', commentsBackends);
  const rootComments = commentsBackends.filter(
    (commentsBackends) => commentsBackends.parentId === null
  );

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
