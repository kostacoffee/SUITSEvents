let state = {
    members: {},
    events: {},
    attendance: {}
};

export function updateState(data) {
    switch(data.resource) {
		case "Member": 
			updateState(state.members, data.action, data.data);
			break;

		case "Event": 
			updateState(state.events, data.action, data.data);
			break;

		case "Attendance":
			updateState(state.attendance, data.action, data.data);
			break;
	}
}

function updateResource(resource, action, data) {
    switch(action) {
		case "INSERT": 
			resource[data.id] = data.data;
			break;
		
		case "UPDATE":
			resource[data.id] = data.data;
			break;

		case "DELETE":
			delete state[resource][data.id];
			break;
	}
}

export default state;