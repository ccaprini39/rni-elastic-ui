import { useState, useEffect } from "react"
import { checkIndexExists, getAllIdices, helloWorldFetch } from "../crud-utils/indexFunctions"

export function ViewData(){

    const [indices, setIndices] = useState([])

    useEffect(() => {
        async function loadData(){
            //const data = await getAllIdices()
            //const data = await checkIndexExists()
            const data = 'placeholder'
            console.log(data)
            //setIndices(data)
        }
        loadData()
    },[])

    return (
        <div>
            {indices.map((index, position) => {
                return(
                    <p>index</p>
                )
            })}
        </div>
    )
}