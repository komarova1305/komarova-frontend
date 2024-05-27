'use client';

import { useGetDataByCategory } from '../api/api-hooks.js';
import { Preloader } from '../components/Preloader/Preloader.jsx';
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
export default function New() {
    const runnerGames = useGetDataByCategory(endpoints.games, "runner");
    return (
        <main className="main-inner">
            {runnerGames ? (
            <CardsListSection id="runner" title="Ранеры" data={runnerGames} />
            ) : (
            <Preloader />
            )}
        </main>
    )
}