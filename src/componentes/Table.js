import React from "react";
import renderRow from "../functions/renderRow";

const Table = (props) =>{
	const {results} = props;
	const {total } = props;
	
	return (
		<div className="table">
			<p></p> <hr/>
			<table>
				<thead>	
					<tr>
						<th> ID </th>
						<th> NAME </th>
						
					</tr>
				</thead>
				<tbody>
					{results.map(renderRow)}
				</tbody>
			</table>
		</div>
	)
}

export default Table;