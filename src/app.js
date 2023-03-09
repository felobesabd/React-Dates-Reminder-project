import { Container} from "react-bootstrap"; 
import { info } from './component/data';
import CountData from './component/CountData';
import TimeData from "./component/TimeData";
import ButtonData from "./component/ButtonData";
import React, { useState, useEffect } from "react";

let App = () => {
    const [infoData, setInfoData] = useState(info);
    
    const deleteFanc = () => {
        setInfoData([])
    }
    const showFanc = () => {
        setInfoData(info)
    }

    useEffect(() => {
        setInfoData([])
    }, [])
    

    return (
        <div className="font color-body">
            <Container className='p-5'>
                <CountData count={infoData}/>
                <TimeData data={infoData}/>
                <ButtonData deleterem={deleteFanc} show={showFanc} />
            </Container>
        </div>
    )
}
export default App;