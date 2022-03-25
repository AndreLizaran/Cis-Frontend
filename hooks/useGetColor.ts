export type Colors = 'dark-blue';

export default function useGetColor(color:Colors) {
  let colorState = ''
  switch (color) {
    case 'dark-blue': 
    colorState = 'bg-gray-800 hover:bg-gray-700';
    break;
  }
  return colorState;
}
