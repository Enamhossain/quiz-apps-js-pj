import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Topic = () => {
    const quizTopic=useLoaderData()
      console.log(quizTopic.data)
      
    return (
        <div className="grid grid-cols-3 gap-4 container mx-auto ">
             {
                quizTopic.data.map(topcis => <Topics
                key={topcis.id}
                topcis = {topcis}
                ></Topics>)
             } 
        </div>
    );
};

export default Topic;