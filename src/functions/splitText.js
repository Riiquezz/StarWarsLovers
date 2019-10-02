const splitText = (record) => {
		var string = "https://swapi.co/api/"
		var url = record.split(string);
		return url[1]
	}


export default splitText;