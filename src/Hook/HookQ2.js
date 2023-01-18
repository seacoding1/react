import { useEffect, useRef, useState } from "react";

const HookQ2 = () => {


    /*
    실습(할일 목록 만들기)
    1.state는 {todo: '',list:[]}로 관리하세요
    2.할일목록을 작성하고 클릭시, list에 인풋의 입력값을 추가하고 map을 통해서 화면을 그립니다.
    3.등록버튼 클릭 이후에는 ref를 활용해서 inout태그에 포커싱을 줍니다.
    */
    
    const [data,setData] = useState({todo:'', list:[]});


    const inputTag = useRef(null);

    //인풋데이터 핸들링
    const handleChange = (e) => {
        setData({...data,["todo"]:e.target.value});
    }

    //추가하기
    const register = () => {
        inputTag.current.focus();

        let arr = data.list.concat(data.todo); //기존 list는 유지, 새롭게 합쳐진 리스트를 반환

        setData({todo:'', list:arr});
        
        // setData({...data,["list"]:data.todo});
        
    }

    //화면 그림
    const newArr = data.list.map((item,index)=><li key={index}>{index+1}.{item}</li>);

    return (
        <div>
            <h3>ref로 할일 목록 만들기</h3>
            <input type="text" name="todo" placeholder="할일목록" ref={inputTag} onChange={handleChange} value={data.todo}/>
            <button onClick={register}>등록하기</button>
            <ul>
                {newArr}
            </ul>
        </div>
    )
}

export default HookQ2;