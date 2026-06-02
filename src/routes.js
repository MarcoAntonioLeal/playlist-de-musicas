const express = require('express')
const router = express.Router()
const playlistController = require('./controllers/playlistController')

router.get('/', playlistController.showAllPlaylists)
router.get('/playlist/:id', playlistController.showPlaylist)

router.post('/playlist', playlistController.createPlaylist)
router.post('/playlist/:id/music', playlistController.createMusic)

router.put('/playlist/:id/name', playlistController.updateNamePlaylist)
router.put('/playlist/:id/tag', playlistController.updateTagsPlaylist)

router.delete('/playlist/:id', playlistController.deletePlaylist)
router.delete('/playlist/:id/music/:idMusic', playlistController.deleteMusic)

module.exports = router