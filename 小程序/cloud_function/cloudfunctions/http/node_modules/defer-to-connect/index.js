'use strict';

// Inspired by https://github.com/nodejs/node/blob/949e8851484c016c07f6cc9e5889f0f2e56baf2a/lib/_http_client.js#L706
module.exports = (socket, method, ...args) => {
	let call;
	if (typeof method === 'function') {
		call = method;
	} else {
		call = () => socket[method](...args);
	}

	if (socket.writable && !socket.connecting) {
		call();
	} else {
		socket.once('connect', call);
	}
};
