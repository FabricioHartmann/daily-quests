import { useQuery } from "@tanstack/react-query";
import { getAchievementsCatalog } from "../services/achievements.services";

export const useAchievementsCatalog = () => {
  return useQuery({
    queryKey: ["achievementCatalog"],
    queryFn: getAchievementsCatalog,
    staleTime: Infinity,
  });
};
