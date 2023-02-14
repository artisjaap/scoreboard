export interface DartsPlayer {
  name: string;
  score: ScoreData[];
  currentPlayer: boolean;
}

export interface ScoreData {
  newScore: number;
  darts: String[];
  visitScore: number;
}
