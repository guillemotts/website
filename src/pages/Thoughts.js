import React from 'react';
import '../App.css';
import {Routes, Route, Link} from 'react-router-dom'
import ThoughtDetail from './ThoughtDetail';
import thoughtsData from './thoughtData';

function Thoughts(){
    return (

            <main id="content">
                <div className="thoughts-container">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <h1>Thoughts</h1>
                                <div className="thoughts-list">
                                    {thoughtsData.map(thought => (
                                        <div key={thought.id} className="thought-item">
                                            <img src={thought.image} alt={thought.title} className="thought-image" />
                                            <div className="thought-content">
                                                <h2><Link to={`/thoughts/${thought.id}`}>{thought.title}</Link></h2>
                                                <h3>{thought.subtitle}</h3>
                                                <p className="thought-date">{thought.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        } />
                        <Route path=":id" element={<ThoughtDetail />} />
                    </Routes>
                </div>
            </main>
        
    )

}

export default Thoughts;