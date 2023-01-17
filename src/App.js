import { Fragment } from "react"
import IterationComponent from "./component/IterationComponent";
import IterationComponent2 from "./component/IterationComponent2";
import IterationComponentQ from "./component/IterationComponentQ";
import IterationComponentQ2 from "./component/IterationComponentQ2";



const App = () => {
    return(

        /* 180p
        컴포넌트 반복하기
        map (콜백(item,index,arr))
         */
        <Fragment>
            <IterationComponent/>

            <hr/>

            <IterationComponent2/>

            <hr/>

            <IterationComponentQ/>

            <hr/>

            <IterationComponentQ2/>

        </Fragment>
    )
}

export default App;