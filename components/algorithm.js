"use client";
import React, { useState, useEffect } from "react";
import INTCard from "../components/intidealistcard";

const Ideaslist = ({ userId }) => {

  const [recommendations, setRecommendations] = useState([]);
  const [investor, setInvestor] = useState();
  const [ideasData, setIdeasData] = useState([]);
  // for idea
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/ideas/");
        const ideas = await response.json();

        const ideasWithData = await Promise.all(
          ideas.map(async (idea) => {
            const responseUser = await fetch(
              `http://localhost:3000/api/${idea.createdBy}`
            );
            const userDatas = await responseUser.json();
            const userData = userDatas.foundUser;
            return { ...idea, user: userData };
          })
        );
        setIdeasData(ideasWithData);
        const response2 = await fetch(`http://localhost:3000/api/${userId}`);
        const investorData = await response2.json();
        setInvestor(investorData.foundUser);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // Function to calculate dot product of two vectors
  useEffect(() => {
    if (investor && ideasData.length > 0) {
      const similarities = ideasData.map((idea) => ({
        idea,
        similarity: calculateSimilarity(investor, idea),
      }));
      console.log("before sort", similarities)
      similarities.sort((a, b) => b.similarity - a.similarity);
      console.log("Similarities after sorting:", similarities);

      const recommendedIdeas = similarities.map((similarity) => similarity.idea);
      console.log("Recommended ideas:", recommendedIdeas);
      setRecommendations(recommendedIdeas);
    }
  }, [investor, ideasData]);

  const dotProduct = (vector1, vector2) => {
    let result = 0;
    for (let i = 0; i < vector1.length; i++) {
      result += vector1[i] * vector2[i];
    }
    return result;
  };

  const magnitude = (vector) => {
    let sum = 0;
    for (let i = 0; i < vector.length; i++) {
      sum += vector[i] * vector[i];
    }
    return Math.sqrt(sum);
  };

  const cosineSimilarity = (vector1, vector2) => {
    const dotProd = dotProduct(vector1, vector2);
    const mag1 = magnitude(vector1);
    const mag2 = magnitude(vector2);
    if (mag1 === 0 || mag2 === 0) return 0; // Avoid division by zero
    return dotProd / (mag1 * mag2); 
  };

  const vectorizeAttributes = (investor, idea) => {
    const investorCategory = investor.category; // Convert to lowercase
    const ideaCategory = idea.category; // Convert to lowercase
  
    const investorVector = [
      investorCategory === "medical" ? 1 : 0,
      investorCategory === "Technology" ? 1 : 0, // Changed to lowercase
      investorCategory === "agri" ? 1 : 0,
      investorCategory === "bus" ? 1 : 0,
    ];
    const ideaVector = [
      ideaCategory === "medical" ? 1 : 0,
      ideaCategory === "Technology" ? 1 : 0, // Changed to lowercase
      ideaCategory === "agriculture" ? 1 : 0,
      ideaCategory === "bus" ? 1 : 0,
    ];
    return { investorVector, ideaVector };
  };

  const calculateSimilarity = (investor, idea) => {
    const { investorVector, ideaVector } = vectorizeAttributes(investor, idea);
    return cosineSimilarity(investorVector, ideaVector);
  };
  
  return (
    <div>
        {recommendations.map((idea) => (
            <div key ={idea}>
                {console.log(idea)}
        <INTCard idea={idea} />
        </div>

      ))}
    </div>
    
  );
};

export default Ideaslist;
