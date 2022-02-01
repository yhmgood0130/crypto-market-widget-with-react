import useCryptoData from "../hooks/useCryptoData";
import CryptoItem from "./CrypoItem";

const CryptoList = () => {
  const { cryptoData, isLoading } = useCryptoData();
  return (
    <div>
      <div className="container">
        {!isLoading ? (
          cryptoData.map((itemData) => (
            <CryptoItem key={itemData.Id} {...itemData} />
          ))
        ) : (
          <p className="loading-text">Loading Data...</p>
        )}
      </div>
    </div>
  );
};

export default CryptoList;
