import React, { useEffect, useState } from "react";
import { DotaService } from "../../services/api/dota-services";

const dotaService = new DotaService();

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    dotaService.getStrengthHeroes().then((data) => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return <div></div>;
};

export { App };
