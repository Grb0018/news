import Header from "../Component/Header";
import Sidebar_Right from "../Component/Sidebar_Right";
import Sidebar_Left from "../Component/Sidebar_Left";
import Main_news from "../Component/Main_news";
import Footer from "../Component/Footer";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context";

const Home = () =>{

    const [scrollY, setScrollY] = useState(0);
    window.onscroll = (e) => {
        setScrollY(window.scrollY);
    }

    const {homeNews,setHomeNews} = useContext(MyContext)
    useEffect(()=>{
        if(homeNews===""){
            fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=149faa0fd9db4b78ad5a7a4cf55d7164",{
                method:"GET",  
            }).then(val=>val.text()).then(data=>{
                setHomeNews(JSON.parse(data))
            })
        }
    },[])



    return <>
    <div>
        <Header />
        <div className="flex flex-row md:flex-col-reverse justify-between">
        <Sidebar_Left className={"w-1/5 md:w-[100%] md:px-2 md:bg-gray-300"} scrollY={scrollY}/>
        <Main_news className={"w-[59%] md:w-[90%] md:m-4"} />
        <Sidebar_Right className={"w-1/5 md:w-[100%]"} scrollY={scrollY}/>
        </div>
        <Footer />
    </div>
    </>

}

export default Home;