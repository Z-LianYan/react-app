

import state from './state'

const reducer = (previousState = state , action) => {
	let new_state = { ...previousState }
	switch(action.type){
		case '':
			return '';
			
		default break;
	}
	return new_state
}


export default reducer