import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const quizes = useLoaderData();
    const allQuizes = quizes.data;

    return (
        <div className='md:px-20 px-7'>
            <div className="quizes grid md:grid-cols-3 gap-12 my-8">
                {
                    allQuizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Topics;