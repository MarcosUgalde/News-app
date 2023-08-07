import { useQuery } from "react-query";
import { searchs } from "../services";
export const useUrl = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["url"],
    queryFn: searchs.getNewspaper,
  });

  return { data, isLoading };
};
