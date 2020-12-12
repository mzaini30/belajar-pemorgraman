---
title: "Konversi Kode Svelte Ke Vanilla Js"
date: 2020-12-12T19:19:27+08:00
draft: true
description: Gila! 
tags:
  - frontend
---

> Cara baru dalam membuat website

Begitu kata para umatnya Svelte dalam mendefinisikan framework (ups, compiler) Javascript yang mereka kagumi. Aku juga sih. Kagum banget sama Svelte. Udah ngetiknya lebih sedikit, jadinya lebih kecil, ditambah lagi sama Routify yang membuat kita dalam membuat Single Page Apps itu serasa seperti membuat kumpulan file HTML biasa aja. Keren dah.

Nah, sekarang aku mau eksperimen mengkonversi kode-kode Svelte ke Vanilla JS atau Javascript murni tanpa magic-magic lain seperti Svelte. 

Kenapa memilih Svelte daripada Vue dan React? Tentu selain aku terbiasa menggunakan Svelte, [dokumentasinya](https://svelte.dev/tutorial/basics) juga ringkas dan langsung to the point. Maka, dengan kejelasan ini pun, aku bisa membuat bandingannya. Yah, moga aja tuntas deh postingan ini.

Oh iya, source code dari postingan ini, nanti aku publish ke [mzaini30/svelte-ke-vanilla](https://github.com/mzaini30/svelte-ke-vanilla).

## Persiapan

Untuk memudahkan dalam mengetik script, biar nggak terlalu banyak, buat file `tools.js` yang isinya:

```javascript
export function $(x){
	return document.querySelector(x)
}
```

## Basic

Kode Svelte:

```html
<h1>Hello world!</h1>
```

Kalau ini sih nggak perlu Javascript. Jadi, skip aja ya.

## Adding Data

Kode Svelte:

```html
<script>
	let name = 'world';
</script>

<h1>Hello {name.toUpperCase()}!</h1>
```

Vanilla JS:

```html
<script type="module">
	import {$} from './tools.js'
	$('name').innerText = 'world'.toUpperCase()
</script>

<h1>Hello <name></name>!</h1>
```