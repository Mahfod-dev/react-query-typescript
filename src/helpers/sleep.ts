export const sleep = (ms: number = 1): Promise<boolean> =>
	new Promise((resolve) => setTimeout(resolve, ms * 1000));
