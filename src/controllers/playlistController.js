const playlistModel = require('../models/playlistModel')

const playlistController = {
    
    //get /
    showAllPlaylists(req, res) {
        const allPlaylists = playlistModel.showAllPlaylists()

        if(allPlaylists.length === 0) {
            res.status(404).json('No momento você não tem nenhuma playlist criada')
        } else {
            res.json(allPlaylists)
        }
    },

    //get /playlist/:id
    showPlaylist(req, res) {
        const {id} = req.params
        const playlist = playlistModel.showPlaylist(id)

        if(playlist.length === 0) {
            res.status(404).json('Essa playlist não existe')
        } else {
            res.json(playlist)
        }
    },

    //post /playlist
    createPlaylist(req, res) {
        const {name, tags, musics:[{album, title, year, member}]} = req.body
        const validationTypeString = [name, ...tags, album, title, ...member]

        if(typeof year !== 'number' || validationTypeString.some(value => typeof value !== 'string')) {
            res.status(400).json('Dados inválidos')
        } else {
            const newPlaylist = playlistModel.createPlaylist(name, tags, album, title, year, member)
            res.status(201).json(newPlaylist)
        }
    },

    //post /playlist/:id/music
    createMusic(req, res) {
        const idList = req.params.id
        const {album, title, year, member} = req.body
        
        const validationTypeString = [album, title, ...member]

        if(typeof year !== 'number' || validationTypeString.some(value => typeof value !== 'string')) {
            res.status(400).json('Dados inválidos')
        } else {
            const newMusic = playlistModel.createMusic(idList, album, title, year, member)
            res.status(201).json(newMusic)
        }
    },

    //put /playlist/:id/name
    updateNamePlaylist(req, res) {
        const {id} = req.params
        const {name} = req.body

        if(typeof name !== 'string') {
            res.status(400).json('Dados inválidos')
        } else {
            res.json(playlistModel.updateNamePlaylist(id, name))
        }
    },

    //put /playlist/:id/tag
    updateTagsPlaylist(req, res) {
        const {id} = req.params
        const {tag} = req.body

        if(typeof tag !== 'string') {
            res.status(400).json('Dados inválidos')
        } else {
            res.json(playlistModel.updateTagsPlaylist(id, tag))
        }
    },

    //delete /playlist/:id
    deletePlaylist(req, res) {
        const idList = req.params.id
        res.status(204).json(playlistModel.deletePlaylist(idList))
    },

    //delete /playlist/:id/music
    deleteMusic(req, res) {
        const {id, idMusic} = req.params
        res.status(204).json(playlistModel.deleteMusic(id, idMusic))
    }
}

module.exports = playlistController