import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = () => {
	const [searchName, setSearchName] = useState(null);

	const getData = (url) => {
		axios
			.get(url)
			.then((res) => {
				setSearchName(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return [searchName, getData];
};

export default useFetch;
