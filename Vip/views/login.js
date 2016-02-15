var React = require('react-native');
var tcomb = require('tcomb-form-native');
var Index = require('./index');

var { 
	AppRegistry, 
	StyleSheet, 
	Text, 
	View, 
	TouchableHighlight,
	NavigatorIOS,
	StatusBarIOS 
} = React;

StatusBarIOS.setStyle('light-content');
StatusBarIOS.setNetworkActivityIndicatorVisible(true);

var Form = tcomb.form.Form;

var User = tcomb.struct({
	用户名:tcomb.String,
	密码:tcomb.Number,
	记住我:tcomb.Boolean
});

var options = {
	fields: {
	    用户名: {
	      	placeholder: '请输入您的注册手机号',
	      	error: '请输入正确的手机号'
	    },
	    密码:{
	    	placeholder: '请输入您的登录密码',
	    	error:'请输入密码',
	    	password:true
	    }
  	}
};

var Login = React.createClass({
	getInitialState: function() {
		return {
			showLoginForm:true,
			showIndex:{
				height:0,
				opacity:0
			}
		};
	},

	validate:function(){
		var rs = this.refs.loginForm.getValue();
		if(rs){
			// this.props.navigator.push({
			// 	component:Index,
			// 	navigationBarHidden:false
			// });
			this.setState({
				loginForm:{
					height:0,
					width:0,
					flex:0,
				},
				showLoginForm:false,
				showIndex:{
					flex:1
				}
			});

		}
	},

	render: function() {
		return (
			<View style={{flex:1}}>
				{this.state.showLoginForm?
					<View style={[styles.container,this.state.loginForm]}>
			        {/* display */}
			        <Form
			          ref="loginForm"
			          type={User}
			          options={options}
			        />
			        <TouchableHighlight style={styles.button} onPress={this.validate} underlayColor='#99d9f4'>
			          <Text style={styles.buttonText}>登录</Text>
			        </TouchableHighlight>
		      	</View>:null}
				{!this.state.showLoginForm?<Index style={this.state.showIndex}/>:null}
			</View>
		);
	}

});


var LoginForm = React.createClass({

	validate:function(){
		var rs = this.refs.loginForm.getValue();
		if(rs){
			// this.props.navigator.push({
			// 	component:Index,
			// 	navigationBarHidden:false
			// });
			this.setState({
				loginForm:{
					height:0,
					width:0,
					flex:0,
				},
				showLoginForm:false,
				showIndex:{
					flex:1
				}
			});

		}
	},

	render: function() {
		return (
			<View style={[styles.container,this.state.loginForm]}>
		        {/* display */}
		        <Form
		          ref="loginForm"
		          type={User}
		          options={options}
		        />
		        <TouchableHighlight style={styles.button} onPress={this.validate} underlayColor='#99d9f4'>
		          <Text style={styles.buttonText}>登录</Text>
		        </TouchableHighlight>
	      	</View>
		);
	}

});


var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = Login;