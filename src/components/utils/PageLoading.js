import { CircularProgress } from "@material-ui/core";
import React from "react";

function PageLoading() {
  return (
    <div
      style={{ zIndex: "200" }}
      className="fixed inset-0 z-50 bg-black bg-opacity-50"
    >
      <CircularProgress
        height={50}
        width={50}
        className="absolute z-50 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
      />
    </div>
  );
}

export default PageLoading;
