import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { Home, BuyCar, List, Mine } from './components/pages'

import AppFooter from './components/commons/AppFooter'

class App extends Component {
	
	constructor(props){
		super(props)
		this.state = {
//			hasFooter:true
		}
	}
	
//判断是否显示AppFooter组件:方法1
	renderFooter () {
	    //因为只要路由变化，属性就会变化，就会重新render，就会执行这个函数
	    let { pathname } = this.props.location
	    let no_footer_pathnames = ['/mine/login']
	    if (no_footer_pathnames.indexOf(pathname)>-1) return ''
	    return <AppFooter/>
	  
	}
	
//判断是否显示AppFooter组件:方法2
//	componentWillReceiveProps(props){//props改变时触发此函数
//		if(props.location.pathname === "/mine"){
//			this.setState({hasFooter:false})
//		}else{
//			this.setState({hasFooter:true})
//		}
//	}
	
	
	
	renderRoute(){
		let { routes } = this.props
		return (
			<Switch>
				{routes.map( item => <Route key = {item.id} 
				path={item.path} component = { item.component } exact = {item.exact} />)}
      		</Switch>
		)
	}
	render() {
	    return (
	     	<div className="App">
		      	{ this.renderRoute() }
		     	{ this.renderFooter() }
	      	</div>
	    );
	}
	  
	componentDidMount(){
	  
	}
	  
	shouldComponentUpdate(props){
	  	console.log("shouldComponentUpdate")
		return true
	}
  
}

App.defaultProps = {
	routes:[
		{ id:1, path:'/', component:Home, exact:true },
		{ id:2, path:'/list', component:List },
		{ id:3, path:'/buycar', component:BuyCar },
		{ id:4, path:'/mine', component:Mine }
	]
}

export default withRouter(App);
