import React from "react";
import { BrowseByCategory, SearchBanner } from "../modules/components";

export const Home = () => {
  return (
    <div>
      <SearchBanner />
      <BrowseByCategory />
    </div>
  );
};

export default Home;
