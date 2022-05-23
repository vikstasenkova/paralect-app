import { Images } from "../Images";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from 'axios';
import {User} from '../../utils/context/index'

function Header() {
    let navigate = useNavigate();
    const [name, setName] = useState("")
    const {setUserData} = useContext(User)



    const getCurrentUser = async (name) => {
        try {
            const response =  await axios.get(`https://api.github.com/users/${name}`, {
                username: name,
            })
            setUserData(response.data)
            navigate("/main")
        } catch (err) {
            navigate("/not-found")
            console.log(err);
        }
    }


    return (
        <div className="h-[72px] w-full bg-blue">
            <div className="flex flex-row py-[16px] pl-[41px] gap-[1.375rem]">
                <Images type={'git-logo'} />
                <Input onChangeFn={setName} username={name} getCurrentUser={getCurrentUser} />
            </div>
        </div>
    );
}
export default Header;
