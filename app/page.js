'use client';

import { useGetDataByCategory } from './api/api-hooks.js';
import { Preloader } from './components/Preloader/Preloader.jsx';
import { endpoints } from './api/config';
import { Banner } from './components/Banner/Banner'
import { CardsListSection } from "./components/CardsListSection/CardsListSection";
import { Promo} from './components/Promo/Promo'

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main">
          <Banner/>
          {popularGames ? (
            <CardsListSection id="popular" title="Популярные" type="slider" data={popularGames} />
            ) : (
            <Preloader />
            )}
                  {newGames ? (
          <CardsListSection id="new" title="Новые" type="slider" data={newGames} />
        ) : (
          <Preloader />
        )}
          <Promo/>
        </main>
  );
};