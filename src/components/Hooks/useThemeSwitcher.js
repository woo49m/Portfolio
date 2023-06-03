import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const PreferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    console.log("2 Effect: " + mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
