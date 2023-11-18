import React, { useState } from 'react';
import CreatePost from "./Components/CreatePost";
import Greeting from "./Components/Greeting";
import NavBar from "./Components/NavBar";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const addPost = (text) => {
        // Lógica para agregar el post
        console.log(`Nuevo post: ${text}`);
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
                    element={isLoggedIn ? <CreatePost onAddPost={addPost} /> : <LoginForm onLogin={handleLogin} showForm={isLoggedIn} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
