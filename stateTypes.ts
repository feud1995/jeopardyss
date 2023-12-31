export interface Clue {
  text: string;
  answer: string;
  alreadyPlayed?: boolean;
}

interface GameBoard {
  category: string;
  clues: Clue[];
}

export interface GameObject {
  isBuzzerActive: boolean;
  gameBoard: GameBoard[];
}

interface PlayerObject {
  score: number;
  count: number;
  name: string;
}

interface Players {
  [key: string]: PlayerObject;
}

export type HistoryPlayer = {
  socket: string;
  name: string;
  score: number;
  totalScore: number;
  answer: "correct" | "incorrect";
  timeStamp: Date;
};

export interface GameState {
  guid: string;
  players: Players;
  count: number;
  score: number;
  isBuzzerActive: boolean;
  activePlayer: string;
  lastActivePlayer: string;
  incorrectGuesses: string[];
  gameBoard: GameBoard[];
  activeClue: Clue;
  dailyDoubleAmount?: number;
  history: HistoryPlayer[];
}
