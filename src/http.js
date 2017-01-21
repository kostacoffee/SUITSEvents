import axios from 'axios';
import config from './config';

let $http = axios.create({
	baseURL: config.apiURL
});

let addAuthHeader = function () {
	$http.defaults.headers.common['Authorization'] = "Bearer " + sessionStorage.getItem('token');
}

let response = async function(req) {
	//given an $http.<action>(blah) do all the boilerplate
	try {
		return (await req);
	}
	catch (e) {
		console.log(e);
		return null
	}
}

if (sessionStorage.getItem('token'))
	addAuthHeader();

export default {
	async auth(data) {
		let resp = await response($http.post('/token', data));
		if (resp == null)
			return null;
		sessionStorage.setItem('token', resp.data.token);
		addAuthHeader();
		return resp;
	},
	async addEvent(data) {
		return await response($http.post('/events', data));
	},
	async getEventList() {
		let resp = await response($http.get('/events'));
		if (resp == null)
			return null;
		let events = resp.data;
		let keyedEvents = {};

		for (let i = 0; i < events.length; i++)
			keyedEvents[events[i].id] = events[i];

		return keyedEvents;
	},
	async getEvent(id) {
		let resp = await response($http.get('/events/' + id));
		if (resp == null)
			return null;
		return resp.data;
	},
	async getMembers() {
		let resp = await response($http.get('/members'));
		if (resp == null)
			return null;
		let members = resp.data;
		let keyedMembers = {};
		for (let i = 0; i < members.length; i++)
			keyedMembers[members[i].id] = members[i];

		return keyedMembers;
	},
	async getEventAttendance(eventId, members) {
		/* attendance is normalised by providing a memberId instead of member data
			Use the keyed members object to provide references to member data. */

		let resp = await response($http.get('/events/'+eventId+'/attendance'));
		if (resp == null)
			return null;
		let attendance = resp.data;
		let expandedAttendance = {};
		for (let i = 0; i < attendance.length; i++) {
			expandedAttendance[attendance[i].memberId] = {
				id: attendance.id,
				member: members[attendance[i].memberId],
				data: attendance[i].data
			};
		}

		return expandedAttendance;
	},
	async addAttendance(eventId, memberId, data) {
		return await response($http.put('/events/'+eventId+'/attendance/'+memberId, data));
	},

	async addUnregMember(data) {
		let resp = await response($http.post('/members', data));
		if (resp == null)
			return null
		return resp.data.id;
	},

	async deleteAttendance(eventId, memId) {
		let resp = await response($http.delete('/events/'+eventId+'/attendance/'+memId));
		if (resp == null)
			return null;
		return resp;
	},

	async deleteEvent(eventId) {
		let resp = await response($http.delete('/events/'+eventId));

		if (resp == null)
			return null

		return resp;
	}

};

