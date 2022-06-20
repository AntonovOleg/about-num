import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { getInfo, getRandomInfo } from "../store/actions/actions";

const InputInterface: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [isRnd, setRnd] = useState(false);

  const changeText = (e: any) => {
    setValue(e.target.value);
  };

  const checkboxHandler = () => {
    setRnd(!isRnd);
  };

  const getAboutNumber = () => {
    if (value === '') return;
    isRnd
      ? dispatch<any>(getRandomInfo("trivia"))
      : dispatch<any>(getInfo("trivia", value));
  };

  const getAboutYear = () => {
    if (value === '') return;
    isRnd
      ? dispatch<any>(getRandomInfo("year"))
      : dispatch<any>(getInfo("year", value));
  };

  const getAboutDate = () => {
    if (value === '') return;
    isRnd
      ? dispatch<any>(getRandomInfo("date"))
      : dispatch<any>(getInfo("date", value));
  };

  const getAboutMath = () => {
    if (value === '') return;
    isRnd
      ? dispatch<any>(getRandomInfo("math"))
      : dispatch<any>(getInfo("math", value));
  };

  return (
    <>
      <input onChange={(e) => changeText(e)} />
      <input type="checkbox" checked={isRnd} onChange={checkboxHandler} />
      RND
      <button
        onClick={() => {
          getAboutNumber();
        }}
      >
        О числе
      </button>
      <button
        onClick={() => {
          getAboutYear();
        }}
      >
        О годе
      </button>
      <button
        onClick={() => {
          getAboutDate();
        }}
      >
        О дате
      </button>
      <button
        onClick={() => {
          getAboutMath();
        }}
      >
        Математический факт
      </button>
    </>
  );
};

export default InputInterface;
