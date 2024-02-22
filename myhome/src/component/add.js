//ffc

import { useParams } from "react-router-dom";

function Add() {
    let {a, b} = useParams();
    return (
        <div>
            <h1>{a} + {b} = {parseInt(a)+parseInt(b)}</h1>
        </div>
    );
}

export default Add;