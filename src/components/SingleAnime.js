import React, { useEffect } from 'react'
import {Grid, Typography, Paper} from '@material-ui/core'
import './SingleAnime.scss'

function SingleAnime(props) {
    const {title, image_url, episodes, rating, airing, broadcast, score, url} = props.info

    useEffect(() => {
        console.log(title, image_url)
    }, [title, image_url])

    return (
        <Grid className='singleAnime__container' container spacing={10} direction='row' justify='center' alignItems='center' alignContent='center'>
            <Grid item>
                <img src={image_url} alt={title} className='singleAnime__image' />
            </Grid>
            <Grid item>
            <Paper elevation={3} className='singleAnime__description'>
                <Typography component='h2' variant='h5'>
                    Title: {title}
                </Typography>
                <Typography component='h2' variant='h5'>
                    Airing: {String(airing)}
                </Typography>
                <Typography component='h2' variant='h5'>
                    Score: {score}
                </Typography>
                <Typography component='h2' variant='h5'>
                   Broadcast: {broadcast}
                </Typography>
                <Typography component='h2' variant='h5'>
                   Rainting: {rating}
                </Typography>
                <Typography component='h2' variant='h5'>
                   Episodes: {episodes}
                </Typography>
                <Typography component='h2' variant='h5'>
                   <a target='_blank' href={url}>My Anime List</a>
                </Typography>
            </Paper>
            </Grid>
        </Grid>
    )
}

export default SingleAnime
