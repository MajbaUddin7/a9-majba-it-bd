import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import Option from '../Options/Option';
import './Question.css'

const Question = ({ question }) => {
    const [open, setOpen] = useState(false);
    const { options } = question;
    console.log();
    return (
        <div className="">
            <div className='question my-7 p-7 rounded-lg border border-gray-200 shadow-md'>
                <div className="flex justify-between items-center">
                    <h2 className='md:text-3xl text-xl font-bold text-left my-5'>Quiz { } {question.question}</h2>
                    <div className="">
                        <div onClick={() => setOpen(!open)}>
                            {open ? <EyeIcon className="h-6 w-6 text-blue-500" /> : <EyeSlashIcon className="h-6 w-6 text-blue-500" />}
                        </div>

                    </div>
                </div>
                {
                    options.map((option, index) => <Option
                        key={index}
                        option={option}
                        question={question}
                        index={index}
                    ></Option>)
                }
            </div>
            <div className={`${open ? 'block' : 'hidden'}`}>
                <h3>Correct answet is: {question.correctAnswer}</h3>
            </div>
        </div>
    );
};

export default Question;