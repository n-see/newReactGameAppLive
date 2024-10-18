import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constants";
import apiClient from "../Services/apiClient";
import { FetchResponse } from "./useData";



//help us shaping our data in the form of our interfaces(type) props to pass data from parent component to child
export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: {platform:Platform}[]
    metacritic: number
}

export interface FetchGameResponse {
    count: number
    results: Game []
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
  }



const useGames = (gameQuery: GameQuery) =>
    useQuery({
      queryKey: [CACHE_KEY_GAMES, gameQuery],
      queryFn: () =>
        apiClient
          .get<FetchResponse<Game>>("/games", {
            params: {
              genres: gameQuery.genre?.id,
              parent_platforms: gameQuery.platform?.id,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
            },
          })
          .then((res) => res.data),
    });
export default useGames;