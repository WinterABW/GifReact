import PropTypes from "prop-types";
import { useState } from "react";

export const First = ({ title = "Default title", num }) => {
  const [counter, setCounter] = useState(num);
  const addFunction = () => setCounter((counter) => counter + 1);
  const restFunction = () => setCounter(counter - 1);
  const resetFunction = () => setCounter(num);

  return (
    <>
      <h1 className="text-2xl">{title}</h1>
      <h2 className="text-xl">{counter}</h2>

      <div className="flex flex-row gap-2">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg p-3"
          onClick={addFunction}
        >
          ADD
        </button>
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 rounded-lg p-3"
          onClick={restFunction}
        >
          REST
        </button>
        <button
          type="button"
          className="text-white bg-orange-700 hover:bg-orange-800 rounded-lg p-3"
          onClick={resetFunction}
        >
          RESET
        </button>
      </div>
    </>
  );
};

First.propTypes = {
  title: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};
