import React from "react";
import Skeleton from "react-loading-skeleton";

export const HomeLoading = () => {
  return (
    <div>
      <Skeleton width={"100%"} height={"100px"} />
    </div>
  );
};

export default HomeLoading;
