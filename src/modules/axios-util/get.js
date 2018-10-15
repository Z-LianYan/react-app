

import axios from 'axios'

const Get = ({ url,data }) => {
	return axios.get(url,{
		params:data
	})
}

export default Get
