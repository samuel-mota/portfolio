import useSWR from "swr";

interface UsePortfolioProps {
  portfolio: [];
  isLoading: boolean;
  isError: string;
}

export default function usePortfolio(path: string): UsePortfolioProps {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(path, fetcher);

  return {
    portfolio: data,
    isLoading: !error && !data,
    isError: error,
  };
}
