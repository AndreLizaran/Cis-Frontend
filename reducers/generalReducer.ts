// Types
import { StateType } from '../contexts/GeneralContext';

type Action = 
  { type:'SWITCH_SHOW_MENU_MODAL', payload:null }

export default function generalReducer(state:StateType, { type, payload }:Action):StateType {
  switch (type) {
    case 'SWITCH_SHOW_MENU_MODAL':
      return {
        ...state,
        showMenuModal: !state.showMenuModal
      }
    default:
      return state;
  }
}
