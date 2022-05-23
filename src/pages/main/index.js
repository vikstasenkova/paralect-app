import MainContent from "./mainContent";
import SideBar from "./sidebar";
import ScreenContent from "../../components/screenContent";
import { useContext, useEffect, useState } from "react";
import {User} from '../../utils/context/index'
import axios from 'axios';



function MainScreen() {
    const {userData} = useContext(User)
    const [repos,setRepos]= useState()
    const [empty , setEmpty] = useState(true)

    const getCurrentUserRepos = async (name) => {
        try {
            const response =  await axios.get(`https://api.github.com/users/${name}/repos`, {
                username: name,
            })
            setRepos(response.data)
            setEmpty(false)
        } catch (err) {
            setEmpty(true)
            console.log(err);
        }
    }



    useEffect(()=>{
        getCurrentUserRepos(userData?.login)
    },[userData])
    return (
        <div className="flex flex-row h-[calc(100%-72px)] px-[57px] py-[28px] tablet:flex-col">
            <div>
                <SideBar userData={userData} />
            </div>
            {empty ?
            <div className="w-full">
                <ScreenContent ImageType={'empty-repo-logo'} text={'Repository list is empty'} />
            </div>
            :
            <MainContent repos={repos}  />
            }  
        </div>
    )
}

export default MainScreen;