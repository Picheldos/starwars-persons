import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import HomeSection from './sections/HomeSection/HomeSection';
import PeoplesSection from './sections/PeoplesSection/PeoplesSection';
import FavoritesSection from './sections/FavoritesSection/FavoritesSection';
import GlobalStyle from "../style/globalStyles";
import PeopleDetailsSection from "./sections/PeopleDetailsSection/PeopleDetailsSection";

const App: React.FC = observer(() => {
  return (
      <div>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/peoples" element={<PeoplesSection />} />
          <Route path="/peoples/:id" element={<PeopleDetailsSection />} />
          <Route path="/favorites" element={<FavoritesSection />} />
        </Routes>
      </div>
  );
})

export default App;