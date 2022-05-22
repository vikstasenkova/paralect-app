import Image from "./image.png";
import InfoGroup from "./infogroup";

function SideBar() {


    return (
        <div>
            <div className="flex flex-col">
                <img src={Image} alt="img" className="w-[280px] rounded-full mb-[29px]"></img>
                <p className="leading-[34px] text-[24px] font-semibold mb-[12px]">Dan Abramov</p>
                <p className="leading-[28.74px] text-[18px] text-blue mb-[25px]">gaearon</p>
                <div className="flex flex-row gap-[20px]">
                    <InfoGroup ImageType={'followers-logo'} text={'65.8k followers'} />
                    <InfoGroup ImageType={'following-logo'} text={'171 following'} />
                </div>
            </div>
        </div>
    )
}

export default SideBar;