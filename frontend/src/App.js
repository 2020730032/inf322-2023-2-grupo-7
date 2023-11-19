import React, { useState, useEffect } from 'react';
import Greeting from "./Components/Greeting";
import NavBar from "./Components/NavBar";
import LoginForm from "./Components/LoginForm";
import CreatePost from './Components/CreatePost';
import About from "./Routes/About";
import Services from "./Routes/Services";
import Contact from "./Routes/Contact";
import Blog from "./Routes/Blog";
import CombinedRoute from './Utils/CombinedRoute';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [initialPosts, setInitialPosts] = useState([]);

    useEffect(() => {
        // Obtener posts almacenados en localStorage
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        // Combina los posts hardcoreados con los almacenados en localStorage
        setInitialPosts([
            {
                id: 1,
                text: 'Primer post hardcoreado',
                timestamp: '2023-01-01 12:00 PM',
            },
            {
                id: 2,
                text: 'Segundo post hardcoreado',
                timestamp: '2023-01-02 03:30 PM',
            },
            ...storedPosts,
        ]);
    }, []);

    const addPost = (text) => {
        // Lógica para agregar el post
        console.log(`Nuevo post: ${text}`);
        // Guardar el post en localStorage
        const timestamp = new Date().toLocaleString();
        const newPost = {
            id: new Date().getTime(),
            text: text,
            timestamp: timestamp,
        };
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        localStorage.setItem('posts', JSON.stringify([...storedPosts, newPost]));

        // Actualizar la lista de posts en estado
        setInitialPosts(prevPosts => [...prevPosts, newPost]);
    };

    const handleLogin = () => {
        // Lógica de inicio de sesión exitosa
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Lógica de cierre de sesión
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Greeting name="Ian Cooper" />
            <Routes>
                <Route
                    path="/login"
                    element={<LoginForm onLogin={handleLogin} showForm={!isLoggedIn} />}
                />
                <Route
                    path="/inicio"
                    element={<CombinedRoute CreatePost onAddPost={addPost} isLoggedIn={isLoggedIn} initialPosts={initialPosts} />}
                />
                <Route path="/createPost" element={<CreatePost onAddPost={addPost} isLoggedIn={isLoggedIn} initialPosts={initialPosts} />} />
                <Route path="/acerca" element={<About />} />
                <Route path="/action/3.1" element={<Services text={1}/>} />
                <Route path="/action/3.2" element={<Services text={2}/>} />
                <Route path="/action/3.3" element={<Services text={3}/>} />
                <Route path="/action/3.4" element={<Services text="separado"/>} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
    );
}

export default App;