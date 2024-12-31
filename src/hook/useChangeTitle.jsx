import React, { useEffect, useState } from "react";

function useChangeTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "Default Title";
    };
  });
}

export default useChangeTitle;
