const CryptoItem = (props) => (
  <div className="item">
    <img src={props.ImageUrl} className="icon" alt={props.Name} />
    <div className="display-container">
      <div className="name">{props.Name}</div>
      <div className="fullname">{props.FullName}</div>
    </div>
    <div className="price-container">
      <div className="price">{props.Price}</div>
      <div
        className={`
                price-change ${
                  parseInt(props.Change24hr) < 0 ? "danger" : "success"
                }`}
      >
        {props.Change24hr}
      </div>
    </div>
  </div>
);

export default CryptoItem;
