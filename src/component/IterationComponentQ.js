
/*

이미지를 가져오는 방법

1.외부 서버에서 경로를 참조받음 (가장 일반적인 방법)

2.src폴더 밑에 img 파일 참조가능 (선호하는 방법이 아님)
  이미지가 많아지면 쓰기 힘듦
  //import img1 from '../img/img1.png'

3.public폴더 밑에 넣는 경우 이미지를 바로 참조 가능
//http://localhost:3000/img/img1.png

*/

import { useState } from "react";

const IterationComponentQ = () => {

    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ];

    const [list, setList] = useState(arr);


    const [img, setImg] = useState('');
    
    const handleClick = (e) => {
        // console.log(newList);
        setImg(e.target.src);
    }


    const newList = list.map(item => 
        
            <div key = {item.title} onClick={handleClick}>
                <img src = {item.src} alt={item.title} width="100"/>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
        );

    


    return (
        <>
            <h3>이미지 데이터 반복하기</h3>
            {/*
            <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100"/>
            <img src={img1} alt="제목" width="100"/>
            <img src="/img/img1.png" alt="제목" width="100"/>
            */}

            <div> {/*<img src={list}/>*/} <img src={img}/></div>

            <div style={{display : "flex", justifyContent:"space-around"}}>

            {/* 반복할 요소의 모형 */}
                {newList}
            </div>
        </>
    )
}

export default IterationComponentQ;