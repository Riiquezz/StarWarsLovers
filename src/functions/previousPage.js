const previuosPage = (id,path,previous) =>{
	if(previous){
		if(id > 1){
			return path + (parseInt(id) -1)
		}
	}
}

export default previuosPage;