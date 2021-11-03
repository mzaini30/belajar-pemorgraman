<script setup>
	import 'virtual:windi.css'
	import {usePage} from 'iles'
	import {useHead} from '@vueuse/head'

	const {title, description} = usePage().frontmatter
	/*
	useHead({
		script: [
			{
				src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2408628281705149",
				crossorigin: 'anonymous',
				async: true
			}
		]
	})
	*/
</script>

<template>
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

     	<link rel="icon" href="https://image.freepik.com/free-vector/young-man-head-with-beard-avatar-character_24877-36786.jpg">
	</Head>

	<slot></slot>
</template>

<style>
	.kotak {
		@apply px-4 py-10
	}
</style>
