<script>
	import axios from 'axios'
	const {post} = axios
	import {stringify} from 'qs'
	import {headers} from 'zen-headers'
	import {komentar, sql} from '~/api'

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

<style>
	.jumlah-peserta {
		@apply text-center pb-2 px-1;
		font-family: 'Times New Roman';
	}
	.jumlah-peserta a {
		@apply underline
	}
</style>