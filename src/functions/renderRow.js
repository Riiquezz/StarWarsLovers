import React from "react";
import returnID from "./returnID";
import splitText from "./splitText";

import {  
	Link
} from "react-router-dom";

const renderRow = (value) => {
	const {url} = value;
	const {name} = value;
	const {title} = value;

	return (
		<tr key={returnID(url)}>
			<td> 
				{returnID(url)}
			</td>
			<td> 
				 <Link to={"../"+splitText(url)}>
					{name || title} 
				</Link>
			</td>
			<td> 
				
			</td>
		</tr>
	)
}

export default renderRow;