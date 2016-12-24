import io from 'socket.io-client'
import config from './config'

let socket = null;

let createSocket = function (token) {
	socket = io(config.apiURL, {
		query: {token: token}
	});
}

export {socket, createSocket}
