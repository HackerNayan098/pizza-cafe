import { MenuList } from "../../utils/data";
import "../styles/menu.scss";
import MenuItem from "../MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Today Menu</h1>
      <div className="menu-list">
        {MenuList.map((item, key) => {
          return (
            <MenuItem
              key={key}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
