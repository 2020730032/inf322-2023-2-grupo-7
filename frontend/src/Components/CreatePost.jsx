// CreatePost.jsx
import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

function CreatePost({ onAddPost, isLoggedIn, initialPosts }) {
    const [postText, setPostText] = useState('');
    const [postList, setPostList] = useState(initialPosts);

    const handleSubmit = (event) => {
        event.preventDefault();
        const timestamp = new Date().toLocaleString();
        const newPost = {
            id: new Date().getTime(),
            text: postText,
            timestamp: timestamp,
        };
        setPostList([...postList, newPost]);
        onAddPost(postText);
        setPostText('');
    };

    const handleInputChange = (event) => {
        setPostText(event.target.value);
    };

    return (
        <div>
            {isLoggedIn && (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formPostText">
                        <Form.Label>Ingresa el texto del post:</Form.Label>
                        <Form.Control type="text" value={postText} onChange={handleInputChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Crear post
                    </Button>
                </Form>
            )}

            {postList.length > 0 && (
                <ListGroup className="mt-3">
                    {postList.map((post) => (
                        <ListGroup.Item key={post.id}>
                            {post.text} - {post.timestamp}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
}

export default CreatePost;
