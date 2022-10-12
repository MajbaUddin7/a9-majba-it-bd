import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Option.css';

const Option = ({ option, index, question }) => {
    // console.log(question.correctAnswer);
    const { correctAnswer } = question;
    const notify = ({ option, correctAnswer }) => {
        if (option === correctAnswer) {
            toast('Your answer is correct');
        } else {
            toast('Your answer is wrong.');
        }
        // console.log(option, correctAnswer);
    }

    return (
        <div className="">
            <div className='text-left my-2 flex content-center'>

                <div className="" onClick={() => notify({ option, correctAnswer })}>
                    <li>{option}</li>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Option;