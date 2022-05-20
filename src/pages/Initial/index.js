import { Images } from "../../components/Images";



function InitialScreen() {
    return (
        <div className="w-full h-[calc(100%-72px)] flex  justify-center items-center overflow-hidden">
            <div className="flex flex-col items-center gap-[47px]">
                <Images type={'search-logo'} className={"w-[65px] h-[65px]"} />
                <p className="w-[210px] text-center text-grey-1 leading-[30.8px] text-[22px] font-normal ">Start with searching a GitHub user</p>
            </div>
        </div>
    );
}
export default InitialScreen;
