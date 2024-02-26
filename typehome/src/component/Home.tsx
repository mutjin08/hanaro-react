import MyButton from "./MyButton";
import {useState, useEffect} from "react";
import Counter1 from "./Counter1";

//ffc
type Status = "idle"|"loading"|"success"|"error";
function Home() {
    const [enabled, setEnabled] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("김고순");
    const [fruit, setFruit] = useState<string[]>(["사과", "딸기", "수박", "참외", "메론"]);
    const [status, setStatus] = useState<Status>("loading");
    const [userInfo, setUserInfo] = useState<{name:string, age:number}>({name:"김고순", age:4});

    //can use only designated value while using status
    useEffect(()=>{
        setStatus("loading");
        setUserInfo({name:"최도치", age:2})
    },[]);

    return (
        <div>
            <h1>Home</h1>
            <Counter1 /><br />

            <MyButton title="타입스트립트" name="홍길동" disabled={true}></MyButton><br/>
            <MyButton title="타입스트립트" name="홍길동" disabled={false}></MyButton><br/>

            {userName} {enabled?"true":"false"} <br />

            {fruit.map((item:string)=>{return(<h3>{item}</h3>)})}

            {userInfo.name} {userInfo.age} <br />
        </div>
    );
}

export default Home;