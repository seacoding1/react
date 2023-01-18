import { Fragment } from "react";

//CSS 파일 경로 링크
import './CSS/App.css'; 

//CSS 모듈 파일 링크
import styled from './CSS/App.module.css';

const App = () => {

    // 직접스타일링하기 : -은 카멜 표기법으로 변경됩니다.  
    const myStyle = {
        color : "red",
        textAlign : "center"
    }

    return (
        <Fragment>
            <header style={{backgroundColor : "black"}} className="app_header">
                <p style={myStyle}>헤더입니다.(직접 스타일링)</p>
            </header>

            <article className="app_article">

            </article>

            <section className={styled.app_wrap}>
                <div className={styled.app_item}>
                    <p>CSS디자인</p>
                    <input type="text" className="input_control"/>
                    <input type="password" className="input_control"/>
                </div>
            </section>
        </Fragment>
    )
}

export default App;