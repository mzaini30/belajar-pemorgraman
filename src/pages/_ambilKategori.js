export function ambilKategori(semua){
	let semuaKategori = []
	for (let x of semua){
		semuaKategori = [...semuaKategori, x.kategori]
	}
	semuaKategori = [...new Set(semuaKategori)]
	return semuaKategori.sort()
}