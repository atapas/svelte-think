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
	<span>Total number of posts: {count}</span>
	<button on:click={createPost}>Generate</button>
	
	<div class="posts">
		
	</div>
</div>


