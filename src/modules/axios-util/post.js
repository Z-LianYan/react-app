

import axios from 'axios'
import qs from 'querystring'
axios.defaults.crossDomain = true
axios.defaults.withCredentials = true

const config = {
	headers: {
	    'Content-Type': 'application/x-www-form-urlencoded',
	}
}

const Post = ({ url,data }) => {
	axios.post(url,qs.stringify(data),config)
}

export default Post