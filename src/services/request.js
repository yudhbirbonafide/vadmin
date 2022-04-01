const axios = require('axios');
async function fetch(url='',type='get',data={}){
	if(type=='get'){
		const response = await axios.get(url, {params: data});
		return response;
	}else{
		const response = await axios.post(url, {params: data});
 		return response;
	}
}
 
export const Userlist = () => fetch('https://fakestoreapi.com/users');