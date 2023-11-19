import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import ShowPosts from '../Utils/ShowPosts';
import { useNavigate } from 'react-router-dom';

function CreatePost({ onAddPost, isLoggedIn, initialPosts, create = false, show = true }) {
    const navigate = useNavigate();
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
        navigate('/inicio');
    };

    const handleInputChange = (event) => {
        setPostText(event.target.value);
    };

    return (
        <div>
            {isLoggedIn && create && (
                (<Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formPostText">
                        <Form.Label>Ingresa el texto del post:</Form.Label>
                        <Form.Control type="text" value={postText} onChange={handleInputChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Crear post
                    </Button>
                </Form>
                ))
            }
            {create && !isLoggedIn && (
                (<div className="mx-auto text-center">
                    <Alert variant="danger" className="d-inline-block mt-3"> Debes iniciar sesion para crear una denuncia. </Alert>
                </div>
                ))
            }

            {show && <ShowPosts postList={postList} />}
        </div>
    );
}

export default CreatePost;
