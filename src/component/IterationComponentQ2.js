import { useState } from "react";

const IterationComponentQ2 = () => {

    //1. select는 컴포넌트 반복으로 option태그 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    const opt = select.map(item => 
        <option key={item}>{item}</option>
    );
    
    //2. data는 state를 관리하고 화면에 li태그로 반복을 합니다.
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];

    const [list,setList] = useState(data);

    // const [list2,setList2] = useState(data);

    const li = list.map(item=>
            <li key = {item.id}>{item.type}-{item.teacher}</li>
        );

    // console.log(list);

    //3.select박스가 체인지되면, 이벤트 객체를 활용해서 선택된 값만 필터링해서 보여주면 됩니다.
    
    const handleChange = (e) => {
        const newList = data.filter((item) => item.type === e.target.value);
        setList(newList);    
    }

    //4.숙제 : 검색 기능 만들기
    //대소문자를 구분하지 않고 teacher, type에 포함된 데이터만 필터링

    // let search = '';
    const [search,setSearch] = useState('');

    const handleChange2 = (e) => {
        setSearch(e.target.value);
        
    }

    const handleEnter = (e) => {
        if(e.keyCode == 13) {
            handleSearch();
        };
    }

    const handleSearch = () => {

        const newList = data.filter((item)=>item.type.toLowerCase().includes(search.toLowerCase())||item.teacher.toLowerCase().includes(search.toLowerCase()));
        setList(newList);
        setSearch('');
    }
    

    return (
        <>
            <h3>컴포넌트 반복 실습</h3>

            <input type="text" onChange={handleChange2} onKeyUp={handleEnter} value={search}/>
            <button onClick={handleSearch}>검색</button> <br/>

            <select onChange={handleChange}>
                {opt}
            </select>

            <ul>
                {li}
            </ul>
        </>
    )
}

export default IterationComponentQ2;