/** @format */

// export const getImageUrl = (name) => `/assets/${name}`
// const getImageUrl = (path) => {
//     return new URL(`/assets/${path}`, import.meta.url).href;
// };

// export { getImageUrl };
// const getImageUrl = (path) => {
//     console.log('Received path:', path);
//     const cleanPath = path.startsWith('/') ? path.slice(1) : path;
//     console.log('Cleaned path:', cleanPath);
//     const url = new URL(`../assets/${cleanPath}`, import.meta.url).href;
//     console.log('Generated URL:', url);
//     return url;
// };

// export { getImageUrl };

// utils.js
const getImageUrl = (path) => {
    try {
        // Dynamic import using Vite's asset handling
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        console.log('Cleaned path:', cleanPath);
        const url = new URL(`../assets/${cleanPath}`, import.meta.url).href;
        console.log('Generated URL:', url);
        return url;
    } catch (error) {
        console.error('Error loading image:', error);
        return '';
    }
};

export { getImageUrl };
