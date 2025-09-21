import type { ICard } from "./models";
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
export const catalog: ICard[] = [
    { name: 'Game', description: "Play any game you want", price: '8', icon: SportsEsportsOutlinedIcon },
    { name: 'Cartoon', description: "Watch a short episode of a cartoon", price: '9', icon: OndemandVideoOutlinedIcon },
    { name: 'Homework', description: "No written homework", price: '11', icon: MenuBookOutlinedIcon },
    { name: 'Text', description: "Read the small text about any topic", price: '6', icon: AutoStoriesOutlinedIcon },
    { name: 'Move', description: "Play a moving game", price: '7', icon: AccessibilityNewOutlinedIcon },
    { name: 'Song', description: "Listen to the english song", price: '7', icon: LibraryMusicOutlinedIcon },

]