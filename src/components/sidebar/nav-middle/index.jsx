import "./styles.css";
import NavItems from "./nav-items";
let NavMiddle = () => {
    let dataElements = [
        { id: 1, name: "Fixed Div with Overflow", link: "#" }, { id: 2, name: "Fix GitHub SSH Access", link: "#" },
        { id: 3, name: "Sticky Navbar with Flex", link: "#" }, { id: 4, name: "Add Images in React", link: "#" },
        { id: 5, name: "Effects in React", link: "#" }, { id: 6, name: "Invisible div in CSS.", link: "#" },
        
    ]
    return (
        <div className="nav-middle">
            <p className="semiHeading">Today's</p>
            {dataElements.map((data) =>
                <NavItems key={data.id} name={data.name} href={data.link} />
            )}
        </div>
    );
}
export default NavMiddle;