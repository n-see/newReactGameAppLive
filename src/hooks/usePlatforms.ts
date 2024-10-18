import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import { CACHE_KEY_PLATFORMS } from "../constants";
import apiClient from "../Services/apiClient";


export interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatform = () => useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: () => 
            apiClient
                    .get<FetchResponse<Platform>>('/platforms/lists/parents')
                    .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // every 24 hour refresh data
});

export default usePlatform