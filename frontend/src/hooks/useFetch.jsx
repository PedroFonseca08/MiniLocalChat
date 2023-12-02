import { useState, useEffect } from 'react';

const useFetch = (url, requestData) => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Usando response.json() para lidar com múltiplos JSONs
        const jsons = [];
        const reader = response.body.getReader();

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          jsons.push(JSON.parse(new TextDecoder().decode(value)));
        }

        setResponseData(jsons);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [url, requestData]);

  return { responseData, error };
};

export default useFetch;
