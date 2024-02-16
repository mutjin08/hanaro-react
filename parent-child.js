// 부모 컴포넌트
function 부모컴포넌트() {
  const 값 = "안녕하세요";
  const 변수값 = 42;
  const 함수 = () => {
    console.log("부모 컴포넌트의 함수");
  };

  return (
    <자식컴포넌트
      key1={값}
      key2={변수값}
      key3={함수}
    />
  );
}

// 자식 컴포넌트
function 자식컴포넌트(props) {
  // 부모로부터 받은 props를 사용
  console.log(props.key1); // "안녕하세요"
  console.log(props.key2); // 42
  props.key3(); // 부모의 함수 호출

  return (
    <div>
      {/* 자식 컴포넌트에서 props를 이용한 렌더링 */}
      <p>{props.key1}</p>
      <p>{props.key2}</p>
    </div>
  );
}
