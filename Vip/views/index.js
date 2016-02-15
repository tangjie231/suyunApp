var React = require('react-native');
var BidSelect = require("./bidSelect");
var BidPublish = require("./bidPublish");
var BidList = require("./bidList");
var Icon = require('react-native-vector-icons/FontAwesome');

var {
	StyleSheet,
	Text,
	View,
	AlertIOS,
	StatusBarIOS,
	NavigatorIOS,
	TabBarIOS
} = React;

StatusBarIOS.setStyle('light-content');
StatusBarIOS.setNetworkActivityIndicatorVisible(true);


var Index = React.createClass({

	getInitialState: function() {
		return {
			selectTab:'选标'
		};
	},

	changeTab:function(tab){
		this.setState({
			selectTab:tab

		});
	},

	render: function() {
		return (
			<TabBarIOS
			tintColor='chartreuse'
			barTintColor='white'>
				<Icon.TabBarItem
				iconName={'truck'}
	          	title={'选标'}
	          	iconSize={25}
ß				selected={this.state.selectTab === '选标'}
				onPress={()=>{this.changeTab("选标")}}
				>
					<NavigatorIOS
						style={styles.container}
						barTintColor='lightslategray'
						titleTextColor={"#fff"}
						initialRoute={{
							component:BidSelect,
							title:"选标"
						}}
					/>
				</Icon.TabBarItem>

				<Icon.TabBarItem
				iconName={'user'}
	          	title={'发布标书'}
	          	iconSize={25}
				selected={this.state.selectTab === '发布标书'}
				onPress={()=>{this.changeTab("发布标书")}}
				>
					<NavigatorIOS
						style={styles.container}
						barTintColor='lightslategray'
						titleTextColor={"#fff"}
						initialRoute={{
							component:BidPublish,
							title:"发布标书"
						}}
					/>
				</Icon.TabBarItem>

				<Icon.TabBarItem
				iconName={'align-justify'}
				badge={3}
	          	title={'标书列表'}
	          	iconSize={25}
				selected={this.state.selectTab === '标书列表'}
				onPress={()=>{this.changeTab("标书列表")}}
				>
					<NavigatorIOS
						style={styles.container}
						barTintColor='lightslategray'
						titleTextColor={"#fff"}
						initialRoute={{
							component:BidList,
							title:"标书列表"
						}}
					/>
				</Icon.TabBarItem>
			</TabBarIOS>

		);
	}

});

var styles = StyleSheet.create({
	container : {
		flex:1
	}

});

module.exports = Index;