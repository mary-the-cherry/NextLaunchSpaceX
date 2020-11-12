import { useEffect, useState } from 'react';

export default function FetchData(props) {
  const url = props.url;
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    setState((state) => ({ ...state, isLoading: true }));
    const fetchData = async () => {
      const result = await fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setState((state) => ({
              ...state,
              error: 'Response was not ok',
              isLoading: false,
            }));
            throw new Error('Response was not ok');
          }
        })
        .then((data) => {
          setState((state) => ({ ...state, isLoading: false, data: data }));
          return data;
        })
        .catch((error) => {
          setState((state) => ({ ...state, error: error }));
          throw new Error('Error while fetching data!');
        });
    };
    fetchData();
  }, [url]);

  return props.children(state);
}
