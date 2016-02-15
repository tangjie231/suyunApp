var React = require('react-native');
var Header = require("./header");
var Icon = require('react-native-vector-icons/FontAwesome');

var {
	StyleSheet,
	TabBarIOS,
	Text,
	View,
	AlertIOS,
	ScrollView,
	Image,
	CameraRoll,
	DatePickerIOS,
	ImagePickerIOS
} = React;

var BidSelect = React.createClass({
	onDateChange : function(date) {
		this.setState({
			date:date
		});
	},
	getInitialState: function() {
		return {
			photoSource:null,
			date:new Date()
		};
	},
	componentDidMount: function() {
		CameraRoll.getPhotos(
			{first:5},
			(data)=>{
				console.info("success");
				this.setState({
					photoSource:{uri:data.edges[3].node.image.uri}
				});
			},
			(error)=>{
				console.warn(error);
			}
		);
	},	
	render: function() {
		return (
			<ScrollView style={styles.container}>
				<View style={{alignItems:'center',justifyContent: 'center'}}>
					<Image
						style={{width:100,height:100}}
						source={this.state.photoSource}
						resizeMode='cover'
					>
					</Image>
					<DatePickerIOS
			          date={this.state.date}
			          mode="datetime"
			          //timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
			          onDateChange={this.onDateChange}
			        />
				</View>
			</ScrollView>
		);
	}

});


var styles = StyleSheet.create({
	container : {
		padding:5,
		flex:1
	}

});

module.exports = BidSelect;