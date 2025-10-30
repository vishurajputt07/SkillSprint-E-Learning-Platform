import React from 'react';

function QuizCard({ questionId, question, options, handleOnOptionSubmit, isAnswered }) {
    return (
        <div className="quiz-card w-full max-w-md p-4 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">{question}</h2>
            <ul className="space-y-2">
                {options.map((option, index) => (
                    <li key={index}>
                        <button
                            className={`p-2 w-full text-left border rounded-md ${isAnswered ? 'bg-gray-200 cursor-not-allowed' : 'hover:bg-teal-100'}`}
                            onClick={() => handleOnOptionSubmit(questionId, index)}
                            disabled={isAnswered} // Disable if question is already answered
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuizCard;
