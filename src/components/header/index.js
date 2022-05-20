import { Images } from "../Images";
import Input from "../Input";


function Header() {
    return (
        <div className="h-[72px] w-full bg-blue">
            <div className="flex flex-row py-[16px] pl-[41px] gap-[1.375rem]">
                <Images type={'git-logo'} />
                <Input />
            </div>
        </div>
    );
}
export default Header;
