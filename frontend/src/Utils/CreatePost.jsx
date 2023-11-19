import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import ShowPosts from './ShowPosts';
import { useNavigate } from 'react-router-dom';

function CreatePost({ onAddPost, isLoggedIn, initialPosts, create = false, show = true }) {
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postList, setPostList] = useState(initialPosts);

    useEffect(() => {
        // Limpiar el estado cuando el componente se monta
        setPostTitle('');
        setPostDescription('');
        setPostList(initialPosts);
    }, [initialPosts]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const timestamp = new Date().toLocaleString();
        const newPost = {
            id: new Date().getTime(),
            title: postTitle,
            description: postDescription,
            timestamp: timestamp,
        };
        setPostList([...postList, newPost]);
        onAddPost(postTitle, postDescription);
        setPostTitle('');
        setPostDescription('');
        navigate('/');
    };

    const handleTitleChange = (event) => {
        setPostTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setPostDescription(event.target.value);
    };

    return (
        <div className="mx-auto text-center">
            {isLoggedIn && create && (
                (<Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formPostTitle">
                        <Form.Label>Título de la Denuncia:</Form.Label>
                        <Form.Control type="text" value={postTitle} onChange={handleTitleChange} />
                    </Form.Group>
                    <Form.Group controlId="formPostDescription">
                        <Form.Label>Descripción de la Denuncia:</Form.Label>
                        <Form.Control as="textarea" rows={3} value={postDescription} onChange={handleDescriptionChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Crear post
                    </Button>
                </Form>
                ))
            }
            {create && !isLoggedIn && (
                (<div className="mx-auto text-center">
                    <Alert variant="danger" className="d-inline-block mt-3"> Debes iniciar sesión para crear una denuncia. </Alert>
                </div>
                ))
            }

            {show && <ShowPosts postList={postList} />}
        </div>
    );
}

export default CreatePost;
