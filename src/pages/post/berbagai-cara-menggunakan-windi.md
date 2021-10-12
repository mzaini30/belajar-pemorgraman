---
layout: ./__layout.astro
judul: Berbagai Cara Menggunakan Windi
kategori: Windi
tanggal: 2021-10-12
---

Windi adalah superset Tailwind di mana Tailwind merupakan superset dari CSS.

Jikalau di CSS kita menuliskan seperti ini:

```css
.gambar {
	padding-left: 4rem;
	padding-right: 4rem;
	padding-top: 2rem;
	padding-botton: 2rem;
	text-align: center;
}
```

Maka, kalau di Windi, kita menuliskannya seperti ini:

```css
.gambar {
	@apply px-8 py-4 text-center;
}
```

Tapi, menggunakan Windi ini nggak bisa langsung dipanggil seperti kita menggunakan pure CSS, melainkan harus disetup dulu supaya nanti tercompile otomatis saat menggunakan Windi, menjadi CSS biasa.

> Baca juga: [Menggunakan Windi di Astro](/post/menggunakan-windi-di-astro)

> Baca juga: [Instalasi Windi di Berbagai Framework JS dan Berbagai Build Tools](https://windicss.org/guide/installation.html)

Windi ini bisa dikombinasikan dengan CSS biasa:

```css
.nama {
	@apply text-right text-red-500;
	background: url("kucing.jpg");
}
```

Nah sekarang, untuk memanggil Windi itu sama seperti kita memanggil CSS biasa.

Yang pertama, itu kita panggil dari file eksternal:

```html
<script>
	import "./style.css"
</script>
```

Cara itu kita gunakan jika untuk satu file Windi digunakan pada banyak file markup, seperti ini:

```
.
|-- style.css
|-- index.astro
|-- about.astro
```

Cara yang kedua adalah dengan menggunakan tag style:

```astro
<h1>Hello World</h1>

<style>
	h1 {
		@apply text-center bg-violet-200 text-red-600
	}
</style>
```

