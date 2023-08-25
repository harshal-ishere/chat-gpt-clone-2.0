import "./styles.css";
import HomeItems from "./items";
import HomeBottom from "./home-bottom"
let homeData = [
    { id: 0, primary: "Come up with Concepts", secondary: "for a retro-style arcade game" },
    { id: 1, primary: "Explain why popcorn pops", secondary: "to a kid who loves watching it in microwave" },
    { id: 2, primary: "Brainstorm incentives", secondary: "for a customer loyalty program in bookstore" },
    { id: 3, primary: "Recommend a dish", secondary: "to impress a date who's a picky eater" }
]
let HomeContent = ({data}) => {
    return (
        <div className={data+" home-dark-alley"}>
            <div className="home-cont-main">
                <div className="home-content">
                    {homeData.map((data) => <HomeItems data={data} key={data.id} />)}
                </div>
            </div>
            <HomeBottom />
        </div>

    )
}
export default HomeContent;