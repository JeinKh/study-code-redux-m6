import { useDispatch, useSelector } from "react-redux";

import { selectorCounter, selectorStep } from "../../redux/counter/selectors";
import {
  changeStep,
  decrement,
  increment,
  reset,
} from "../../redux/counter/actions";

const Counter = () => {
  const counter = useSelector(selectorCounter);
  const step = useSelector(selectorStep);

  const dispatch = useDispatch();

  const handlePlusClick = () => {
    dispatch(increment());
  };
  const handleMinusClick = () => {
    dispatch(decrement());
  };
  const handleResetClick = () => {
    dispatch(reset());
  };
  const handleChangeStep = (e) => {
    dispatch(changeStep(+e.target.value));
  };
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
