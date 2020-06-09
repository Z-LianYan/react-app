

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'//处理异步动作

import reducer from './reducer'

const store = createStore(reducer,applyMiddleware(thunk))//createStore 接受一个reducer参数，生成一个新的store，以后每当store.dispatch发送过来一个新的Action，就会自动调用Reducer，得到新的state

export default store