import { useEffect, useState } from "react";
import axios from "axios";

function HeroList() {
    //JSON  배열을 사용해서 데이터 출력하기 
    const[hero, setHero] = useState([]);//여기 수정할것 ********
    const[loading, setLoading] = useState(false);//useEffect에서 데이터 가져움

    //객체가 생성이 안되면 map함수가 없다. 문제가 발생한다 
    //데이터를 백앤드로 부터 받아올떄 map 이 먼저 호출되고 
    //useEffect 가 호출

    //window.onload 혹은 생성자와 비슷한 역할 
    useEffect( ()=>{
        // setHero( ...hero, 
        // [
        //     {"id":1, "name":"강감찬", "decription":"귀주대첩을 승리로 이끄심"}
        //     , {"id":2, "name":"이순신", "decription":"임진왜란을 승리로 이끄심"}
        //     , {"id":3, "name":"서휘", "decription":"강동6주를 담판으로 끌고오심"}
        // ]);
        axios.get("http://localhost:8080/hero/list")
        .then((res)=>{
            console.log(res);
            setHero( res.data );
        })
        .catch((error)=>{
            console.log( error);
        });

        //axios로 백앤드와 통신을 하면 된다. 
        //json 파일 만들어서 Jsonserver 에 가동 
        //백앤드 - spring boot , node 의 express 
        setLoading(true);

    }, []); //백앤드서버와 통신 
    //useEffect 맨처음에 컴포넌트가 실제 태그들과 마운트될때 
    //useEffect 맨처음에 컴포넌트가 실제 태그들과 마운트해제될때
    //set으로 특정변수의 값을 바꾸면 자동호출  
    // [변수들 ]: 변수들의 값이 변경되면  useEffect가 호출된다. 
    return ( 
        <div>
            <h1>영웅들</h1>
            {
                loading==true?
                    hero.map((h, i)=>{
                        return(<h3>{h.id} {h.name} {h.description}</h3>)
                    })
                :""
            }
        </div>
     );
}

export default HeroList;