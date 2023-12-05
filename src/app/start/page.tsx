"use client";

import Answers from "./answers";

const getQuestions = async () => {
  const data = await fetch("https://opentdb.com/api.php?amount=10");
  const questions = await data.json();

  return questions;
};

export default async function Start() {
  const questions = await getQuestions();
  let index: number = 0;

  const incorrectAnswers = questions.results[0].incorrect_answers;
  const correctAnswer = questions.results[0].correct_answer;

  const allAnswers: string[] = [...incorrectAnswers, correctAnswer];

  if (!questions) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="w-[90%] my-0 mx-auto p-8 bg-white rounded-3xl">
        <h2>{`Question ${
          index !== questions.results.length - 1 ? index + 1 : index
        }/10`}</h2>
        <h3>{`Difficulty: ${questions.results[0].difficulty}`}</h3>
        <h3>{`Category: ${questions.results[0].category}`}</h3>
        <div className="mt-8 border-2 border-pink-500 rounded-xl w-full flex flex-col justify-center p-4">
          <h2 className="text-center">{questions.results[0].question}</h2>
          <Answers questions={questions} />
        </div>
      </div>
    );
  }
}
