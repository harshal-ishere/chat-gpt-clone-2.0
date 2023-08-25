import "./styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from "../../Store/slices/counter";

import VersionSwitch from "./version-switch";
import HomeHeading from "./home-heading";
import HomeContent from "./home-contents";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";

let Home = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div id="home" className={count ? "someToggle" : ""}>
            <div style={{ position: "initial" }} className={count ? "toggleButton2" : "invincible"} onClick={() => dispatch(toggle())} id="tgbutton2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 toggleButtonSVG2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg></div>
            <div id="home-main-bar">
                <div className="home-bar">
                    <div className="home-ham-but">
                        <RxHamburgerMenu size={"1.4rem"} color="#d4d4d4" />
                    </div>
                    <p className="new-chat">New chat</p>
                    <div className="plus">
                        <AiOutlinePlus size={"1.4rem"} color="#d4d4d4" />
                    </div>
                </div>
                <hr />
            </div>
            <VersionSwitch />
            <HomeHeading />
            <HomeContent data={count ? "horse" : ""} />
            
        </div>
    );
}
export default Home;