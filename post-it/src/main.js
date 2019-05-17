import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		greeting: 'This is a Component!',
		src: 'logo.png'
	}
});

export default app;