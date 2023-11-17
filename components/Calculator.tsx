import { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number: number) => {
    if (operator) {
      setSecondNumber(secondNumber + number);
    } else {
      setFirstNumber(firstNumber + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setOperator(operator);
  };

  const calculate = () => {
    let result = '';
    switch (operator) {
      case '+':
        result = String(Number(firstNumber) + Number(secondNumber));
        break;
      case '-':
        result = String(Number(firstNumber) - Number(secondNumber));
        break;
      case '*':
        result = String(Number(firstNumber) * Number(secondNumber));
        break;
      case '/':
        result = String(Number(firstNumber) / Number(secondNumber));
        break;
      default:
        break;
    }
    setResult(result);
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperator('');
    setResult('');
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex space-x-4">
        <input
          type="text"
          value={firstNumber}
          readOnly
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <div>{operator}</div>
        <input
          type="text"
          value={secondNumber}
          readOnly
          className="border-2 border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex space-x-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number)}
            className="bg-blue-500 text-white rounded-md p-2"
          >
            {number}
          </button>
        ))}
      </div>
      <div className="flex space-x-4">
        {['+', '-', '*', '/'].map((operator) => (
          <button
            key={operator}
            onClick={() => handleOperatorClick(operator)}
            className="bg-green-500 text-white rounded-md p-2"
          >
            {operator}
          </button>
        ))}
      </div>
      <button
        onClick={calculate}
        className="bg-yellow-500 text-white rounded-md p-2"
      >
        =
      </button>
      <div>Result: {result}</div>
      <button onClick={clear} className="bg-red-500 text-white rounded-md p-2">
        Clear
      </button>
    </div>
  );
};

export default Calculator;