import { useState } from "react";


const EventComponentQ = () => {


    const [food,setFood] = useState('메뉴를 선택하세요');


    //셀렉트 태그에서는 option태그가 기본 value가 됩니다.
    const foodFunc = (e) => {
        setFood(e.target.value);
    }


    return (
        <>
            <h3>셀렉트 태그 핸들링(실습)</h3>
            <p>선택된 태그가 체인지 될 때 선택한 결과를 아래에 출력</p>

            <select onChange={foodFunc}>
                <option>피자</option>
                <option>햄버거</option>
                <option>잠봉뵈르</option>
            </select>

            <h3>선택한 결과</h3>
            <p>{food}</p>
        </>
    )
}

export default EventComponentQ;