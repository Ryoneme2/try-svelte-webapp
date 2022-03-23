import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		someProps: "hello"
	}
});

export default app;