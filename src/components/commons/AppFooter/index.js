

import React, { Component } from 'react'
import './index.scss'

import { NavLink } from 'react-router-dom'

class AppFooter extends Component{
	
	renderNav(){
		let { navs } = this.props
		return navs.map( item => (
			<NavLink exact={item.exact} activeClassName='actived' to={item.path} key = {item.id}>
				<i className={'fa fa-'+item.icon}></i>
				<span>{item.title}</span>
			</NavLink>
		))
		
	}
	
	render(){
		return (
			<footer className='app-footer-nav'>
				{this.renderNav()}
			</footer>
		)
	}
	
}

AppFooter.defaultProps = {
	navs:[
		{id:1,path:'/',title:'首页',icon:'home', exact:true},
		{id:2,path:'/list',title:'分类',icon:'th-list'},
		{id:3,path:'/buycar',title:'购物袋',icon:'shopping-bag'},
		{id:4,path:'/mine',title:'我的',icon:'user-circle'}
	]
}


export default AppFooter