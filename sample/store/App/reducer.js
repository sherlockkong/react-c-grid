import { AppActionTypes, AppActions } from './actions';
import update from "immutability-helper";

let defaultState = {
	demoSelector: {
		demos: [],
	},
	demo: {
		mode: 'GRID', // 'GRID' || 'CODE'
	},
}

export const app = (state = defaultState, action) => {
	const { DemoSelector, Demo } = AppActionTypes;

	switch (action.type) {
		case DemoSelector.SetDemos:
			return update(state, { demoSelector: { demos: { $set: action.payload } } });

		case Demo.SetDemoMode:
			return update(state, { demo: { mode: { $set: action.payload } } });

		default: return state;
	}
}