import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "../componentes/Table";




const Planets = ({match}) =>{
	const [total,setTotal] = useState(0);
	const [previous,setPrevious] = useState(null);
	const [next,setNext] = useState(null);	
	const [results,setResults] = useState([]);
	const { id } = match.params;
	const link = "https://swapi.co/api/planets"
	const format ="&format=json"
	const path = match.path.split(":id")[0];
	
	useEffect(()=>{
		axios.get(link)
		.then( (res )=> {
			if(res.status === 200){
				var {count } = res.data;
				setTotal(count)

				var {next} = res.data;
				setNext(next)

				var {previous} = res.data;
				setPrevious(previous)

				var {results} = res.data;
				setResults(results)
			}
			else if(res.status === 404){
			}
 		})
		.catch((error)=>{
			console.log(error)
		})
	},[id,link,format])

    return (
        <div className="films">

            <section class="home_banner_area">
                <div class="banner_inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="banner_content">
                                    <h1></h1>
                                        <Table results={results}/>
                                    <hr />


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )

}

export default Planets;