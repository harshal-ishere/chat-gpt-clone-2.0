import "./styles.css";
import NavTop from "./nav-top";
import NavMiddle from "./nav-middle";
import NavBottom from "./nav-bottom";
let Sidebar = (props) => {
    return (
        <div id="side-bar" className={props.vis}>
        <NavTop />
        <NavMiddle />
        <NavBottom />
        </div>
    );
}
export default Sidebar;