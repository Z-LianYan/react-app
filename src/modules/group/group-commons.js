
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../store/commons/actionCreator'


export default connect(state => state.commons, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})