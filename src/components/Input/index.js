import { Images } from "../Images";


function Input() {
    return (
        <div className="flex h-[40px] w-[37.43vw] bg-white rounded-[6px] items-center">
            <div className="flex flex-row items-center px-[19px] gap-[11px] w-full">
                <Images type={'search-logo'} className={"w-[14px] h-[14px]"} />
                <input className="text-[14px] w-full " placeholder="Enter GitHub username" />
            </div>
        </div>
    );
}
export default Input;
