//ffc
//url : hero/view/:id

import { useParams } from "react-router-dom";

//id값을 어떻게 받을 것인가? JSON
function HeroView(){
    let {id} = useParams(); //parameter 받아오는 hook
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
}

export default HeroView;