import React from 'react';
import { useParams, Link } from 'react-router-dom';
import thoughtsData from './thoughtData';  // Import thoughts data

function ThoughtDetail() {
    const { id } = useParams();
    const thought = thoughtsData.find(thought => thought.id.toString() === id);

    if (!thought) {
        return <div>Thought not found</div>;
    }

    return (
        <div className="thought-detail">
            <img src={thought.image} alt={thought.title} className="thought-detail-image" />
            <h2>{thought.title}</h2>
            <h3>{thought.subtitle}</h3>
            <p className="thought-date">{thought.date}</p>
            <p>{thought.content}</p>
            <Link to="/thoughts" className="back-button">Back to list</Link>
        </div>
    );
}

export default ThoughtDetail;
