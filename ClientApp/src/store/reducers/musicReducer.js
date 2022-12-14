import { actionTypes } from '../actions/actionTypes';

const initState = {
    curSongId: null,
    isPlaying: false,
    recentSong: [],
    commentSongId: null,
    curPlaylist: [],
    nextUpSong: [],
    prevSong: [],
    deleteSongId: null,
    editSongId: null,
    deletePlaylistId: null,
    editPlaylistId: null,
    playlistSong: []
};

//TODOS
const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_NEXTUP:
            return {
                ...state,
                nextUpSong: action.data
            }
        case actionTypes.SET_PREV:
            return {
                ...state,
                prevSong: action.data
            }
        case actionTypes.SET_CUR_SONG_ID:
            return {
                ...state,
                curSongId: action.sid,
            };
        case actionTypes.PLAY:
            return {
                ...state,
                isPlaying: action.play,
            };
        case actionTypes.SET_RECENT:
            return {
                ...state,
            };
        case actionTypes.SET_COMMENT_SONG_ID:
            return {
                ...state,
                commentSongId: action.id,
            };
        case actionTypes.DELETE_SONG_ID:
            return {
                ...state,
                deleteSongId: action.id,
            };
        case actionTypes.DELETE_PLAYLIST_ID:
            return {
                ...state,
                deletePlaylistId: action.id,
            };

        case actionTypes.SET_CURPLAYLIST:
            return {
                ...state,
                curPlaylist: action.data,
            };

        case actionTypes.ADD_PLAYLIST:
            return {
                ...state,
                curPlaylist: [...state.curPlaylist, action.data],
            };
        case actionTypes.ADD_TO_NEXTUP:
            let indexOfSongUp = -1;
            state.nextUpSong.forEach((item, index) => {
                if (item.id == action.data.id) {
                    indexOfSongUp = index;
                }
            });

            indexOfSongUp != -1 && state.nextUpSong.splice(indexOfSongUp, 1);
            if (action.data.id == state.curSongId) {
                return state;
            }
           state.nextUpSong =  state.nextUpSong.filter(item => typeof(item) != 'undefined')
            return {
                ...state,
                nextUpSong: [action.data, ...state.nextUpSong],
            };

        case actionTypes.ADD_TO_PREV:
            let indexOfSongPrev = -1;
            state.prevSong.forEach((item, index) => {
                if (item == action.data) {
                    indexOfSongPrev = index;
                }
            });
            indexOfSongPrev != -1 && state.prevSong.splice(indexOfSongPrev, 1);
           state.prevSong =  state.prevSong.filter(item => typeof(item) != 'undefined')

            return {
                ...state,
                prevSong: [action.data, ...state.prevSong],
            };
        case actionTypes.REMOVE_FROM_PREV:
            return {
                ...state,
                prevSong: state.prevSong.filter((item) => item != action.data).filter(item => typeof(item) != 'undefined'),
            };
        case actionTypes.REMOVE_FROM_NEXT_UP:
            return {
                ...state,
                nextUpSong: state.nextUpSong.filter((item) => item.id != action.data).filter(item => typeof(item) != 'undefined'),
            };
        case actionTypes.EDIT_SONG_ID:
            return {
                ...state,
                editSongId: action.id
            }
        case actionTypes.EDIT_PLAYLIST_ID:
            return {
                ...state,
                editPlaylistId: action.id
            }
        // case actionTypes.SET_PLAYLIST_SONG:
        //     return {
        //         ...state,
        //         playlistSong: action
        //     }
        default:
            return state;
    }
};
export default musicReducer;
