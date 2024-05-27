'use client';

import { useGetDataByCategory } from '../api/api-hooks.js';
import { Preloader } from '../components/Preloader/Preloader.jsx';
import { endpoints } from '../api/config.js';
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
export default function New() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");

    return (
        <main className="main-inner">
            {popularGames ? (
            <CardsListSection id="popular" title="Популярные" data={popularGames} />
            ) : (
            <Preloader />
            )}
        </main>
    )
}