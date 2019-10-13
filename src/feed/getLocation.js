import React from 'react';
import {geolocated} from 'react-geolocated';
import Geoloc from './geoLoc';
import GoogleMapReact  from 'google-map-react';
import constants from "../constant";
import {Modal, Button, Row, Col , Icon, message , Slider}  from 'antd';

const axios = require('axios').default;


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

        state = { 
            visible: false,
            radius : 50,

        };

        showModal = () => {
          this.setState({
            visible: true,
          });
        };

        // componentDidMount = () => {
        //     this.getNearbyLocations()
        // }
        componentDidUpdate(){
            console.log( "UPDATE",this.props.coords)
            this.getNearbyLocations(this.props.coords)
        }  
        
        

        getNearbyLocations = (coords) => {
            axios.post(constants.get_nearby_details, {
            coordinates:[coords.latitude, coords.longitude],
            radius: this.state.radius
        })
        .then(res => {
            if(res.data.error){
                message.error("can't fetch data")                    
            }
            else {
                         
              console.log("success",res.data.data)
            }
        })
        .catch(err => console.log("error", err))
        }
      
        handleCancel = e => {
          this.setState({
            visible: false,
          });}
        
          onChange = e => {
              console.log(e.target.value)
          }
          onAfterChange = e => {
              console.log("onAferChange", e.target.value)
          }
      
  render() {
     
    return (
      <div style={{padding:"2%", height:"100vh"}}>
        <Row style={{height:"inherit"}}>
            <Col span={8}>
            <label>Select Range</label>
            <Slider
                range
                step={10}
                defaultValue={[20, 50]}
                onChange={this.onChange}
                onAfterChange={this.onAfterChange} 
                />

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

