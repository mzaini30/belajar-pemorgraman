<script>
	import redaxios from 'redaxios'
	const {post} = redaxios
	import {stringify} from 'qs'
	import {headers} from 'zen-headers'
	import {komentar, sql} from './_api'

	let jumlahPeserta = 0

	async function ambilData(){
		const {data} = await post(sql, stringify({
			id: komentar,
			kunci: 'banyak'
		}), {headers})
		jumlahPeserta = data[0].banyak
	}
	ambilData()
</script>

<h2 class="jumlah-peserta"><a href="/peserta">{jumlahPeserta} peserta</a> <em>belajar pemrograman</em></h2>