import DashBoard from "../DashBoard/DashBoard";
import TopBar from "../TopBar/TopBar";
import classes from "./MainPage.module.css"
const MainPage = () => {
    return (
        <div className={classes.MainContainer}>
            <div className={classes.topBarContainer}>
                <TopBar />
            </div>
            <div className={classes.dashBoardContainer}>
                <DashBoard />
            </div>
           
        </div>

    )
}
export default MainPage;
