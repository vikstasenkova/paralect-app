import { Images } from "../Images";
import clsx from 'clsx';


function ScreenContent({ ImageType, text, textStyle }) {
    return (
        <div className="w-full h-[calc(100%-72px)] flex  justify-center items-center overflow-hidden">
            <div className="flex flex-col items-center gap-[24px]">
                <div className="flex w-[110px] h-[110px] items-center justify-center">
                    <Images type={ImageType} />
                </div>
                <p className={clsx("text-center text-grey-1 leading-[30.8px] text-[22px] font-normal ", textStyle)}>{text}</p>
            </div>
        </div>
    );
}
export default ScreenContent;
