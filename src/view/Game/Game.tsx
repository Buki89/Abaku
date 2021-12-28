import React, { FC } from "react";
import { GameBoard, Stones } from "../../components";

type GameProps = {};

const Game: FC<GameProps> = () => {
  return (
    <div>
      <GameBoard />
      <Stones />
    </div>
  );
};

export default Game;
