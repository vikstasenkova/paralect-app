import { Images } from "../../components/Images";


function NotFoundScreen() {
    return (
        <div className="w-full h-[calc(100%-72px)] flex  justify-center items-center overflow-hidden">
            <div className="flex flex-col items-center gap-[42px]">
                <Images type={'not-found-logo'} />
                <p className="w-[156px] text-center text-grey-1 leading-[30.8px] text-[22px] font-normal ">User not found</p>
            </div>
        </div>
    );
}
export default NotFoundScreen;
