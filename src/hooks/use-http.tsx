import { useState, useCallback } from "react";
import MovieModel from "../model/Movie";

interface requestConfig {
  url: string;
  method?: "GET" | "POST";
  headers?: {};
  body?: MovieModel;
}
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchMovieHandler = useCallback(
    async (
      requestConfig: requestConfig,
      applyData: (m: MovieModel[]) => void
    ) => {
      setIsLoading(true);
      setError(false);
      try {
        const reponse = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });
        if (!reponse.ok) {
          throw new Error("Something went wrong :(");
        }
        const data = await reponse.json();
        applyData(data);
      } catch (error: any) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    []
  );
  return {
    isLoading,
    error,
    fetchMovieHandler,
  };
};
export default useHttp;
