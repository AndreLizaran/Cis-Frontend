import { useEffect, useState } from 'react';

export type Colors = 'dark-blue' | 'slate' | 'blue';

export default function useGetColor (color:Colors) {
  const [returnColor, setReturnColor] = useState('');
  useEffect(() => {
    switch (color) {
      case 'slate': 
        setReturnColor('bg-gray-600 hover:bg-gray-500');
      break;
      case 'dark-blue': 
        setReturnColor('bg-gray-800 hover:bg-gray-700');
      break;  
      case 'blue': 
        setReturnColor('bg-blue-700 hover:bg-blue-600');
      break;  
    }
  }, []);
  return returnColor;
}
