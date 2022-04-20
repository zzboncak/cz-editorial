import { useEffect, useReducer } from "react";

type SkillState = {
  textToDisplay: string;
  nextIndex: number;
  typing: boolean;
  started: boolean;
};

function reducer(state: SkillState, action: { type: string; payload: any }) {
  switch (action.type) {
    case "START_TYPING":
      return {
        ...state,
        typing: true
      };
    case "STOP_TYPING":
      return {
        ...state,
        typing: false
      };
    case "SET_TEXT":
      return {
        ...state,
        textToDisplay: action.payload
      };
    case "SET_NEXT_INDEX":
      return {
        ...state,
        nextIndex: action.payload
      };
    case "SET_STATE":
      return action.payload;
    case "SET_STARTED":
      return {
        ...state,
        started: action.payload
      };
    default:
      return state;
  }
}

export function Skill({
  text,
  delay,
  isVisible
}: {
  text: string;
  delay: number;
  isVisible: boolean;
}) {
  const textArray = text.split("");
  const initialState: SkillState = {
    textToDisplay: "",
    nextIndex: 1,
    typing: false,
    started: false
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // only set this up once
    if (state.nextIndex === 1 && isVisible && !state.started) {
      dispatch({ type: "SET_STARTED", payload: true });
      for (let i = 0; i <= textArray.length; i++) {
        setTimeout(() => {
          if (i !== textArray.length) {
            dispatch({
              type: "SET_STATE",
              payload: {
                textToDisplay: textArray.slice(0, i).join(""),
                nextIndex: state.nextIndex + 1,
                typing: true
              }
            });
          } else if (i === textArray.length) {
            dispatch({
              type: "SET_STATE",
              payload: {
                textToDisplay: textArray.slice(0, i).join(""),
                nextIndex: state.nextIndex + 1,
                typing: false
              }
            });
          }
        }, delay + i * 110);
      }
    }
  }, [isVisible, state.nextIndex, textArray, delay, state.started]);
  return (
    <p className={`skill${state.typing ? " typing" : ""}`}>
      {state.textToDisplay}
    </p>
  );
}
