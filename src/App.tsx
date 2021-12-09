import { createTheme, ThemeProvider } from "@mui/material";
import React, { useCallback, useState } from "react";
import "./App.css";
import NumberView from "./NumberView/NumberView";
import { getFromLS, LS_KEYS, setToLS } from "./utils/ls";
import { CoinTypes, ICoins } from "./utils/types";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [threat, setThreat] = useState<number>(() =>
    Number(getFromLS(LS_KEYS.threat, "0"))
  );
  const [coins, setCoins] = useState<ICoins>(() =>
    JSON.parse(
      getFromLS(
        LS_KEYS.coins,
        JSON.stringify({ lore: 0, leadership: 0, spirit: 0, tactics: 0 })
      )
    )
  );

  const onThreatChange = useCallback((value: number) => {
    setThreat(value);
    setToLS(LS_KEYS.threat, value);
  }, []);

  const onSetCoins = useCallback((value: number, id: string | undefined) => {
    if (id) {
      let newCoins: ICoins | undefined;
      setCoins((v) => {
        newCoins = { ...v, [id]: value };
        return newCoins;
      });
      setToLS(LS_KEYS.coins, JSON.stringify(newCoins));
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <NumberView
          label="Threat level"
          textType="h4"
          value={threat}
          onChange={onThreatChange}
        />
        <NumberView
          label="Leadership coins"
          textColor="#f544ff"
          value={coins.leadership}
          id={CoinTypes.leadership}
          onChange={onSetCoins}
        />
        <NumberView
          label="Lore coins"
          textColor="#009f14"
          value={coins.lore}
          id={CoinTypes.lore}
          onChange={onSetCoins}
        />
        <NumberView
          label="Spirit coins"
          textColor="#3597ff"
          value={coins.spirit}
          id={CoinTypes.spirit}
          onChange={onSetCoins}
        />
        <NumberView
          label="Tactics coins"
          textColor="#f33231"
          value={coins.tactics}
          id={CoinTypes.tactics}
          onChange={onSetCoins}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
