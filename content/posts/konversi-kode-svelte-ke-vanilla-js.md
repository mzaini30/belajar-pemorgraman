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

## Dynamic Attributes

Svelte:

```html
<script>
	let src = 'tutorial/image.gif';
	let name = 'Rick Astley';
</script>

<img {src} alt="{name} dances.">
```

Vanilla JS:

```html
<script type="module">
	import {$} from './tools.js'
	$('.gambar').setAttribute('src', 'https://svelte.dev/tutorial/image.gif')
	$('.gambar').setAttribute('alt', 'Rick Astley dances')
</script>

<img class="gambar">
```

## Styling

Svelte:

```html
<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>

<p>This is a paragraph.</p>
```

Kalau ini skip aja ya, soalnya nggak ada pakai Javascript. Oke, lanjut.

## Nested Components

Svelte:

`App.svelte`

```html
<script>
	import Nested from './Nested.svelte';
</script>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>

<p>This is a paragraph.</p>
<Nested/>
```

`Nested.svelte`

```html
<p>This is another paragraph.</p>
```

## HTML Tags

Svelte:

```html
<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<p>{@html string}</p>
```

Vanilla JS:

```html
<script type="module">
	import {$} from './tools.js'
	let string = `this string contains some <strong>HTML!!!</strong>`;
	$('string').innerHTML = string
</script>

<p><string></string></p>
```

## Assignments

Svelte:

```html
<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

Vanilla JS:

```html
<script type="module">
	import {$} from './tools.js'
	let count = 0;

	function handleClick() {
		count += 1;
		let teks = 'time'
		if (count > 1) {
			teks = 'times'
		}
		$('banyak').innerText = `${count} ${teks}`
	}
	$('.handleClick').addEventListener('click', handleClick)
</script>

<button class="handleClick">
	Clicked <banyak>0 times</banyak>
</button>
```

## Declarations

Svelte:

```html
<script>
	let count = 0;
	$: doubled = count * 2;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
```

Vanilla JS:

