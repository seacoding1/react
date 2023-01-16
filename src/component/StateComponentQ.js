import { useState } from "react";

const StateComponentQ = () => {

    const [num,setNum] = useState(0);

    return (
        <>
            <h3>실습</h3>
            <h3>카운트 : {num}</h3>
            <button onClick = {() => setNum(num+1)}>증가</button>
            {/* num++, num--는 state값을 직접 변경해주는것이기 때문에 불가능하다. */}
            <button onClick = {() => setNum(num-1)}>감소</button>
            <button onClick = {() => setNum(0)}>초기화</button>
        </>
    )
}

export default StateComponentQ;