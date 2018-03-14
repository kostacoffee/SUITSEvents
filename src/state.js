let state = {
    members: [],
    events: [],
	attendance: [],
	apiURL: 'https://api.suits.org.au',
	token: sessionStorage.getItem('token'),
	dialogs: {
		newEvent: false,
		deleteEvent: {
			open: false,
			selectedEvent: null
		}
	},
	selectedMember: null
};

export function updateState(data) {
    switch(data.resource) {
		case "Member": 
			updateResource("members", data.action, data.data);
			break;

		case "Event": 
			updateResource("events", data.action, data.data);
			break;

		case "Attendance":
			updateResource("attendance", data.action, data.data);
			break;
	}
}

function updateResource(resource, action, data) {
	console.log(resource, action, data);
    switch(action) {
		case "INSERT": 
			state[resource] = [data, ...state[resource]]
			break;
		
		case "UPDATE":
			let i = state[resource].findIndex(r => r.id == data.id)
			state[resource].splice(i, 1, data)
			break;

		case "DELETE":
			i = state[resource].findIndex(r => r.id == data.id)
			state[resource].splice(i, 1)
			break;
	}
	if (resource == "event") {
		state[resource].sort((a,b) => b.time - a.time)
	}
}

export default state;
