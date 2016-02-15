import React,{Navigator, StyleSheet, Text, View} from 'react-native';
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';
import Login from './views/login';
import BidSelect from './views/bidSelect';

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
				<Route name="login" component={Login} title="用户登录" hideNavBar={true}/> 
				<Route name="main">
					<Router footer={TabBar}>
						<Route name="bidSelect" schema="tab" component={BidSelect}>
						</Route>
						<Route name="bidPublish" schema="tab" component={BidSelect}>
						</Route>
						<Route name="bidList" schema="tab" component={BidSelect}>
						</Route>
					</Router>
				</Route>
			</Router>
		);
	}
}
