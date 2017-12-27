import io from 'socket.io-client'
import state, {updateState} from './state'

let socket = null;

let createSocket = function () {
    if (!socket) {
        socket = io(state.apiURL, {
            query: {
                token: state.token
            }
        });
        socket.on('message', updateState)
    }
}

export {createSocket}
