

import React, { Component } from 'react'
import './index.scss'
import { GroupCommons } from '../../../../modules/group'


class Login extends Component{
	constructor(props){
		super(props)
		this.state = {}
		this.login = this.login.bind(this)
	}
	
	login(){
		console.log('login')
		let username = '123';
		let password = '456';
		let { history } = this.props;
		this.props.login({
			username,
			password,
			success(){//成功回调
				history.replace('/mine/user')
			},
			fail(){//失败回调
				
			}
		})
	}
	
	
	
	render(){
		return (
			<div className=''>
				login
				<button onClick = { this.login }>login</button>
			</div>
		)
	}
	
}

export default GroupCommons(Login)