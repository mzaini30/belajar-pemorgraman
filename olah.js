import recursive from 'recursive-readdir-sync'
import { readFileSync, writeFileSync } from 'fs'

let semuaHalaman = recursive('./public')
semuaHalaman = semuaHalaman.filter(x => x.match(/\.html$/))

for (let x of semuaHalaman) {
	const linknya = x.replace(/^public\//, '')

	let isi = readFileSync(x).toString()
	if (!isi.includes('<meta property="og:title" content=') && isi.includes('<meta property="twitter:title" content=') && !x.includes('/layouts/')) {

		// tambahkan og:title
		let baru = isi.replace(/<meta property="twitter:title" content="([\S\s]*?)">/, function(x, a){
			let konten = a.trim()
			return `<meta property="twitter:title" content="${konten}"><meta property="og:title" content="${konten}">`
		})

		// tambahkan canonical dan og:url
		baru = baru.replace('</head>', `<link rel="canonical" href="https://mainkode.my.id/${linknya}" /><meta property="og:url" content="http://mainkode.my.id/${linknya}" /></head>`)

		writeFileSync(x, baru)
	}
}