import io from 'socket.io-client'
import config from './config'
import state, {updateState} from './state'

let socket = null;

let createSocket = function (token) {
	socket = io(config.apiURL, {
		transportOptions: {
			polling: {
				extraHeaders: {
					'Authorization': `Beader ${token}`
				}
			}
		}
	});
	socket.on('message', updateState)
}

export {createSocket}
