import "./styles.css";
let HomeItems = (props) => {
    return (
        <div className="home-items">
            <p className="home-item-1">{props.data.primary}</p>
            <p className="home-item-2">{props.data.secondary}</p>
        </div>
    )
}
export default HomeItems;