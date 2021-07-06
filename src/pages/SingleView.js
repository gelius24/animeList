import { Typography } from '@material-ui/core'
import React, {useEffect, useContext, useState} from 'react'
import SingleAnime from '../components/SingleAnime'
import {SearchContext} from '../context/search'

function SingleView() {
    const search = useContext(SearchContext)
    const [dataExist, setDataExist] = useState(true)

    useEffect(() => {
        if(search.singleData === undefined || Object.keys(search.singleData) === 0){
            try{
                search.setSingle(JSON.parse(localStorage.setItem('singleData')))
                setDataExist(true)
            } catch(error){
                console.log(error)
                setDataExist(false)
            }
        }
        console.log(search.singleData)
    }, [search])

    return (
        <div>
            {dataExist && <SingleAnime info={search.singleData} /> || <Typography component='h2' variant='h4'>No data exist</Typography>}
        </div>
    )
}

export default SingleView
