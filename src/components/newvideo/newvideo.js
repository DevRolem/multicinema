import React, { useState } from 'react';
import '../newvideo/newvideo.css';

function NewVideo () {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        setTitle('');
        setUrl('');
        setCategory('');
    };

    return (
        <div className='new-video'>
            <h2>Agrega un Nuevo Video</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Titulo</label>
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>URL:</label>
                    <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Agregar Video</button>
            </form>
        </div>
    );
}

export default NewVideo;