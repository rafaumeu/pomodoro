import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}
// Tipos para cada action
export type AddNewCycleAction = {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: {
    newCycle: Cycle
  }
}

export type InterruptCurrentCycleAction = {
  type: ActionTypes.INTERRUPT_CURRENT_CYCLE
}

export type MarkCurrentCycleAsFinishedAction = {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
}

// Union type de todas as actions
export type CyclesAction =
  | AddNewCycleAction
  | InterruptCurrentCycleAction
  | MarkCurrentCycleAsFinishedAction

export function addNewCycleAction(newCycle: Cycle): AddNewCycleAction {
  return { type: ActionTypes.ADD_NEW_CYCLE, payload: { newCycle } }
}
export function interruptCurrentCycleAction(): InterruptCurrentCycleAction {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction(): MarkCurrentCycleAsFinishedAction {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
