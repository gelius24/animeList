import React from 'react'
import AnimeCard from './AnimeCard'
import {GridList} from '@material-ui/core'

function AnimeList(props) {
    return (
        <GridList>
            {props.data.map((anime) => (
                <AnimeCard anime={anime} key={anime.mal_id} />
            ))}
        </GridList>
    )
}

export default AnimeList
