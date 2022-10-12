import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Questions/Question';

const QuizDetail = () => {
    const quiz = useLoaderData();
    const quizDetail = quiz.data;
    const questions = quizDetail.questions;
    // console.log(questions);
    return (
        <div className='md:px-20 px-7'>
            <h2 className='md:text-6xl text-3xl my-4'>Quiz of {quizDetail.name}</h2>
            {
                questions.map((question, index) => <Question
                    key={index}
                    question={question}
                ></Question>)
            }
        </div>
    );
};

export default QuizDetail;