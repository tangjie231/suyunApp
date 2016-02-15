import React,{Navigator, StyleSheet, Text, View} from 'react-native';
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';
import Login from './views/login';
import Index from './views/index';
import BidDetail from './views/bidDetail';


class TabIcon extends React.Component{
	render(){
		return(
			<Text>{this.props.title}</Text>
		);
	}
}

export default class vipFluxApp extends React.Component {
	render() {
		return (
			<Router>
				<Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
				<Schema name="tab" type="switch" icon={TabIcon} />
				<Route name="login" schema='modal' component={Login} title="用户登录" hideNavBar={true} initial={true} wrapRouter={true}/> 
				<Route name="main" component={Index} hideNavBar={true} title='返回' />
				<Route name="bidDetail" title="标书详情" component={BidDetail} schema='modal' hideNavBar={true}/>
			</Router>
		);
	}
}
