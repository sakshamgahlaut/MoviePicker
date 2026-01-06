const Question = ({ data, selectedOption, onSelect }) => {
  return (
    <div>
      <h3>{data.question}</h3>

      {data.options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`m-2 px-4 py-2 rounded ${
            selectedOption === opt
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default Question;
