import React, { EventHandler, useEffect, useState } from "react";
import { useGlobalState } from "./GlobalStateProvider";
import { io, Socket } from "socket.io-client";
import { GameState } from "../stateTypes";
import { useNavigate } from "react-router-dom";
// import { socket } from "./socket";

const PlayerJoin = () => {
  const { gameState, setGameState, socket, setSocket } = useGlobalState();
  const [playerName, setPlayerName] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    socket?.emit("player signed up", playerName);
    navigate("/buzzer");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed inset-0 w-full h-full flex-col flex items-center justify-center p-8"
    >
      <label htmlFor="playerJoin" className="text-white mb-2 text-3xl">
        Select a team name
      </label>
      <input
        id="playerJoin"
        type="text"
        placeholder="Team Name"
        className="w-full max-w-lg p-4"
        value={playerName}
        onChange={handleChange}
      />
      <div className="flex gap-4 mt-4">
        <button className="bg-white p-1 appearance-none">Join Game</button>
        {/* <button onClick={handleClick} className="bg-white p-1 appearance-none">
          State: {JSON.stringify(gameState)}
        </button> */}
      </div>
    </form>
  );
};

export default PlayerJoin;
