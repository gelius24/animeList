import React, {useContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import { SearchContext } from '../context/search'
import {FormControl, Input, IconButton, Grid} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import './Home.scss'

function Home() {
    const search = useContext(SearchContext)
    const [input, setInput] = useState('')
    const history = useHistory()

    // useEffect(() => {
    //     search.search('Naruto').then((data) => {
    //         console.log(data)
    //     })
    // }, [search])

    const handleSearch = (e) => {
        e.preventDefault(); //refuse page refresh
        search.search(input).then((data) => {
            search.setData(data.results)
            localStorage.setItem('myData', JSON.stringify(data.results))
            history.push('/results')
        })
    }
    
    return (
        <Grid container direction='column' justify='center' alignContent='center' alignItems='center'>
            <Grid item>
                <Grid item><img src={`${process.env.PUBLIC_URL}/inuyasha.png`} height={420} width={550}/></Grid>
                <Grid item>
                    <form className='home__form'>
                        <FormControl className='home__formControl' type='submit'>
                            <Input className='home__input' placeholder='Search your favorite anime...' value={input} onChange={(e) => setInput(e.target.value)} />
                            <IconButton className='home__iconButton' variant='contained' color='primary' type='submit' disable={!input} onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home
