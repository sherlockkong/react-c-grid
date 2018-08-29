export const AppActionTypes = {
	DemoSelector: {
		SetDemos: "APP_DS_SET_DEMOS",
		SetSelected: "APP_DS_INIT",
	},
	Demo: {
		SetDemoMode: "APP_DM_SET_DEMO_MODE",
	},
}

export const AppActions = {
	DemoSelector: {
		SetDemos: (demos) => ({ type: AppActionTypes.DemoSelector.SetDemos, payload: demos }),
		SetSelected: (selected) => ({ type: AppActionTypes.DemoSelector.SetSelected, payload: selected }),
	},
	Demo: {
		SetDemoMode: (mode) => ({ type: AppActionTypes.Demo.SetDemoMode, payload: mode }),
	},
}