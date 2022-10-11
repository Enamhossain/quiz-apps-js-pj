import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Topic = () => {
    const quizTopic=useLoaderData()
    //   console.log(quizTopic)
    return (
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
             {
                quizTopic.map(topcis => <Topics
                key={topcis.id}
                topcis = {topcis}
                ></Topics>)
             }
        </div>
    );
};

export default Topic;