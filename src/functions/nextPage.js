const nextPage = (id,path,next) =>{
	if(next){
		return path + (parseInt(id) + 1)
	}
}

export default nextPage;