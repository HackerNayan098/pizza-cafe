const MenuItem = ({ name, price, image }) => {
  return (
    <div className="menu-item">
      <div className="item-img" style={{ backgroundImage: `url(${image})` }}>
        {/* <img src={image} alt="" /> */}
      </div>
      <h1>{name}</h1>
      <h5>$ {price}</h5>
    </div>
  );
};

export default MenuItem;
