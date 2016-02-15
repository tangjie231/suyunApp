var React = require('react-native');
var Swipeout = require('react-native-swipeout');
//var ListItem = require('react-native-listitem');
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
		    //getRowData: getRowData,
		    rowHasChanged: (r1, r2) => r1 !== r2,
		    sectionHeaderHasChanged: (s1, s2) => s1 !== s2
		});
		return {
			dataSource:ds.cloneWithRowsAndSections(bidList), 
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
		var rightBts = [
			{
				text:'删除',
				backgroundColor:'red',
				height:60,
				onPress:function(){
					AlertIOS.alert("提示","删除成功");
				}
				//component:<Text style={{marginTop:10}}>删除</Text>
			}
		];

		var viewItem = {
			item:<Swipeout right={rightBts} backgroundColor='white' autoClose={true} >
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
				</Swipeout>
		};

		return(
			//<TouchableHighlight underlayColor='whitesmoke' activeOpacity={0.5} onPress={this._onPress}>
				//<View>
					<Swipeout right={rightBts}  backgroundColor='white'  autoClose={true}>
						<TouchableHighlight underlayColor='whitesmoke'  activeOpacity={0.5} onPress={this._onPress}>
						<View style={[styles.item,styles.content]}>
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
					</Swipeout>
				//</View>
			//</TouchableHighlight>
			// <ListItem
			// 	children={viewItem.item}
			// 	onPress={this._onPress}
			// 	style={{height:70}}
			// 	/>

		);
	},

	_rendenHeader:function(sectionData,sectionID){
		console.log(sectionID);
		return(
			<View style={styles.sectionHeader}>
            	<Text style={{color:'#fff',fontSize:18,fontWeight:'bold',marginLeft:10}}>{sectionID}</Text>
        	</View>
		)
		
	},

	_onPress:function(){
		this.props.navigator.push({
			title:'标书详情',
			component:BidDetail
		});
		
		
	},

});


var styles = StyleSheet.create({
	container : {
		padding:2,
		flex:1
	},
	content:{
		marginTop:1,
		marginLeft:10,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'flex-start'
	},
	item:{
		height:60,
		//borderTopWidth:1/PixelRatio.get(),
		borderBottomWidth:1/PixelRatio.get(),
		//marginTop:5,
		//marginBottom:5,
		//paddingTop:5,
		//paddingBottom:5,
		borderColor:'#ccc',
		alignItems:'center',
		justifyContent:'flex-start'
	},
	sectionHeader:{
		backgroundColor : '#b0c4de',
		height:30,
		justifyContent:'center',
		borderRadius:5,
		marginBottom:2,
		marginTop:2
	}

});

var bidList = {
	'水果专线':[
		{
			lineName:'水果专线',
			periodWeek:'周一、周三、周六',
			spanDate:'2016-02-08~2016-03-01'
		},
		{
			lineName:'水果专线',
			periodWeek:'周一、周三、周六',
			spanDate:'2016-02-08~2016-03-01'
		},
		{
			lineName:'水果专线',
			periodWeek:'周一、周三、周六',
			spanDate:'2016-02-08~2016-03-01'
		},
		{
			lineName:'水果专线',
			periodWeek:'周一、周三、周六',
			spanDate:'2016-02-08~2016-03-01'
		},
		{
			lineName:'水果专线',
			periodWeek:'周一、周三、周六',
			spanDate:'2016-02-08~2016-03-01'
		},
		{
			lineName:'水果专线',
			periodWeek:'周一、周三、周六',
			spanDate:'2016-02-08~2016-03-01'
		},
		{
			lineName:'水果专线',
			periodWeek:'周一、周三、周六',
			spanDate:'2016-02-08~2016-03-01'
		},
		{
			lineName:'水果专线',
			periodWeek:'周一、周三、周六',
			spanDate:'2016-02-08~2016-03-01'
		}
	],
	'蔬菜专线':[
		{
			lineName:'蔬菜专线',
			periodWeek:'周二、周三、周六',
			spanDate:'2016-02-09~2016-03-08'
		}
	]
};

var sectionIDs = ['fruit','veg'];

var rowIDs = [['1','2','3','4','5','6','7','8'],['1']];

module.exports = BidSelect;