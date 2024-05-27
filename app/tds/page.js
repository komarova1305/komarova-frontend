'use client';

import { useGetDataByCategory } from '../api/api-hooks.js';
import { Preloader } from '../components/Preloader/Preloader.jsx';
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
export default function New() {
    const tdsGames = useGetDataByCategory(endpoints.games, "TDS");
    return (
        <main className="main-inner">
            {tdsGames ? (
            <CardsListSection id="TDS" title="TDS" data={tdsGames} />
            ) : (
            <Preloader />
            )}
        </main>
    )
}