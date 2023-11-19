import React from 'react';
import { ListGroup } from 'react-bootstrap';

function ShowPosts({ postList }) {
    if (postList.length === 0) {
        return null; 
    }
    return (
        <ListGroup className="mt-3">
            {postList.map((post) => (
                <ListGroup.Item key={post.id}>
                    {post.text} - {post.timestamp}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default ShowPosts;