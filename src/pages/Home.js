/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowseByCategory, SearchBanner } from "../modules/components";
import { useCategoryActions } from "../_recoil/actions";

export const Home = () => {
  const categoryAction = useCategoryActions();

  useEffect(() => {
    categoryAction.getCategory();
  }, []);

  return (
    <div>
      <SearchBanner />
      <BrowseByCategory />
    </div>
  );
};

export default Home;
