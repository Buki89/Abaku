type Stones = {
  activeStone: number | undefined;
  activeStoneIndex: number | undefined;
  values: number[] | undefined[];
};

export type Status = "empty" | "pending" | "done";

export type SquareType = {
  position: Position;
  value?: number;
  modifier?: Modifier;
  status?: Status;
  stoneStackIndex?: number;
};

export type Game = {
  initialMove: boolean;
};

export type State = {
  field: SquareType[];
  stones: Stones;
  game: Game;
};

export enum ActionType {
  changeActiveStone = "CHANGE_ACTIVE_STONE",
  addNumber = "ADD_NUMBER",
  removeNumber = "REMOVE_NUMBER",
  addStone = "ADD_STONE",
  removeStone = "REMOVE_STONE",
}

export type ActionAddNumber = {
  type: ActionType.addNumber;
  payload: Pick<
    SquareType,
    "position" | "value" | "stoneStackIndex" | "status"
  >;
};

export type RemoveNumber = {
  type: ActionType.removeNumber;
  payload: Pick<SquareType, "position">;
};

export type ChangeActiveStone = {
  type: ActionType.changeActiveStone;
  payload: { value: number; index: number };
};

export type AddStone = {
  type: ActionType.addStone;
  payload: {
    index: number;
    value: number;
  };
};

export type RemoveStone = {
  type: ActionType.removeStone;
  payload: {};
};

export type Action =
  | ChangeActiveStone
  | ActionAddNumber
  | RemoveNumber
  | AddStone
  | RemoveStone;

export type ContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export type Position = {
  x: number;
  y: number;
};

export type Modifier = "2x" | "2X" | "3x" | "3X";
