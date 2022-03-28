// Modules
import { useContext } from 'react';

// Contexts 
import { GeneralContext } from '../contexts/GeneralContext';

export default function useGeneralContext() {
  return useContext(GeneralContext);
}
