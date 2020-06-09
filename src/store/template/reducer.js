

import state from './state'

const reducer = (previousState = state , action) => {
	let new_state = { ...previousState }
	switch(action.type){
		case '':
		break;	
		default: break;
	}
	return new_state
}


export default reducer