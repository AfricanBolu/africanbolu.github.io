import project from '../assets/projects/project.png';
import bookRecommender from '../assets/projects/Book_Recommender.png';
import jobTrackr from '../assets/projects/Job Trackr.png'

export const projects = [
    {
        title: 'Book Recommender',
        img: bookRecommender,
        desc: 'Recommends books using semantic search based on user input.',
        stack: ['Python', 'LangChain', 'Gradio', 'OPENAI', 'HuggingFace'],
        demo: 'https://www.youtube.com/watch?v=M-BcuUD7d1c',
        source: 'https://github.com/bolemonrin/Book-Recommender',
        link: 'https://huggingface.co/spaces/ItzBombo/Book-Recommender',
    },
    // {
    //     title: 'Movie Chatbot',
    //     img: defaultImg,
    //     desc: 'AI chatbot that recommends movies using TMDb API and natural language input.',
    //     stack: ['TMDB', 'Python', 'OPENAI', 'LangChain', 'HuggingFace'],
    //     demo: 'https://www.example.com',
    //     source: 'https://www.example.com',
    // },
    // {
    //     title: 'BudgetYou',
    //     img: defaultImg,
    //     desc: 'Smart budgeting app with AI-powered savings tips and customizable budget plans.',
    //     stack: ['React', 'Express', 'Node'],
    //     demo: 'https://www.example.com',
    //     source: 'https://www.example.com',
    // },
    {
        title: 'Job Trackr Extension',
        img: jobTrackr,
        desc: 'Browser extension to save and organize job listings from various websites.',
        stack: ['React', 'Google Sheets', 'Node', 'TypeScript'],
        demo: 'https://youtu.be/DJp19Z-KiNs',
        source: 'https://github.com/bolemonrin/JobTrackr/',
        link: ''
    },
    {
        title: 'Spotify Party',
        img: project,
        desc: 'Join a room and listens to music with your friends.',
        stack: ['React', 'Express', 'Node.js', 'Typescript'],
        demo: 'https://www.example.com',
        source: 'https://github.com/bolemonrin/Spotify-Party-Room',
        link: 'https://spotifyparty.netlify.app',
    }
];
