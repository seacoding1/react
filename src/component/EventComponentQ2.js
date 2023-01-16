
import { useState } from "react";


const EventComponentQ2 = () => {
    
    // const [data,setDate] = useState('값을입력하세요');
    // const [data2,setDate2] = useState('값을입력하세요');

    // const handle1 = (e) => {
    //     setDate(e.target.value); //비동기적으로 변경
    // }
    // const handle2 = (e) => {
    //     setDate2(data);
    //     setData('');
    // }

    //state를 객체로 관리
    const [data,setDate] = useState({msg1:'',msg2:'입력하세요'});

    const handle1 = (e) => {

        //data는 사용자의 입력값으로, result는 유지

        
        const copy = {...data, [e.target.name]:e.target.value};
        setDate(copy);
    }

    const handle2 = (e) => {
        const copy = {...data, [e.target.name]:data.msg1};
        setDate(copy);

    }
    
    
    return (
        <>
            <h3>인풋데이터 핸들링(실습)</h3>
            <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
            <p>힌트는 아마도 state가 2개 필요</p>

            <input onChange = {handle1} name = "msg1" vlaue={data.msg1}/>
            <button onClick = {handle2} name = "msg2" >추가하기</button>

            <h3>결과</h3>
            <p>{data.msg2}</p>
        
        </>
    )
}

export default EventComponentQ2;