export const ACTION_IDS = [
  'ADD_MARK',
  'CHANGE_MARK',
  'BIN',
  'BIN_X',
  'BIN_Y',
  'BIN_COLOR',
  'BIN_SIZE',
  'REMOVE_BIN',
  'REMOVE_BIN_X',
  'REMOVE_BIN_Y',
  'AGGREGATE',
  'AGGREGATE_X',
  'AGGREGATE_Y',
  'AGGREGATE_COLOR',
  'AGGREGATE_SIZE',
  'CHANGE_AGGREGATE',
  'REMOVE_AGGREGATE',
  'REMOVE_AGGREGATE_X',
  'REMOVE_AGGREGATE_Y',
  'ADD_COUNT',
  'ADD_COUNT_X',
  'ADD_COUNT_Y',
  'REMOVE_COUNT',
  'REMOVE_COUNT_X',
  'REMOVE_COUNT_Y',
  'LOG',
  'REMOVE_LOG',
  'ZERO',
  'REMOVE_ZERO',
  'STACK',
  'REMOVE_STACK',
  'ADD_FIELD',
  'CHANGE_FIELD',
  'REMOVE_FIELD',
  'ADD_CHANNEL',
  'ADD_CHANNEL_X',
  'ADD_CHANNEL_Y',
  'ADD_CHANNEL_COLOR',
  'REMOVE_CHANNEL',
  'MOVE_CHANNEL',
  'ADD_FIELD_X',
  'CHANGE_FIELD_X',
  'REMOVE_FIELD_X',
  'ADD_FIELD_Y',
  'CHANGE_FIELD_Y',
  'REMOVE_FIELD_Y',
  'ADD_FIELD_COLOR',
  'CHANGE_FIELD_COLOR',
  'REMOVE_FIELD_COLOR',
  'ADD_FIELD_SIZE',
  'CHANGE_FIELD_SIZE',
  'REMOVE_FIELD_SIZE',
  'CHANGE_TYPE',
  'CORRECT_MARK',
  'CORRECT_CHANNEL',
  'CORRECT_TYPE',
  'CORRECT_AGGREGATE',
  'CORRECT_BIN',
] as const;

export type ActionID = typeof ACTION_IDS[number];

export function isActionID(id: string): id is ActionID {
  return ACTION_IDS.includes(id as any);
}

export const ACTIONS: Record<ActionID, string> = {
  ADD_MARK: 'ADD_MARK',
  CHANGE_MARK: 'CHANGE_MARK',
  BIN: 'BIN',
  BIN_X: "BIN('X')",
  BIN_Y: "BIN('Y')",
  BIN_COLOR: "BIN('COLOR')",
  BIN_SIZE: "BIN('SIZE')",
  REMOVE_BIN: 'REMOVE_BIN',
  REMOVE_BIN_X: "REMOVE_BIN('X')",
  REMOVE_BIN_Y: "REMOVE_BIN('Y')",
  AGGREGATE: 'AGGREGATE',
  AGGREGATE_X: "AGGREGATE('X')",
  AGGREGATE_Y: "AGGREGATE('Y')",
  AGGREGATE_COLOR: "AGGREGATE('COLOR')",
  AGGREGATE_SIZE: "AGGREGATE('SIZE')",
  CHANGE_AGGREGATE: 'CHANGE_AGGREGATE',
  REMOVE_AGGREGATE: 'REMOVE_AGGREGATE',
  REMOVE_AGGREGATE_X: "REMOVE_AGGREGATE('X')",
  REMOVE_AGGREGATE_Y: "REMOVE_AGGREGATE('Y')",
  ADD_COUNT: 'ADD_COUNT',
  ADD_COUNT_X: "ADD_COUNT('X')",
  ADD_COUNT_Y: "ADD_COUNT('Y')",
  REMOVE_COUNT: 'REMOVE_COUNT',
  REMOVE_COUNT_X: "REMOVE_COUNT('X')",
  REMOVE_COUNT_Y: "REMOVE_COUNT('Y')",
  LOG: 'LOG',
  REMOVE_LOG: 'REMOVE_LOG',
  ZERO: 'ZERO',
  REMOVE_ZERO: 'REMOVE_ZERO',
  STACK: 'STACK',
  REMOVE_STACK: 'REMOVE_STACK',
  // existing encoding's field adding, changing, removing
  ADD_FIELD: 'ADD_FIELD',
  CHANGE_FIELD: 'CHANGE_FIELD',
  REMOVE_FIELD: 'REMOVE_FIELD',
  // new encoding adding removing and changing
  ADD_CHANNEL: 'ADD_CHANNEL',
  ADD_CHANNEL_X: "ADD_CHANNEL('X')",
  ADD_CHANNEL_Y: "ADD_CHANNEL('Y')",
  ADD_CHANNEL_COLOR: "ADD_CHANNEL('COLOR')",
  REMOVE_CHANNEL: 'REMOVE_CHANNEL',
  MOVE_CHANNEL: 'CHANGE_CHANNEL',
  ADD_FIELD_X: "ADD_FIELD('X')",
  CHANGE_FIELD_X: "CHANGE_FIELD('X')",
  REMOVE_FIELD_X: "REMOVE_FIELD('X')",
  ADD_FIELD_Y: "ADD_FIELD('Y')",
  CHANGE_FIELD_Y: "CHANGE_FIELD('Y')",
  REMOVE_FIELD_Y: "REMOVE_FIELD('Y')",
  ADD_FIELD_COLOR: "ADD_FIELD('COLOR')",
  CHANGE_FIELD_COLOR: "CHANGE_FIELD('COLOR')",
  REMOVE_FIELD_COLOR: "REMOVE_FIELD('COLOR')",
  ADD_FIELD_SIZE: "ADD_FIELD('SIZE')",
  CHANGE_FIELD_SIZE: "CHANGE_FIELD('SIZE')",
  REMOVE_FIELD_SIZE: "REMOVE_FIELD('SIZE')",
  CHANGE_TYPE: 'CHANGE_TYPE',
  CORRECT_MARK: 'CORRECT_MARK',
  CORRECT_CHANNEL: 'CORRECT_CHANNEL',
  CORRECT_TYPE: 'CORRECT_TYPE',
  CORRECT_AGGREGATE: 'CORRECT_AGGREGATE',
  CORRECT_BIN: 'CORRECT_BIN',
};
