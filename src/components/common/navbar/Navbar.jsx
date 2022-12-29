import "./style.css";
import img from "../../../img/addAvatar.png";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Chat with ThaiNN</span>
      <div className="user">
        <img src="" alt="" />
        <span>Thainn</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
