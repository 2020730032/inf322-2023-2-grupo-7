import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ShowPosts from '../Utils/ShowPosts'; // Importa la nueva función ShowPosts

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

            <ShowPosts postList={postList} /> {/* Utiliza la función ShowPosts para mostrar los posts */}
        </div>
    );
}

export default CreatePost;
