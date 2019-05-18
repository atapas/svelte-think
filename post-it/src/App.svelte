<script>
	import Post from './Post.svelte';
	
	let count = 0;
	function createPost() {
		console.log('Create post');
		let post = new Post({
			target: document.querySelector('.posts')
		});
		count += 1;
	}
</script>

<style>
	
</style>


<div>
	<h1> Thought Quotes({count})! </h1>
	<button on:click={createPost}>Get a New One!</button>
	
	<div class="posts">
		
	</div>
</div>


