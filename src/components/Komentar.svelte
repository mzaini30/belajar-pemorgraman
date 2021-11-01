<script>
	import axios from 'axios'
	const {post} = axios
	import {stringify} from 'qs'
	import {headers} from 'zen-headers'
	import {komentar as apiKomentar, sql} from '~/api'
	 
	const browser = !import.meta.env.SSR

	// const headers = {
	// 	'Content-Type': 'application/x-www-form-urlencoded'
	// }

	let semuaKomentar
	let nama
	let link 
	let komentar

	// JSON.stringify(location.pathname)

	/*
	ambil
	select * from [db] where slug = [slug] order by id desc

	kirim
	insert into [db] (nama, link, komentar, slug) values ([nama], [link], [komentar], [slug])
	*/

	if (browser) {
		if (localStorage.nama && localStorage.link) {
			nama = localStorage.nama
			link = localStorage.link 
		}
	}

	async function ambilData(){
		if (browser) {
			const {data} = await post(sql, stringify({
				id: apiKomentar,
				kunci: 'ambil',
				slug: location.pathname
			}), {headers})
			semuaKomentar = data
		}
	}
	ambilData()

	async function kirim(){
		if (browser) {
			const proses = await post(sql, stringify({
				id: apiKomentar,
				kunci: 'kirim',
				nama,
				link,
				komentar,
				slug: location.pathname
			}), {headers})
			if (proses) {
				localStorage.nama = nama
				localStorage.link = link
				alert('Komentar berhasil ditambahkan.')
				komentar = ''
				ambilData()
			}
		}
	}
</script>

<div class="komentar">
	<p class="judul">Yuk Berkomentar...</p>

	<form on:submit|preventDefault={kirim}>
		<label>Nama</label>
		<input bind:value={nama} class="input" required type="text">

		<label>Link Blog</label>
		<input type="url" bind:value={link} class="input" required>
		
		<label class="block">Komentar</label>
		<textarea required name="" id="" bind:value={komentar} cols="30" class="input" rows="10"></textarea>
		
		<input value="Kirim Komentar" class="submit" type="submit" >
	</form>

	{#if semuaKomentar}
		<div class="semua">
			<p class="judul">Semua Komentar...</p>

			<ol>
				{#each semuaKomentar as x}
					<li>
						<a rel="nofollow" href={x.link}>{x.nama}</a>
						<p>{x.komentar}</p>
					</li>
				{/each}
			</ol>
		</div>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

	.komentar .semua {
		@apply pb-3
	}

	.komentar textarea {
		@apply block
	}

	.komentar .judul {
		@apply text-3xl italic mt-3 mb-2;
		font-family: 'Dancing Script', cursive;
	}

	.komentar .input {
		@apply focus:outline-none rounded border border-yellow-700 w-full p-1 px-2;
	}

	.komentar .submit {
		@apply my-3 bg-green-500 rounded px-3 py-1 text-white cursor-pointer
	}

	.komentar li {
		@apply list-decimal ml-5
	}

	.komentar a {
		@apply text-green-700
	}
</style>