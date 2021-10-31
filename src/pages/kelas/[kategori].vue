<script>
	import {definePageComponent, usePage} from 'iles'
	import {ambilKategori} from '~/ambilKategori'

	export default definePageComponent({
		getStaticPaths(){
			const semuaTulisan = Object.values(import.meta.globEagerDefault('../post/*.mdx'))
			const semuaKategori = ambilKategori(semuaTulisan)
			return semuaKategori.map(x => {
				return {
					params: {kategori: x},
					props: {semuaTulisan}
				}
			})
		}
	})
</script>

<script setup>
	import {usePage} from 'iles'
	const {kategori, semuaTulisan} = usePage().props._value
	const title = `Kelas ${kategori}`
	const description = `Yuk kita belajar ${kategori} dengan giat supaya bisa bermanfaat bagi semesta`
</script>

<template layout='default'>
	<Head>
		<title>{{title}}</title>
		<meta name="description" :content='description' />
		<meta property="og:locale" content="id_ID" />
		<meta property="og:type" content="article" />
		<meta property="og:title" :content='title' />
		<meta property="og:description" :content='description' />
		<meta property="og:image" :content='"https://cdn.statically.io/og/" + encodeURIComponent(title) + ".jpg"' />
		<meta property="og:image:width" content="2048" />
		<meta property="og:image:height" content="1170" />
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:title" :content='title' />
		<meta property="twitter:description" :content='description' />
		<meta property="twitter:image" :content='"https://cdn.statically.io/og/" + encodeURIComponent(title) + ".jpg"' />	
		<meta property="og:site_name" content="Belajar Pemrograman">
	</Head>

	<div class='header'>
		<a href="/">Belajar Pemrograman</a>
	</div>

	<div class='preview'>
		<div class='gambar' :style='"background-image: url(/ikon/" + kategori + ".jpg)"'></div>
		<div class='setelah-gambar'>
			<h1>{{kategori}}</h1>
			<h2>Yuk kita belajar {{kategori}}</h2>
		</div>
	</div>

	<div class='isi'>
		<div v-for='x in semuaTulisan.filter(x => x.kategori == kategori)'>
			<a class='card' :href='x.href'>
				{{x.judul}}
			</a>
		</div>
	</div>
</template>

<style scoped>
	.preview {
		@apply bg-gradient-60 text-white items-center flex p-10 <md:grid-cols-1;
	}
	.header a {
		@apply p-5 block hover:bg-gray-100 <md:text-center;
	}
	.setelah-gambar {
		@apply <md:hidden;
	}
	h1 {
		@apply text-5xl pb-5;
		/*font-family: 'Comic Sans MS';*/
	}
	h2 {
		@apply pb-10;
	}
	.isi {
		@apply grid grid-cols-4 gap-5 p-5 <md:grid-cols-1;
	}
	.isi .card {
		@apply bg-gradient-2 text-center px-5 py-10 block
	}
	.isi img {
		@apply block transform hover:rotate-6 <md:hover:rotate-0;
		transition: .5s;
	}
	.gambar {
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: cover;
		width: 200px;
		height: 200px;
		@apply rounded-[50%] <md:(block mx-auto) mr-10;
	}
</style>