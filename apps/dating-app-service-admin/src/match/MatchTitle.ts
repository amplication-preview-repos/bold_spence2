import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "id";

export const MatchTitle = (record: TMatch): string => {
  return record.id?.toString() || String(record.id);
};
