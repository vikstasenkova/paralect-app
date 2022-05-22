import { Images } from "../Images";
import Input from "../Input";
import UserService from "../../services/users"
import { useContext, useEffect, useState } from "react";
import { User } from "../../utils/context";

function Header() {

    const [name, setName] = useState("")
    const [value, setValue] = useState("")

    const { setUserData, userData } = useContext(User)


    const getCurrentUser = async (name) => {
        try {
            const data = await UserService.getCurrentUser(name)
            console.log(123, data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCurrentUser(value)
    }, [value])

    return (
        <div className="h-[72px] w-full bg-blue">
            <div className="flex flex-row py-[16px] pl-[41px] gap-[1.375rem]">
                <Images type={'git-logo'} />
                <Input onChangeFn={setName} username={name} getCurrentUser={getCurrentUser} setValue={setValue} value={value} />
            </div>
        </div>
    );
}
export default Header;
