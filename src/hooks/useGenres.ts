// import { useEffect, useState } from "react"
// import apiClient from "../Services/apiClient"
// import { CanceledError } from "axios"
import { CACHE_KEY_GENRES } from "../constants";
import apiClient from "../Services/apiClient";
import useData from "./useData"
import { useQuery } from "@tanstack/react-query";





// export interface Platform{
//     id: number;
//     name: string;
//     slug: string;
// }


//help us shaping our data in the form of our interfaces(type) props to pass data from parent component to child
export interface Genre {
    id: number
    name: string
    image_background: string

}

export interface FetchGenreResponse <T> {
    count: number
    results: T[]
}




const useGenres = () => useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () => 
                  apiClient
                      .get<FetchGenreResponse<Genre>>('/genres')
                      .then(res => res.data)
  })

export default useGenres;