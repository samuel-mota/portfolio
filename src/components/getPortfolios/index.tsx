import useSWR from "swr";

interface GetPortfoliosProps {
  portfolio: [];
  isLoading: boolean;
  isError: string;
}

export default function getPortfolios(path: string): GetPortfoliosProps {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(path, fetcher);

  return {
    portfolio: data,
    isLoading: !error && !data,
    isError: error,
  };
}
