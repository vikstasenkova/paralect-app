import { Images } from "../Images";


function Input({ onChangeFn, username, setValue ,getCurrentUser }) {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            getCurrentUser(username)
        }
    }

    return (
        <div className="flex h-[40px] w-[37.43vw] bg-white rounded-[6px] items-center">
            <div className="flex flex-row items-center px-[19px] gap-[11px] w-full">
                <Images type={'search-logo'} className={"w-[14px] h-[14px]"} />
                <input className="text-[14px] w-full " onKeyPress={(e) => handleKeyPress(e)} placeholder="Enter GitHub username" value={username} onChange={(e) => onChangeFn(e.target.value)} />
            </div>
        </div>
    );
}
export default Input;
