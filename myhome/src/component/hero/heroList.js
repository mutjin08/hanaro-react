import { useEffect, useState } from "react";

function HeroList() {
    // JSON 배열을 사용해서 데이터 출력하기
    const [hero, setHero] = useState([]);
    const [loading, setLoading] = useState(false); //useEffect에서 데이터 가져옴

    // window.onload 혹은 생성자와 비슷한 역할
    useEffect(() => {
        // Using the previous state to update the hero array
        setHero(prevHero => [
            ...prevHero,
            { "id": 1, "name": "김고순", "description": "열심히 밀웜먹기" },
            { "id": 2, "name": "최도치", "description": "땅굴파고 숨어서 자기" },
            { "id": 3, "name": "이가시", "description": "가시를 세우고 화내기" }
        ]);
        setLoading(true);
    }, []); // 백앤드서버와 통신

    // useEffect 맨 처음에 컴포넌트가 실제 태그들과 마운트될 때
    // useEffect 맨 처음에 컴포넌트가 실제 태그들과 마운트 해제될 때
    // set으로 특정변수의 값을 바꾸면 자동 호출
    // [변수들] : 변수들의 값이 변경되면 useEffect가 호출된다

    return (
        <div>
            <h1>영웅들</h1>
            {
                loading==true?
                hero.map((h, i) => {
                    return (<h3 key={i}>{h.id} {h.name} {h.description}</h3>);
                })
                :""
            }
        </div>
    );
}

export default HeroList;
