<script>
	const browser = !import.meta.env.SSR
	const api = 'adef2df9c083a6f7327bcc1a7247e8d0' // id, nama, link, komentar, slug

	// JSON.stringify(location.pathname)

	/*
	ambil
	select * from [db] where slug = [slug] order by id desc

	kirim
	insert into [db] (nama, link, komentar, slug) values ([nama], [link], [komentar], [slug])
	*/
</script>

<div class="komentar">
	<p class="judul">Yuk Berkomentar...</p>
	<form action="">
		<label>Nama</label>
		<input class="input" required type="text">
		<label>Link Blog</label>
		<input type="text" class="input" required>
		<label class="block">Komentar</label>
		<textarea required name="" id="" cols="30" class="input" rows="10"></textarea>
		<input value="Kirim Komentar" class="submit" type="submit" >
	</form>

	<p class="judul">Semua Komentar...</p>

	<ol>
		{#each Array(2) as x}
			<li>
				<a rel="nofollow" href="/">Kucing Garong</a>
				<p>halo</p>
			</li>
		{/each}
	</ol>
</div>
