<template>
	<div class="sidebar">
		<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarsExampleDefault">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<!--router-link to="/" class="nav-link"-->
						<router-link :to="{ name: 'home' }" class="nav-link">
							Home
						</router-link>
					</li> 
					<li class="nav-item">
						<router-link :to="{ name: 'posts' }" class="nav-link">
							Articles
						</router-link>
					</li>
					<li class="nav-item">
						<router-link :to="{ name: 'about' }" class="nav-link">
							A propos
						</router-link>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
						<div class="dropdown-menu" aria-labelledby="dropdown01">
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<a class="dropdown-item" href="#">Something else here</a>
						</div>
		          	</li>
				</ul>
			</div>
		</nav> 

	</div>
</template>

<script>
export default {
	name: 'about',
	data () {
		return {
			
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>