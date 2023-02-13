import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PermMediaIcon from "@mui/icons-material/PermMedia";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Panotravel</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
          <li>
            <LocationCityIcon className="icon"/>
            <span>Zone</span>
          </li>
        </ul>
        <ul>
          <li>
            <PermMediaIcon className="icon"/>
            <span>Image</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
