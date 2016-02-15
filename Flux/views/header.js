var React = require('react-native');

var {
	Text,
	View,
	StyleSheet
} = React;

var Header = React.createClass({

	render: function() {
		return (
			<View style={styles.header}>
				<View style={styles.item}>
					<Text style={styles.font}>{this.props.title}</Text>
				</View>
			</View>
		);
	}

});

var styles = StyleSheet.create({
	header:{
		height:60,
		backgroundColor:'cornflowerblue',
	},
	font : {
		color : '#fff',
		fontSize : 16,
		fontWeight : 'bold'
	},
	item :{
		flex:1,
		paddingTop:15,
		alignItems:'center',
		justifyContent:'center'
	},
});

module.exports = Header;