import {
  AccountCircleOutlined,
  DarkModeOutlined,
  LanguageOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import "./navbar.scss";
import { resetAuth } from "@/reducers/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatcher(resetAuth());
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    toast.success("Logout success");
    navigate("/sign-in");
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" name="" id="" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
            Dark mode
          </div>
          <div className="item">
            <AccountCircleOutlined className="icon" />
            <b>Username</b>
          </div>
          <div className="item" onClick={handleLogout}>
            <LogoutOutlined className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
