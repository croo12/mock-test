type ActionTypes = ["FIND", "CLICK"];

export type ActionType = ActionTypes[number];

export interface BaseAction {
  id: string;
  type: ActionType;
}