let idPlaylist = 4
let idMusic = 4

let allPlaylist = 
    [{
        "idPlaylist": 1,
        "name": "Rock",
        "tags": ["Heavy Metal"],
        "musics": [{
            "idMusic": 1,
            "album": "Somewhere in Time",
            "title": "Wasted Years", 
            "year": 1986,
            "member": ["Bruce Dickinson", "Adrian Smith", "Dave Murray", "Steve Harris", "Nicko McBrain"]
            }]
    },

    {
        "idPlaylist": 2,
        "name": "Rock Nacional",
        "tags": ["Nacional"],
        "musics": [{
            "idMusic": 2,
            "album": "Selvagem",
            "title": "Alagados", 
            "year": 1986,
            "member": ["Bi Ribeiro", "João Barone", "Herbert Vianna"]
        }]
    },

    {
        "idPlaylist": 3,
        "name": "Pagode",
        "tags": ["Meus Pagodes"],
        "musics": [{
            "idMusic": 3,
            "album": "Raça Negra",
            "title": "É tarde demais", 
            "year": 1995,
            "member": ["Luiz Carlos", "Elias Muniz"]

        }]
    }]

const playlistModel = {
    
    showAllPlaylists() {
        return allPlaylist
    },

    showPlaylist(idList) {
        const playlist = allPlaylist.filter(element => element.idPlaylist === +idList)
        return playlist
    },

    createPlaylist(name, tags, album, title, year, member) {
        
        let newPlaylistWithMusic = {
            "idPlaylist": idPlaylist,
            "name": name,
            "tags": tags,
            "musics": [
                {
                    "idMusic": idMusic,
                    "album": album,
                    "title": title,
                    "year": year,
                    "member": member
                }
            ]
        }

        let newPlaylistWithoutMusic = {
            "idPlaylist": idPlaylist,
            "name": name,
            "tags": tags,
            "musics": []
        }

        if(album === '' || title === '' || year === '' || member === '') {
            allPlaylist.push(newPlaylistWithoutMusic)
        } else {
            allPlaylist.push(newPlaylistWithMusic)
            idMusic++
        }
            
        idPlaylist++
    },

    createMusic(idList, album, title, year, member) {
        let playlistId = allPlaylist.findIndex(element => element.idPlaylist === +idList) 
        let music = allPlaylist[playlistId].musics

        const newMusic = {
            idMusic: idMusic,
            "album": album,
            "title": title,
            "year": year,
            "member": member
        }
        
        music.push(newMusic)
        idMusic++
    },

    updateNamePlaylist(idList, name) {
        const playlistId = allPlaylist.findIndex(element => element.idPlaylist === +idList)
        allPlaylist[playlistId].name = name
    },

    updateTagsPlaylist(idList, tag) {
        const playlistId = allPlaylist.findIndex(element => element.idPlaylist === +idList)
        allPlaylist[playlistId].tags.push(tag)
    },

    deletePlaylist(idList) {
        const playlistId = allPlaylist.findIndex(element => element.idPlaylist === +idList)
        allPlaylist.splice(playlistId, 1)
    },

    deleteMusic(idList, idMusic) {
        const playlistId = allPlaylist.findIndex(element => element.idPlaylist === +idList)
        const musicId = allPlaylist[playlistId].musics.findIndex(element => element.idMusic === +idMusic)
        allPlaylist[playlistId].musics.splice(musicId, 1)
    }
}

module.exports = playlistModel