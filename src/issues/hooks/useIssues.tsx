import { Issue } from '../interface/issue';
import { githubApi } from '../../api/githubApi';
import { useQuery } from '@tanstack/react-query';


const getIssues = async (): Promise<Issue[]> => {
	const { data } = await githubApi.get<Issue[]>(
		`/issues`
	);
        console.log(data)
	return data;
};


export const useIssues = () => {
const issuesQuery = useQuery(['issues'], getIssues, {
        refetchOnWindowFocus: false,
    });
    return {issuesQuery};
}