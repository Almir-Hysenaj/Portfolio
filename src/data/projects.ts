import WordleImage from '../assets/projects/wordle.png';
import WeatherAppImage from '../assets/projects/weather-app.png';
import ToDoListImage from '../assets/projects/todo-list.png';

export const projects = [
  {
    title: 'Wordle Clone',
    description: 'A recreation of the popular game Wordle',
    tech: ['React', 'API', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/Almir-Hysenaj/Wordle',
    demo: 'https://almir-hysenaj.github.io/Wordle/',
    image: WordleImage,
  },
  {
    title: 'Weather App',
    description:
      'A web app that displays current weather information for any location.',
    tech: ['React', 'API', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/Almir-Hysenaj/Weather-App',
    demo: 'https://almir-hysenaj.github.io/Weather-App/',
    image: WeatherAppImage,
  },
  {
    title: 'To-Do List App',
    description:
      'A web-based to-do list that allows users to manage their tasks efficiently.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Almir-Hysenaj/ToDo-List-DOM',
    demo: 'https://almir-hysenaj.github.io/ToDo-List-DOM/',
    image: ToDoListImage,
  },
];
