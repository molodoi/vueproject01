<template>
  <div class="post">
    

    <div class="container">
  		<h1>Post {{ $route.params.id }}</h1>
		<div class="row">
			<div class="col-md-12">
				<div class="card mb-4 box-shadow">
					<div class="card-body">
						<h2>
							{{ post.title }}
						</h2>
						<p class="card-text">
							{{ post.body }}
						</p>
					</div>
				</div>
			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'single-post',
		data () {
			return {
				post: {}	
			}
		},
		created() {
			this.fetchData()
		},

		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				axios.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
				.then((resp) => {
					console.log(resp.data)
					this.post = resp.data
				}).catch((err) => {
					console.log(err)
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>