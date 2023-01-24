import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Label } from '../interface/label';
import { sleep } from '../../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {
	await sleep(2);

	const { data } = await githubApi.get<Label[]>('/labels');

	return data;
};

export const useLabels = () => {
	const labelsQuery = useQuery(['labels'], getLabels, {
		refetchOnWindowFocus: true,
		staleTime: 1000 * 60,
		initialData: [
			{
				id: 717031390,
				node_id: 'MDU6TGFiZWw3MTcwMzEzOTA=',
				url: 'https://api.github.com/repos/facebook/react/labels/,good%20first%20issue',
				name: 'good first issue',
				color: '6ce26a',
				default: true,
			},
			{
				id: 760751171,
				node_id: 'MDU6TGFiZWw3NjA3NTExNzE=',
				url: 'https://api.github.com/repos/facebook/react/,labels/Difficulty:%20challenging',
				name: 'Difficulty: challenging',
				color: 'f2687c',
				default: false,
			},
		],
	});

	return labelsQuery;
};
