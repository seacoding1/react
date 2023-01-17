import HookEffect from "./Hook/HookEffect";


const App = () => {


    /*
    p.223
    1. 필수훅
    useState()
    컴포넌트에서 상태값을 제어하는 가장 기본이 되는 hook

    useEffect()
    컴포넌트의 라이프 사이클(생명주기)을 다룹니다.
    mount, mount이후, state변경될 때, unmount이전에 특정 작업을 수행할 수 있습니다.
     */
    return (
        <>
            <HookEffect/>
        </>
    )
}

export default App;