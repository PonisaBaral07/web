'use client'
import React, { useState, useEffect } from 'react';
import INTCard from '../components/intidealistcard';

const Ideaslist = () => {
    const [ideasData, setIdeasData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/ideas/');
                const ideas = await response.json();

                const ideasWithData = await Promise.all(ideas.map(async idea => {
                    const responseUser = await fetch(`http://localhost:3000/api/${idea.createdBy}`);
                    const userDatas = await responseUser.json();
                    const userData = userDatas.foundUser;
                    return { ...idea, user: userData };

                }));

                setIdeasData(ideasWithData);
                console.log(ideasWithData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {ideasData.map(idea => (
                <div key={idea._id} className="text-black">
                    <INTCard idea={ideasData}/>
                </div>
            ))}
        </div>
    );
};

export default Ideaslist;
