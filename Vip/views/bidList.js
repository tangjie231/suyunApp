var React = require('react-native');
var Header = require("./header");
var Icon = require('react-native-vector-icons/FontAwesome');
var BidDetail = require("./bidDetail");

var {
	StyleSheet,
	TabBarIOS,
	Text,
	View,
	AlertIOS,
	ScrollView,
	ListView,
	PixelRatio,
	TouchableHighlight
} = React;

var BidSelect = React.createClass({
	getInitialState: function() {
		var getSectionData = (dataBlob,sectionID) => {
			return dataBlob[sectionID];
		};
		var getRowData = (dataBlob,sectionID,rowID) => {
			return dataBlob[sectionID+":"+rowID];
		};
		var ds = new ListView.DataSource({
			getSectionData: getSectionData,
		    getRowData: getRowData,
		    rowHasChanged: (r1, r2) => r1 !== r2,
		    sectionHeaderHasChanged: (s1, s2) => s1 !== s2
		});
		return {
			dataSource:ds.cloneWithRowsAndSections(bidList,sectionIDs,rowIDs), 
		};
	},

	render: function() {
		return (
			<ScrollView style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this._rendenRow}
					renderSectionHeader = {this._rendenHeader}
					/>
			</ScrollView>
		);
	},

	_rendenRow:function(rowData, sectionID, rowID){
		return(
			<TouchableHighlight underlayColor='whitesmoke' activeOpacity={0.5} onPress={this._onPress}>
				<View style={[styles.content,styles.item]}>
					<View>
						<Icon name = 'apple'
						       size = {
						         40
						       }
						       style = {{
						       	width:40,height:40
						       }}
						       color='navy'
						       />
					</View>
					<View style={{flexDirection:'column'}}>
						<View>
							<Text style={{fontSize:16,fontWeight:'bold'}}>{rowData.lineName}</Text>
						</View>
						<View>
							<Text style={{fontSize:13,color:'#4c4c4c'}}>{rowData.spanDate}</Text>
						</View>
						<View>
							<Text style={{fontSize:13,color:'#4c4c4c'}}>{rowData.periodWeek}</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		);
	},

	_rendenHeader:function(sectionData,sectionID){

		return(
			<View style={{backgroundColor : '#b0c4de',height:30,justifyContent:'center',borderRadius:5}}>
            	<Text style={{color:'#fff',fontSize:18,fontWeight:'bold',marginLeft:10}}>{sectionData.sectionName}</Text>
        	</View>
		)
		
	},

	_onPress:function(){
		this.props.navigator.push({
			title:'标书详情',
			component:BidDetail
		});
	}

});


var styles = StyleSheet.create({
	container : {
		padding:5,
		flex:1
	},
	content:{
		marginTop:10,
		marginLeft:10,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'flex-start'
	},
	item:{
		height:60,
		borderTopWidth:1/PixelRatio.get(),
		borderBottomWidth:1/PixelRatio.get(),
		marginTop:5,
		marginBottom:5,
		borderColor:'#ccc',
		alignItems:'center',
		justifyContent:'flex-start'
	}

});

var bidList = {
	'fruit':{sectionName:'水果专线'},
	'fruit:1':{
		lineName:'水果专线',
		periodWeek:'周一、周三、周六',
		spanDate:'2016-02-08~2016-03-01'
	},
	'fruit:2':{
		lineName:'水果专线',
		periodWeek:'周一、周三、周六',
		spanDate:'2016-02-08~2016-03-01'
	},
	'fruit:3':{
		lineName:'水果专线',
		periodWeek:'周一、周三、周六',
		spanDate:'2016-02-08~2016-03-01'
	},
	'fruit:4':{
		lineName:'水果专线',
		periodWeek:'周一、周三、周六',
		spanDate:'2016-02-08~2016-03-01'
	},
	'fruit:5':{
		lineName:'水果专线',
		periodWeek:'周一、周三、周六',
		spanDate:'2016-02-08~2016-03-01'
	},
	'fruit:6':{
		lineName:'水果专线',
		periodWeek:'周一、周三、周六',
		spanDate:'2016-02-08~2016-03-01'
	},
	'fruit:7':{
		lineName:'水果专线',
		periodWeek:'周一、周三、周六',
		spanDate:'2016-02-08~2016-03-01'
	},
	'fruit:8':{
		lineName:'水果专线',
		periodWeek:'周一、周三、周六',
		spanDate:'2016-02-08~2016-03-01'
	},
	'veg':{sectionName:'蔬菜专线'},
	'veg:1':{
		lineName:'蔬菜专线',
		periodWeek:'周二、周三、周六',
		spanDate:'2016-02-09~2016-03-08'
	}
};

var sectionIDs = ['fruit','veg'];

var rowIDs = [['1','2','3','4','5','6','7','8'],['1']];

module.exports = BidSelect;