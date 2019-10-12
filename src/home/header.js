import React from 'react';
import { Row, Col} from 'antd';
import 'antd/dist/antd.css'; 

export const Header = props => {
    if(props.page === "home"){
        return(
            <Row className="appHeader">
                    <Col span={4} style={{height:"50px"}}>
                        <div className="title">
                            <p>LynK Aid</p>
                        </div>
                    </Col>
                    <Col span={16}>
                    </Col>
                    <Col span={4} className="feedLink">
                        <div >
                            <a href="/feed" style={{color:"white", fontWeight:"bold"}}> Go to Feeds </a> 
                        </div>
                    </Col>
                </Row> 
        )
    }
    return(
        <Row  className="appHeader">
                    <Col span={4} style={{height:"50px"}}>
                        <div className="title">
                            <p>LynK Aid</p>
                        </div>
                    </Col>
                    <Col span={16}>
                    </Col>
                    <Col span={4} className="feedLink">
                        <div >
                            <a href="/" style={{color:"white", fontWeight:"bold"}}> Go to Home </a> 
                        </div>
                    </Col>
                </Row> 
    )
}