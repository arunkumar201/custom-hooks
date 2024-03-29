import { useState, useEffect } from "react";

const useDataFetching = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				setData(json);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}p
		};
		fetchData();
	}, [url]);

	return { data, loading, error };
};

export default useDataFetching;
