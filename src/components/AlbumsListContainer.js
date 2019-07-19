import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect} from 'react-redux'
import { helloWorld } from '../actions/test'
import { addAlbum } from '../actions/addalbum'

class AlbumsListContainer extends React.Component {
    state = {}

    componentDidMount() {
        request('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                console.log(response)
                const { body } = response
                body.map(album => this.props.addAlbum(album.id, album.title))

                this.props.addAlbum(101, 'Enjoying sunshine')
                this.props.addAlbum(102, 'Having fun in the US')
            })
    }

    render() {
        if (!this.state.albums) return 'Loading...'
        console.log(this.state.albums)
        return <AlbumsList albums={this.state.albums} />
    }
}
const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}
export default connect(mapStateToProps, { addAlbum })(AlbumsListContainer)

