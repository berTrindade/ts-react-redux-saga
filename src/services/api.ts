import axios from 'axios';

// const TOKEN = process.env.GITHUB_TOKEN;

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.mercy-preview+json',
    // Authorization: `token ${TOKEN}`,
  },
});

export default api;
