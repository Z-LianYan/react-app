

import { Component } from 'react'

//将get,post方法放到原型链上
import Post from './post'
import Get from './get'
Component.prototype.Post = Post
Component.prototype.Get = Get


export default {
	Post,Get
}
