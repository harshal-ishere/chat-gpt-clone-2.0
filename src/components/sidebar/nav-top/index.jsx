import "./styles.css";
import {useSelector,useDispatch} from 'react-redux';
import { toggle } from "../../../Store/slices/counter";
let NavTop=()=>{
    const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  if(count===true){
    console.log("true");
  }if(count===false){
console.log("false");
  }
    return(
        <div className="nav-top">
            <a href="#"><span className="headers-initial">+</span><span className="header-main">New chat</span></a>
            <div style={{ position: "initial" }} className="toggleButton" onClick={()=>dispatch(toggle())}><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 toggleButtonSVG" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg></div>
            
        </div>
    );
}
export default NavTop;