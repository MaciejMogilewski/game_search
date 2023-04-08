import {useEffect, useState} from "react";
import axios from "axios";
import {API_HOST, API_KEY} from "../constants";
import {filterType} from "../components/FilterTypes";

const localCache = {};

export const useFetchGames = ({platform, sortBy, genre}: filterType) => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController()

        if (localCache[`${platform}${sortBy}${genre}`]) {
            setGames(localCache[`${platform}${sortBy}${genre}`])
        } else {
            getGames(controller.signal)
        }

        return () => {
            controller.abort();
        }

    },[platform, sortBy, genre])

    const getGames = async (signal) => {
        const response = await  axios.get('/games', {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST
            },
            signal,
            params: {
                platform,
                'sort-by': sortBy,
                category: genre
            }
        })

        if (response.data.status !== 0) {
            localCache[`${platform}${sortBy}${genre}`] = response.data;
            setGames(localCache[`${platform}${sortBy}${genre}`])
        } else {
            setGames([])
        }
    }

    return {games, error}
}