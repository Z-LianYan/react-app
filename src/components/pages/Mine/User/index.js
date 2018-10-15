

import React, { Component } from 'react'
import './index.scss'

import { GroupCommons } from '../../../../modules/group'

class User extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	
	
	componentWillReceiveProps(props){
		let { userInfo, history } = props
		if( userInfo === null ){
			history.replace("/mine/login")
		}
	}
	
	
	
	
	
	render(){
		let { userInfo } = this.props
		return (
			<div className=''>
				user
				<div>{ !userInfo || userInfo.username }</div>
				<button onClick = { this.props.exit }>exit</button>
			</div>
		)
	}
	
}

export default GroupCommons(User)