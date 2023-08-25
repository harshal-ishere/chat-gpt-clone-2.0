import "./styles.css";
import NavTop from "./nav-top";
import NavMiddle from "./nav-middle";
import NavBottom from "./nav-bottom";
let Sidebar = ({vis}) => {
    return (
        <div id="side-bar" className={vis}>
        <NavTop />
        <NavMiddle />
        <NavBottom />
        </div>
    );
}
export default Sidebar;