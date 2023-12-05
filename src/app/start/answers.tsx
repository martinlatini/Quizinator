import { useEffect, useState } from "react";

export default async function Answers({ questions }: any) {
  const incorrectAnswers = questions.results[0].incorrect_answers;
  const correctAnswer = questions.results[0].correct_answer;
  const allAnswers: string[] = [...incorrectAnswers, correctAnswer];

  const [selectedAnswer, setSelectedAnswer] = useState("");

  function handleClick() {
    setSelectedAnswer(selectedAnswer);
  }

  useEffect(() => {
    console.log(selectedAnswer);
  }, [selectedAnswer]);

  const answerList = allAnswers.map((answer) => {
    return (
      <li
        onClick={() => console.log("hola")}
        className="text-center my-2 bg-pastel-green-500 px-8 py-2 rounded-full text-white hover:bg-pinky-800 cursor-pointer"
        key={answer}
      >
        {answer}
      </li>
    );
  });

  return (
    <div className="max-full flex justify-center">
      <ul>{answerList}</ul>
    </div>
  );
}
