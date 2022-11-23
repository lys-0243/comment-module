import { useState, useEffect } from 'react';
import { getComments as getCommentsApi  } from '../api';

const Comments = ( {currentUserId} ) => {
    const [commentsBackends, setcommentsBackends] = useState([])
    // console.log('Tous les commentaires', commentsBackends);
    const rootComments = commentsBackends.filter(
        (commentsBackends) => commentsBackends.parentId === null
    );

    useEffect(() => {
        getCommentsApi().then(data => {
            setcommentsBackends(data)
            
        })
    })
    return (
        <div className='comments'>
            <h3 className='comments-title'>Commentaires</h3>
            <div className='comments-container'>
                {rootComments.map(rootComment => (
                    <div key={rootComment.id}>{rootComment.body}</div>
                ))}
            </div>
        </div>
    );
};

export default Comments;