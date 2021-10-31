import {defineConfig} from 'iles'

export default defineConfig({
	svelte: true,
	siteUrl: 'https://belajarpemrograman.my.id',
	markdown: {
		rehypePlugins: [
			['@mapbox/rehype-prism', { alias: { markup: ['html', 'vue'] } }],
		],
	},
})
