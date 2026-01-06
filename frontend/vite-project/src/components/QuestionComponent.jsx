import { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";
import allMovies from "../data/MoviesData";
import MovieCard from "./MovieCard";

export const QuestionComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const applyFilters = (movies, filters) => {
  return movies.filter((movie) =>
    Object.entries(filters).every(([key, value]) => movie[key] === value)
  );
};




  const handleNext = () => {
    const key = questions[currentStep].key;

    const updatedAnswers ={
      ...answers,
      [key]:selectedOption,
    }

       setAnswers(updatedAnswers);

    const sourceMovies =
    currentStep === 0 ? allMovies : filteredMovies;
    const updatedMovies = applyFilters(sourceMovies, updatedAnswers);

 
    setFilteredMovies(updatedMovies)
    setSelectedOption(null);
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="p-4">
      <div>
        <h1>So here you are</h1>
        <h3>Question {currentStep + 1} / {questions.length}</h3>
      </div>

      {currentStep < questions.length ? (
        <>
          <Question
            data={questions[currentStep]}
            selectedOption={selectedOption}
            onSelect={setSelectedOption}
          />

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className="mt-4 px-4 py-2 bg-black text-white disabled:bg-gray-400"
          >
            Next
          </button>
        </>
      ) : (
       <div>
         <h2 className="text-xl font-semibold">
          🎉 Your Movies are Ready (Next step: fetch & show)
        </h2>
        {
          filteredMovies.map(movie=>(
            <MovieCard key ={movie.id}>{movie.title}</MovieCard>
          ))
        }
       </div>
      )}
    </div>
  );
};
