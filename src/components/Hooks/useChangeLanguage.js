import React, { useState } from "react";

const useChangeLanguage = () => {
  const [lang, setlang] = useState(true);
  return [lang, setlang];
};

export default useChangeLanguage;
