import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/counter/constants";
import { selectorCounter, selectorStep } from "../../redux/counter/selectors";

const Counter = () => {
  const counter = useSelector(selectorCounter);
  const step = useSelector(selectorStep);

  const dispatch = useDispatch();

  const handlePlusClick = () => {
    dispatch({ type: increment });
  };
  const handleMinusClick = () => {
    dispatch({ type: decrement });
  };
  const handleResetClick = () => {
    dispatch({ type: reset });
  };
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
