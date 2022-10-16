import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const JavascriptQuiz = () => {
    const quiz = useLoaderData()
    const {questions} =quiz.data
    
    return (
        <div className='container mx-auto border-lime-500 mt-12  text-xl'>
             {
                questions.map((qz,index) =><Question
                key={qz.id}
                qz ={qz}
                index={index}
                ></Question>)
             }
        </div>
    );
};

export default JavascriptQuiz;