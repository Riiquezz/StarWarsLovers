const returnID = (record) =>{
	/*
	Example of record 
	https://swapi.co/api/people/1/
	*/
	
	var urlBase = "https://swapi.co/api/";
	var url = record.split(urlBase)
	/*
	Removing https://swapi.co/api/
	left people/1/
	*/
	
	var x = 0;
	//Initialized x
	url.map( (value)=>{
		/*
			Array (2) ["", "people/1/"]
			index 0 is null,
			index 1 is left 
		*/
		if(value !== ""){
			x = value.split("/")
			/*
				Divide "people/1" in 3 parts
				Array (3) ["people", "1", ""]
				index 0 ["people"]
				index 1 ["1"]
				index 2 [""]
			*/
		}
	})
	return x[1]
}

export default returnID;