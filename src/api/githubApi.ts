import axios from 'axios';

export const githubApi = axios.create({
	baseURL: 'https://api.github.com/repos/facebook/react',
	headers: {
		Accept: 'application/vnd.github.v3+json',
		Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
	},
});
