import InfoGroup from "./infogroup";

function SideBar({userData}) {
    return (
        <div>
            <div className="flex flex-col">
                <img src={`${userData.avatar_url}`} alt="img" className="w-[280px] rounded-full mb-[29px]"></img>
                <p className="leading-[34px] text-[24px] font-semibold mb-[12px]">{userData.name}</p>
                <a href={userData?.html_url}  rel="noreferrer" target="_blank" className="leading-[28.74px] text-[18px] text-blue mb-[25px]">{userData.login}</a>
                <div className="flex flex-row gap-[20px]">
                    <InfoGroup ImageType={'followers-logo'} text={`${userData?.followers} followers`} />
                    <InfoGroup ImageType={'following-logo'} text={`${userData?.following} following`} />
                </div>
            </div>
        </div>
    )
}

export default SideBar;