import "./styles.css";
import { BsFillLightningChargeFill } from "react-icons/bs"
import { BsStars } from "react-icons/bs";
import {FaLock} from "react-icons/fa";
let VersionSwitch = () => {
    return (
        <div className="version-switch-box">
            <div className="version-switch">
                <div className="ver-swi-1">
                    <BsFillLightningChargeFill className="lightning" />
                    <p>GPT-3.5</p>
                </div>
                <div className="ver-swi-2">
                    <BsStars className="stars" />
                    <p>GPT-4</p>
                    <FaLock color="grey"/>
                </div>
            </div>
        </div>


    )
}
export default VersionSwitch;