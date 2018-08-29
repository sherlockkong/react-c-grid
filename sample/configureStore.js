import { app } from './store';
import { createStore } from 'redux';

export default function configureStore() {
	const store = createStore(app);
	return store;
}