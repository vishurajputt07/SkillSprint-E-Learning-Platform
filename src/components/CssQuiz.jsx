import React, { useState } from 'react';
import QuizCard from './QuizCard';

function CssQuiz() {
    const quizAPI = {
        quizTitle: "CSS Basics Quiz",
        questions: [
            {
                id: 1,
                question: "What does CSS stand for?",
                options: [
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Creative Style Sheets",
                    "Colorful Style Sheets"
                ],
                correctAnswer: 0
            },
            {
                id: 2,
                question: "Which property is used to change the background color?",
                options: [
                    "color",
                    "background-color",
                    "bgcolor",
                    "background"
                ],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "Which CSS property controls the text size?",
                options: [
                    "font-size",
                    "text-size",
                    "font-style",
                    "text-style"
                ],
                correctAnswer: 0
            },
            {
                id: 4,
                question: "How do you make the text bold in CSS?",
                options: [
                    "font-weight: bold",
                    "text-weight: bold",
                    "text-style: bold",
                    "font-style: bold"
                ],
                correctAnswer: 0
            },
            {
                id: 5,
                question: "Which CSS property is used to change the text color?",
                options: [
                    "color",
                    "font-color",
                    "text-color",
                    "fgcolor"
                ],
                correctAnswer: 0
            },
            {
                id: 6,
                question: "Which property is used to change the left margin of an element?",
                options: [
                    "margin-left",
                    "padding-left",
                    "indent-left",
                    "left-margin"
                ],
                correctAnswer: 0
            },
            {
                id: 7,
                question: "Which is the correct CSS syntax to center-align text?",
                options: [
                    "text-align: center;",
                    "align: center;",
                    "text: center;",
                    "font-align: center;"
                ],
                correctAnswer: 0
            },
            {
                id: 8,
                question: "How do you add a border in CSS?",
                options: [
                    "border: 1px solid black;",
                    "border-style: black solid 1px;",
                    "border-width: 1px solid black;",
                    "border-set: solid 1px black;"
                ],
                correctAnswer: 0
            },
            {
                id: 9,
                question: "Which CSS property is used to change the font of an element?",
                options: [
                    "font-family",
                    "font-style",
                    "font-weight",
                    "font"
                ],
                correctAnswer: 0
            },
            {
                id: 10,
                question: "How can you add a shadow to a text in CSS?",
                options: [
                    "text-shadow: 2px 2px 5px gray;",
                    "font-shadow: 2px 2px 5px gray;",
                    "text-outline: 2px 2px gray;",
                    "shadow-text: 2px 2px 5px gray;"
                ],
                correctAnswer: 0
            }
        ],
        getQuestionById: function (id) {
            return this.questions.find((e) => e.id === id);
        }
    };

    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const handleOnOptionSubmit = (questionId, selectedOption) => {
        const question = quizAPI.getQuestionById(questionId);
        if (!answeredQuestions.includes(questionId)) {
            if (selectedOption === question.correctAnswer) {
                setScore(score + 1);
            }
            setAnsweredQuestions([...answeredQuestions, questionId]);
        }
    };

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-teal-900 text-4xl font-bold my-5'>{quizAPI.quizTitle}</h1>
                {quizAPI.questions.map((item) => (
                    <QuizCard
                        key={item.id}
                        questionId={item.id}
                        question={item.question}
                        options={item.options}
                        isAnswered={answeredQuestions.includes(item.id)}
                        handleOnOptionSubmit={handleOnOptionSubmit}
                    />
                ))}
                <h1 className='text-4xl'>{`Your score is: ${score} out of ${quizAPI.questions.length}`}</h1>
            </div>
        </div>
    );
}

export default CssQuiz;
