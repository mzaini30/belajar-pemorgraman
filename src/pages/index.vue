<script setup>
	// 230
	import {ambilKategori} from '~/ambilKategori'

	const semuaTulisan = Object.values(import.meta.globEagerDefault('./post/*.mdx'))
	const semuaKategori = ambilKategori(semuaTulisan)

	import Astro from '~/icons/Astro.jpg?w=230&webp'
	import Blogspot from '~/icons/Blogspot.jpg?w=230&webp'
	import Git from '~/icons/Git.jpg?w=230&webp'
	import Iles from '~/icons/Iles.jpg?w=230&webp'
	import JavaScript from '~/icons/JavaScript.jpg?w=230&webp'
	import Linux from '~/icons/Linux.jpg?w=230&webp'
	import Termux from '~/icons/Termux.jpg?w=230&webp'
	import Windi from '~/icons/Windi.jpg?w=230&webp'
	import Lua from '~/icons/Lua.png?w=230&webp'
	import Sublime from '~/icons/Sublime.png?w=230&webp'
</script>

<template layout="default" title='Belajar Pemrograman' description='Kamu bisa belajar pemrograman di manapun asalkan numpang wifi'>
	<Head>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Festive&display=swap" rel="stylesheet">
	</Head>

	<div class='body'>
		<h1>Belajar Pemrograman</h1>
		<h2>"Kamu bisa belajar pemrograman di manapun asalkan numpang wifi" (Zen, 2021)</h2>
		<JumlahPeserta client:load/>

		<KelasHariIni :semuaKategori='semuaKategori' client:load></KelasHariIni>

		<IklanKecil client:none/>

		<div class='list-kelas'>
			<a v-for='x in semuaKategori' :href='"/kelas/" + x'>

				<img :src='Astro' v-if='x == "Astro"' :alt='"Kelas " + x'>
				<img :src='Blogspot' v-if='x == "Blogspot"' :alt='"Kelas " + x'>
				<img :src='Git' v-if='x == "Git"' :alt='"Kelas " + x'>
				<img :src='Iles' v-if='x == "Iles"' :alt='"Kelas " + x'>
				<img :src='JavaScript' v-if='x == "JavaScript"' :alt='"Kelas " + x'>
				<img :src='Linux' v-if='x == "Linux"' :alt='"Kelas " + x'>
				<img :src='Termux' v-if='x == "Termux"' :alt='"Kelas " + x'>
				<img :src='Windi' v-if='x == "Windi"' :alt='"Kelas " + x'>
				<img :src='Lua' v-if='x == "Lua"' :alt='"Kelas " + x'>
				<img :src='Sublime' v-if='x == "Sublime"' :alt='"Kelas " + x'>
				
				<p>Kelas {{x}}</p>
			</a>
		</div>
		<IklanKotak client:none/>
	</div>
</template>

<style scoped>
	.body {
		/*background: #202124;*/
		/*color: #bdc1c6;*/
		@apply min-h-screen bg-gradient-60 text-white <md:(bg-gradient-37) pb-5
	}
	.list-kelas {
		@apply grid grid-cols-10 gap-3 <md:grid-cols-3;
	}
	.list-kelas a {
		@apply rounded bg-blue-300/50 overflow-hidden
	}
	.list-kelas p {
		@apply text-center px-2 py-2
	}
	h1 {
		font-size: 100px;
		font-family: 'Festive', cursive;
		@apply text-center <md:(text-[70px] pt-5);
	}
	h2 {
		@apply text-center pb-2 px-1;
		font-family: 'Times New Roman';
	}
</style>
