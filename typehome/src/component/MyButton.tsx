/*
//ffc
function MyButton({title, name}:{title:string, name:string}) {
    return (
        <button>
            {title} {name}
        </button>
    );
}*/

//interface : 실체가 존재하지 않는다. 클래스를 만들지 않고 주로 인터페이스나 타입을 정의한다.
interface MyButtonProps{
    title : string;
    name : string;
    disabled : boolean;
}

function MyButton(props:MyButtonProps){
    return(
        <button disabled={props.disabled}>
            {props.title}
        </button>
    )
}

export default MyButton;