import MainContent from "./mainContent";
import SideBar from "./sidebar";
// import ScreenContent from "../../components/screenContent";

function MainScreen() {
    return (
        <div className="flex flex-row h-[calc(100%-72px)] px-[57px] py-[28px]">
            <div>
                <SideBar />
            </div>
            {/* <div className="w-full">
                <ScreenContent ImageType={'empty-repo-logo'} text={'Repository list is empty'} />
            </div> */}
            <MainContent />
        </div>
    )
}

export default MainScreen;