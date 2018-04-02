<template>
  <div class="post">
  	<div class="container">
  		<h1>Tous les posts</h1>
		<div class="row">
			<div v-for="post in posts" class="col-md-4">
				<div class="card mb-4 box-shadow">
					<div class="card-body">
						<h2>
							{{ post.title }}
						</h2>
						<p class="card-text">
							{{ post.body }}
						</p>
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<router-link :to="{ name: 'posts-id', params: { id: post.id } }"  class="btn btn-sm btn-outline-secondary">
									View
								</router-link>
							</div>
						</div>
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
		name: 'posts',
		data () {
			return {
				posts:null	
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
				axios.get('https://jsonplaceholder.typicode.com/posts')
				.then((resp) => {
					//console.log(resp.data)
					this.posts = resp.data
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