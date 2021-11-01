<script setup>
	import '~/prism.css'
	import {usePage} from 'iles'

	const {judul, kategori} = usePage().frontmatter
	const {href, filename} = usePage().meta
	const title = judul
	const description = `Membahas '${judul}' di kelas ${kategori}`
	
	let semuaTulisan = Object.values(import.meta.globEagerDefault('../pages/post/*.mdx'))
	semuaTulisan = semuaTulisan.filter(x => x.kategori == kategori)
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

	<div class='latar'>
		<div class='materi'>
			<p><a href='/'>Kelas {{kategori}}</a></p>
			<ul>
				<li v-for='x in semuaTulisan'>
					<a :href='x.href' :class="x.href == href ? 'active' : ''">{{x.judul}}</a>
				</li>
			</ul>
		</div>

		<div class='kertas pertama'>
			<h1>{{judul}}</h1>
			<hr>
			<div class="isi-tulisan">
				<slot></slot>
			</div>

			<a class="edit" :href='"https://github.com/mzaini30/belajar-pemrograman/blob/master/" + filename'>Edit this page</a>

			<Komentar client:load></Komentar>

		</div>

		<div class='kertas lainnya'>
			<h2>Tulisan Lainnya:</h2>
			<hr>
			<ul>
				<li><a href="/">BERANDA</a></li>
				<li v-for='x in semuaTulisan'>
					<a :href='x.href' :class="x.href == href ? 'active-lainnya' : ''">{{x.judul}}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	.latar {
		@apply min-h-screen bg-blue-200 flex <md:block;
	}
	.kertas {
		@apply bg-white w-[50%] shadow-xl p-4 m-10 mx-auto <md:(w-[90%] my-0);
	}
	.pertama {
		@apply mb-[5vw];
	}
	.lainnya {
		@apply hidden <md:block;
	}
	.lainnya a {
		@apply <md:underline
	}
	.lainnya li {
		@apply <md:(list-disc ml-4 pb-2)
	}
	.materi {
		@apply w-[20%] bg-white sticky top-0 h-screen <md:hidden;
	}
	.materi a {
		@apply block p-2 hover:bg-violet-200 text-sm;
	}
	.materi p {
		@apply text-center border-b;
		/*font-family: 'Comic Sans MS';*/
	}
	.materi p a {
		@apply hover:bg-transparent p-3 text-lg text-green-700;
	}
	.active {
		@apply bg-violet-200
	}
	h1 {
		@apply text-3xl
	}
	hr {
		@apply my-3
	}
	.active-lainnya {
		@apply text-green-500
	}
	.edit {
		@apply px-3 py-1 bg-pink-100 text-pink-500 border border-pink-500 rounded-xl mb-2 inline-block
	}
</style>

<style>
	.isi-tulisan :where(h1, h2, h3, h4, h5, h6){
		@apply !mb-3
	}
	.isi-tulisan :where(img){
		@apply block mx-auto
	}
	.isi-tulisan :where(code){
		@apply text-red-500
	}
	.isi-tulisan :where(a){
		@apply !text-blue-500
	}
	.isi-tulisan :where(blockquote){
		@apply mx-0 italic
	}
	:where(table){
		@apply mb-3
	}
	:where(th, td) {
		@apply border border-blue-500 px-4 py-1
	}
	.isi-tulisan :where(h1, h2, h3, h4, h5, h6){
		font-weight: inherit;
	}
	.isi-tulisan :where(h2){
		@apply text-2xl text-violet-500
	}
	.isi-tulisan :where(h3){
		@apply text-xl text-green-700
	}
	.isi-tulisan :where(h4){
		@apply text-lg text-blue-500
	}
	.isi-tulisan :where(p, .embedPastebin){
		@apply !mb-3
	}
</style>