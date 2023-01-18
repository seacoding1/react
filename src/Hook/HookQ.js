import { useEffect, useRef, useState } from "react";

const HookQ = () => {

    /*
    1. 컴포넌트가 마운트된 이후 한번만 id태그에 포커스를 줍니다.

    
    2. id,pw은 state로 관리합니다. 
       로그인 버튼 클릭시 공백이라면 공백인 태그에 포커스를 주세요.
       로그인 버튼 클릭시 공백이 아니라면 경고창으로 id와 pw를 출력해주세요.
    */

    const idTag = useRef(null);
    const pwTag = useRef(null);


    useEffect(()=>{
        idTag.current.focus();
    },[]);

    const [login, setLogin] = useState({id:'', pw:''});

    //인풋 태그의 핸들링
    const handleChange = (e) => {
        setLogin({...login, [e.target.name]:e.terget.value});
    }
   
   
    const handleClick = () => {

        if(idTag.current.value === ''){
            idTag.current.focus();
        } else if(pwTag.current.value === ''){
            pwTag.current.focus();
        }else {
            alert(`${login.id} 이고 ${login.pw}`);
        }

        idTag.current.value = '';
        pwTag.current.value = '';

    }


    return (
        <div>
                <h3>훅 실습</h3>
                <input type = "text" name="id" placeholder="아이디" onChange={handleChange} ref={idTag}/>
                <input type = "password" name="pw" placeholder="비밀번호" onChange={handleChange} ref={pwTag}/>
                <button onClick={handleClick}>로그인</button>
        </div>
    )
}

export default HookQ;