'use client'
import React, { useState, useEffect } from 'react';

const Ideaslist = ({ userId }) => {
    const [investor, setInvestor] = useState("");
    const [ideasData, setIdeasData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all ideas
                const responseIdeas = await fetch('http://localhost:3000/api/ideas/');
                const ideas = await responseIdeas.json();

                // Fetch current investor data
                const responseInvestor = await fetch(`http://localhost:3000/api/investors/${userId}`);
                const investorData = await responseInvestor.json();
                setInvestor(investorData);

                // Calculate similarity and generate recommendations
                const recommendations = {};
                await Promise.all(ideas.map(async idea => {
                    const responseUser = await fetch(`http://localhost:3000/api/entrepreneurs/${idea.createdBy}`);
                    const userData = await responseUser.json();

                    const similarity = calculateSimilarity(investor, userData);

                    // Assuming each entrepreneur has multiple ideas, we group them by entrepreneur
                    if (!recommendations[userData.id]) {
                        recommendations[userData.id] = {};
                    }
                    recommendations[userData.id][idea.id] = similarity;
                }));

                // Set recommendations state
                setRecommendations(recommendations);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userId]);

    const calculateSimilarity = (investor, entrepreneur) => {
        // Placeholder function for similarity calculation
        // Here, you need to implement your actual similarity calculation logic
        // For demonstration, we're just returning a random number between 0 and 1
        return Math.random();
    };

    return (
        <div>
            {Object.keys(recommendations).map(entrepreneurId => (
                <div key={entrepreneurId}>
                    <h2>Recommendations for Entrepreneur {entrepreneurId}:</h2>
                    <ul>
                        {Object.entries(recommendations[entrepreneurId])
                            .sort(([, scoreA], [, scoreB]) => scoreB - scoreA) // Sort ideas based on similarity score
                            .map(([ideaId, score]) => (
                                <li key={ideaId}>Similarity Score: {score}</li>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Ideaslist;
