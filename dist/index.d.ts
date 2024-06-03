import { Difficulty } from "./game_config";
import { GameConfig } from "./game_config";
import { createGameConfig } from "./game_config";
import { GameRound } from "./game_round";
import { GameRoundStatus } from "./game_round";
import { GameState } from "./game_state";
import { GameStatistics } from "./game_statistics";
import { createGameStatistics } from "./game_statistics";
import { GameStatus } from "./game";
import { HangmanGame } from "./game";
import { HelperConfig } from "./helper";
import { HelperTypeEnum } from "./helper";
import { WordListManager } from "./word_list_manager";
import { WordList } from "./word_list";
import { createWords } from "./word_list";
import { createWordListFromJson } from "./word_list";
import { createWordListFromCsv } from "./word_list";
import { Letters } from "./word";
import { Word } from "./word";
import { getLetters } from "./word";
import { createWord } from "./word";
import { stringToLetter } from "./word";
/**
 * Forza el valor a un número
 * @param {any} val Valor
 * @param {number|undefined} [defaultValue]
 * @returns
 */
export function forceNumber(val: any, defaultValue?: number | undefined): number;
export { Difficulty, GameConfig, createGameConfig, GameRound, GameRoundStatus, GameState, GameStatistics, createGameStatistics, GameStatus, HangmanGame, HelperConfig, HelperTypeEnum, WordListManager, WordList, createWords, createWordListFromJson, createWordListFromCsv, Letters, Word, getLetters, createWord, stringToLetter };
//# sourceMappingURL=index.d.ts.map