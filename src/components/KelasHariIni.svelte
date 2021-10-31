<script>
	export let semuaKategori

	// const tanggal = new Date().setHours(0,0,0,0) / (10 ** 5)
	const tanggal = new Date().getDate()
	const bagi = tanggal % semuaKategori.length
	const kelasHariIni = semuaKategori[bagi]
</script>

<p class="info">
	<strong>Kelas hari ini:</strong> <a href='/kelas/{kelasHariIni}'>Kelas {kelasHariIni}</a>
</p>

<style>
	.info {
		@apply px-3 bg-green-500 py-1 mb-5
	}
	.info a {
		@apply underline
	}
</style>