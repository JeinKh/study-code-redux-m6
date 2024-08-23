import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const step = useSelector((state) => state.counter.step);

  const handlePlusClick = () => {};
  const handleMinusClick = () => {};
  const handleResetClick = () => {};
  const handleChangeStep = (e) => {};
  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
        <div>
          <button onClick={handleMinusClick}>Minus</button>
          <button onClick={handleResetClick}>Reset</button>
          <button onClick={handlePlusClick}>Plus</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
