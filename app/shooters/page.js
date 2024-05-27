'use client';

import { useGetDataByCategory } from '../api/api-hooks.js';
import { Preloader } from '../components/Preloader/Preloader.jsx';
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
export default function New() {
    const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
    return (
        <main className="main-inner">
            {shooterGames ? (
            <CardsListSection id="shooter" title="Шутеры" data={shooterGames} />
            ) : (
            <Preloader />
            )}
        </main>
    )
}