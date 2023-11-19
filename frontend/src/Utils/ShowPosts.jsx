import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Denuncia from '../Components/Denuncia'; // Asegúrate de proporcionar la ruta correcta al archivo Denuncia.jsx

function ShowPosts({ postList }) {
    if (postList.length === 0) {
        return null;
    }
    return (
        <div className="mx-auto text-center"> {/* Añade la clase mx-auto y text-center aquí */}
            <h2>Denuncias Recientes</h2>
            {postList.map((post) => (
                <ListGroup.Item key={post.id}>
                    <Denuncia
                        titulo={post.text}
                        descripcion={post.description}
                        timestamp={post.timestamp}
                    />
                </ListGroup.Item>
            ))}
        </div>
    );
}

export default ShowPosts;
