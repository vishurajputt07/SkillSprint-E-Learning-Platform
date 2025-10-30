import React, { useState } from 'react';
import QuizCard from './QuizCard';

function JavaScriptQuiz() {
    const quizAPI = {
        quizTitle: "JavaScript Basics Quiz",
        questions: [
            {
                id: 1,
                question: "Inside which HTML element do we put the JavaScript?",
                options: [
                    "<script>",
                    "<js>",
                    "<javascript>",
                    "<code>"
                ],
                correctAnswer: 0
            },
            {
                id: 2,
                question: "Where is the correct place to insert JavaScript in an HTML document?",
                options: [
                    "Both <head> and <body>",
                    "Only <body>",
                    "Only <head>",
                    "Before the closing </html> tag"
                ],
                correctAnswer: 0
            },
            {
                id: 3,
                question: "How do you write 'Hello World' in an alert box?",
                options: [
                    "alertBox('Hello World')",
                    "alert('Hello World')",
                    "msg('Hello World')",
                    "message('Hello World')"
                ],
                correctAnswer: 1
            },
            {
                id: 4,
                question: "How do you create a function in JavaScript?",
                options: [
                    "function = myFunction()",
                    "function myFunction()",
                    "createFunction myFunction()",
                    "function:myFunction()"
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: "How do you call a function named 'myFunction'?",
                options: [
                    "call myFunction()",
                    "call function myFunction()",
                    "myFunction()",
                    "execute myFunction()"
                ],
                correctAnswer: 2
            },
            {
                id: 6,
                question: "How to write an IF statement in JavaScript?",
                options: [
                    "if (i == 5)",
                    "if i = 5 then",
                    "if i == 5",
                    "if i = 5"
                ],
                correctAnswer: 0
            },
            {
                id: 7,
                question: "How does a WHILE loop start?",
                options: [
                    "while (i <= 10; i++)",
                    "while (i <= 10)",
                    "while i = 1 to 10",
                    "while {i = 0}"
                ],
                correctAnswer: 1
            },
            {
                id: 8,
                question: "How can you add a comment in JavaScript?",
                options: [
                    "// This is a comment",
                    "<!-- This is a comment -->",
                    "** This is a comment",
                    "/ This is a comment /"
                ],
                correctAnswer: 0
            },
            {
                id: 9,
                question: "Which of the following is not a reserved word in JavaScript?",
                options: [
                    "interface",
                    "throws",
                    "program",
                    "short"
                ],
                correctAnswer: 2
            },
            {
                id: 10,
                question: "How do you declare a JavaScript variable?",
                options: [
                    "v myVariable",
                    "var myVariable",
                    "variable = myVariable",
                    "declare myVariable"
                ],
                correctAnswer: 1
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

export default JavaScriptQuiz;
