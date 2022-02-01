import { useEffect, setEffect, useState } from "react";

const useCryptoData = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const prepareData = [];
        data.Data.forEach((d) => {
          const { Id, Name, FullName, ImageUrl, Url } = d.CoinInfo;
          let Price, Change24hr;
          if (d.DISPLAY?.USD) {
            const { PRICE, CHANGEPCT24HOUR } = d.DISPLAY.USD;
            Price = PRICE;
            Change24hr = CHANGEPCT24HOUR;
          }

          prepareData.push({
            Id,
            Name,
            FullName,
            ImageUrl: `https://www.cryptocompare.com${ImageUrl}`,
            Url: `https://www.cryptocompare.com${Url}`,
            Price,
            Change24hr,
          });
        });
        setCryptoData(prepareData);
      })
      .finally(() => setLoading(false));
    // fetch the data and set cryptoData
  }, []);

  return { cryptoData, isLoading };
};

export default useCryptoData;
