import { Images } from "../../../../components/Images";


function InfoGroup({ ImageType, text }) {
    return (
        <div className="flex flex-row gap-[8px] items-center">
            <Images type={ImageType} />
            <p className="leading-[24px] text-[16px] whitespace-nowrap">{text}</p>
        </div>)
}

export default InfoGroup; 