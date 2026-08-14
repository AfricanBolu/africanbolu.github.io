import project from '../assets/projects/project.png';
import bookRecommender from '../assets/projects/Book_Recommender.png';
import jobTrackr from '../assets/projects/Job Trackr.png';

export const projects = [
    {
        title: 'Book Recommender',
        img: bookRecommender,
        desc: 'An AI-powered book recommendation system that uses semantic search to match natural-language descriptions with relevant books.\
         The system retrieves candidates using Hugging Face embeddings and Chroma, filters them by category, and reranks recommendations according to emotional tone.',
        stack: ['Python', 'Vector Embeddings', 'Gradio', 'OPENAI', 'HuggingFace'],
        demo: 'https://www.youtube.com/watch?v=M-BcuUD7d1c',
        source: 'https://github.com/bolemonrin/Book-Recommender',
        url: 'https://huggingface.co/spaces/ItzBombo/Book-Recommender',
    },
    {
        title: 'Movie Chatbot',
        img: project,
        desc: 'A conversational movie and TV recommendation agent built with LangGraph and TMDB.\
        The agent uses a stateful tool-calling workflow to search, retrieve, and reason over TMDB data while automatically recovering from failed tool calls.\
        Supports both local Ollama models and OpenAI.',
        stack: ['TMDB', 'Python', 'OPENAI', 'LangChain', 'HuggingFace'],
        demo: 'https://www.example.com',
        source: 'https://github.com/bolemonrin/Movie-Chatbot',
    },
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
        desc: "A Chrome extension that automates job application tracking directly from the browser. \
        JobTrackr detects job postings across multiple job boards, extracts application data, and synchronizes it to the user's \
        Google Sheet through OAuth 2.0 — reducing manual entry time by 80%.",
        stack: ['React', 'Google Sheets', 'Node', 'TypeScript'],
        demo: 'https://youtu.be/DJp19Z-KiNs',
        source: 'https://github.com/bolemonrin/JobTrackr/',
        url: '',
    },
    {
        title: 'Spotify Party',
        img: project,
        desc: 'A full-stack web application for shared music listening. Users can create listening rooms, \
        authenticate with Spotify, and vote to skip tracks while the backend manages room state, authentication, and playback permissions.',
        stack: ['React', 'Express', 'Node.js', 'Typescript'],
        demo: 'https://www.example.com',
        source: 'https://github.com/bolemonrin/Spotify-Party-Room',
        url: 'https://spotifyparty.netlify.app',
    },
];
