import React from 'react';
import {geolocated} from 'react-geolocated';
import Geoloc from './geoLoc';
import GoogleMapReact  from 'google-map-react';

import {Modal, Button, Row, Col , Icon, }  from 'antd';

const Marker = props => (
    <Icon
      // onClick={async () => {
      //   props.filterData(props.responseId);
      // }}
      type='exclamation-circle' 
      style={{ color: "red", fontSize: 15 }}
      theme='filled'
    />
);


class Main extends React.Component {
    
        state = { visible: false };

        showModal = () => {
          this.setState({
            visible: true,
          });
        };
      
        handleCancel = e => {
          this.setState({
            visible: false,
          });}
        
      
  render() {
    return (
      <div style={{padding:"2%", height:"100vh"}}>
        <Row style={{height:"inherit"}}>
            <Col span={8}>
                <Button type="primary" onClick={this.showModal}>
                    Register as Service Point
                </Button>
                <Modal
                title="Register as  service Point"
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={null}>
                    <Geoloc {...this.props} handleCancel = {this.handleCancel} />       
                </Modal>
            </Col>
            <Col span={16} style={{height:"100%", backgroundColor:"black"}}>
            {/* <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC3_Kdx6Wr2gO-wKnOBiproKKhgaTdIVAg" }}
                defaultCenter={{
                    lat: 13.00032,
                    lng: 80.21624
                    }} 
                defaultZoom={12}
                >
                    {
                      locationArr ?
                        locationArr[0].map((data,index) => {
                        console.log(data)
                        return <Marker key={index} 
                        data ={data}
                        lat={data[0]}
                        lng={data[1]}
                        draggable = {true}
                    />})
                        :null
                    }                   
            </GoogleMapReact>  */}

            </Col>
        </Row>
      </div>
    );
  }
}

export const MainWithGeoLoc = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Main);

