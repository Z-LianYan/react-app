
import { CHECK_USER_INFO } from './const.js'

const actionCreator = {
	login( { success, fail, username, password } ){
		return dispatch => {
			setTimeout(() => {
				if ( username === '123' && password === '456'){
					dispatch({
						type:CHECK_USER_INFO,
						userInfo:{
							username:'二狗子'
						}
					})
					success()
					return false;
				}
				if(fail) fail()
			},1000)
		}
	},
	
	exit(){
		return { type:CHECK_USER_INFO, userInfo:null }
	}
	
}

export default actionCreator