import React, { useState } from 'react';
import QuizCard from './QuizCard';

function HtmlQuiz() {

  const quizAPI = {
    quizTitle: "HTML Basics Quiz",
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "Hyper Tool Markup Language"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which HTML element is used to define a paragraph?",
        options: [
          "<p>",
          "<paragraph>",
          "<para>",
          "<pg>"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "What is the correct way to make a link open in a new tab?",
        options: [
          "target='_newtab'",
          "target='_tab'",
          "target='_blank'",
          "target='_new'"
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "Which HTML element is used to define a list item?",
        options: [
          "<li>",
          "<list>",
          "<item>",
          "<ul>"
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "Which HTML tag is used to display an image?",
        options: [
          "<img>",
          "<image>",
          "<picture>",
          "<src>"
        ],
        correctAnswer: 0
      },
      {
        id: 6,
        question: "How can you create an unordered list in HTML?",
        options: [
          "<ul>",
          "<list>",
          "<ol>",
          "<li>"
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        question: "What is the correct HTML for creating a checkbox?",
        options: [
          "<input type='checkbox'>",
          "<check>",
          "<input type='check'>",
          "<checkbox>"
        ],
        correctAnswer: 0
      },
      {
        id: 8,
        question: "How do you add a background color in HTML?",
        options: [
          "background-color='blue'",
          "<body bg='blue'>",
          "style='background-color: blue;'",
          "<bgcolor='blue'>"
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
          "<a>",
          "<link>",
          "<hyperlink>",
          "<anchor>"
        ],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "Which HTML element is used to define the title of a document?",
        options: [
          "<title>",
          "<header>",
          "<head>",
          "<meta>"
        ],
        correctAnswer: 0
      }
    ],
    getQuestion: function (id) {
      return this.questions.find((q) => q.id === id);
    },
    // ... other questions

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

export default HtmlQuiz;
