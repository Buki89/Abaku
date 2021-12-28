import { Action, ActionType, SquareType, State } from "../types";

export const changeActiveStone = (
  state: State,
  payload: { value: number; index: number }
): State => {
  return {
    field: state.field,
    stones: {
      ...state.stones,
      activeStone: payload.value,
      activeStoneIndex: payload.index,
    },
  };
};

type AddNumber = (
  state: State,
  payload: Pick<SquareType, "position" | "value" | "stoneStackIndex">
) => State;

export const addNumber: AddNumber = (state, payload) => {
  const field: SquareType[] = state.field.map((square) => {
    if (
      square.position.x === payload.position.x &&
      square.position.y === payload.position.y
    ) {
      return {
        // position: {
        //   x: payload.position.x,
        //   y: payload.position.y,
        // },
        // value: payload.value,
        ...payload,
        status: "pending",
      };
    }
    return square;
  });

  return {
    field: field,
    stones: state.stones,
  };
};

type RemoveNumber = (
  state: State,
  payload: Pick<SquareType, "position">
) => State;

export const removeNumber: RemoveNumber = (state, payload) => {
  const field: SquareType[] = state.field.map((square) => {
    if (
      square.position.x === payload.position.x &&
      square.position.y === payload.position.y
    ) {
      return {
        position: {
          x: payload.position.x,
          y: payload.position.y,
        },
        value: undefined,
        status: "empty",
      };
    }
    return square;
  });

  return {
    field,
    stones: state.stones,
  };
};

export const addStone = (
  state: State,
  payload: { index: number; value: number }
): State => {
  const newValues = state.stones.values.map((value: number, index: number) => {
    console.log("index", payload.index);
    console.log("value", payload.value);
    if (index === payload.index) {
      return payload.value;
    }
    return value;
  });

  return {
    field: state.field,
    stones: {
      ...state.stones,
      values: newValues,
    },
  };
};
export const removeStone = (
  state: State,
  payload: { index: number }
): State => {
  const newValues = state.stones.values.map((value: number, index: number) => {
    if (index === payload.index) {
      return undefined;
    }
    return value;
  });

  return {
    field: state.field,
    stones: {
      ...state.stones,
      values: newValues,
    },
  };
};

export type Reducer = (state: State, action: Action) => State;

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case ActionType.changeActiveStone:
      return changeActiveStone(state, action.payload);
    case ActionType.addNumber:
      return addNumber(state, action.payload);
    case ActionType.removeNumber:
      return removeNumber(state, action.payload);
    case ActionType.removeStone:
      return removeStone(state, action.payload);
    case ActionType.addStone:
      return addStone(state, action.payload);
    default:
      return state;
  }
};
