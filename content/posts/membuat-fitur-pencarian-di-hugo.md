---
title: "Membuat Fitur Pencarian Di Hugo"
date: 2020-12-09T21:52:15Z
draft: true
description: Fitur pencarian di HTML statis
tags:
  - hugo
---

Menu pencarian di suatu blog adalah fitur yang sangat penting. Karena, fitur pencarian akan membuat pengunjung akan betah di blog kita, nggak lari ke mana-mana. Soalnya kan kalau bisa dicari di blog ini, buat apa dicari di tempat lain kan ya? Apalagi kalau blog kita itu laju, nggak pakai loading. Bisa karena kita menerapkan Single Page Application atau menggunakan Turbolinks untuk Multiple Page Application seperti di blog ini.

Nah, sekarang kita akan membuat fitur pencarian di Hugo. Hugo adalah salah satu Static Site Generator yang cukup terkenal selain Jekyll. Yang membuat Hugo terkenal adalah karena dibuat dengan bahasa pemrograman Go yang laju sehingga compile halaman Markdown menjadi HTML pun lebih cepat. Juga, Hugo mendukung Fast Render yang mirip kayak Hot Module Reload di bundler. Sehingga, tidak perlu meng-compile semua halaman untuk mendapatkan update HTML dari Markdown yang sedang kita edit. Jadi, cuma file-file tertentu saja yang di-update di sisi server Hugo.

## Logika Program

Logika dalam membuat fitur pencarian ini adalah seperti ini:

1. Kumpulkan semua postingan (judul, isi, link) dalam satu file JSON (situs.com/posts/index.json)
2. Buat satu halaman untuk pencarian (situs.com/cari)
3. Di halaman pencarian itu, kita buat program untuk mendapatkan file JSON lalu mecocokkannya sesuai dengan kata kunci yang kita cari

Sekarang kita mulai buat programnya.

## Mulai Coding

Pertama, kita setting dulu di `config.toml` untuk mengaktifkan templating di JSON:

```toml
[outputs]
  section = ["html", "rss", "json"]
```

Kemudian, kita buat template JSON di `layouts/_default/list.json.json` yang isinya:

```tpl
[
    {{ range $index, $e := .Data.Pages }}
     {{ if $index }}, {{ end }}
     {
        "judul": {{ .Title | jsonify }},
        "isi": {{ .Plain | jsonify }},
        "link" : {{ .Permalink | jsonify }}
     }
    {{ end }}
]
```

Jadinya:

```json
[
    
     
     {
        "judul": "Cari",
        "isi": "  .cari { width: 100%; padding: .5rem; box-sizing: border-box; }    Halo Halo Halo --    document.querySelector(\".formCari\").addEventListener(\"submit\", (x) = { x.preventDefault() async function mulaiCari(){ let hasil = await fetch('/posts/index.json').then(x = x.json()) hasil = await hasil let yangDicari = document.querySelector('.cari').value.toLowerCase() hasil.map(x = { x.judulKecil = x.judul.toLowerCase() x.isiKecil = x.isi.toLowerCase() }) hasil = hasil.sort((x, y) = x.judul  y.judul) let ketemu = [] for (let y of hasil){ if (y.judulKecil.includes(yangDicari) || y.isiKecil.includes(yangDicari)) { ketemu = [...ketemu, y] } } if (ketemu.length  0) { document.querySelector('.hasil ol').innerHTML = ketemu.map(x = `${x.judul}`).join('') } else { document.querySelector('.hasil ol').innerHTML = ` Nggak Ketemu ` } } mulaiCari() })  ",
        "link" : "http://localhost:1313/cari/"
     }
    
     , 
     {
        "judul": "Mengapa Perlu Membuat Blog Khusus Pemrograman",
        "isi": "",
        "link" : "http://localhost:1313/mengapa-perlu-membuat-blog-khusus-pemrograman/"
     }
    
     , 
     {
        "judul": "Tentang Penulis",
        "isi": "Penulis blog ini adalah Zen yang merupakan seorang mahasiswa Psikologi angkatan 2015 di Universitas Mulawarman. Dan lulus pada tahun 2020 dengan nilai lumayan lah walaupun nggak bisa sempurna. Soalnya menurutku, nilai yang baik itu harus yang sempurna, tanpa satupun kesalahan.\nBlog ini aku dedikasikan untuk membagikan pengetahuan seputar pemrograman, mulai dari yang paling sederhana hingga yang tingkat rumit. Jadi, aku nggak khusus membahas yang sederhana semua atau yang rumit semua. Ya tergantung mood lah pengen nulis tentang apa.\nDarimana aku belajar tentang pemrograman? Diawali dari kesukaanku akan segala hal yang berbau hacking pada waktu SMP, juga karena diajari cara membuat blog di Blogspot oleh Ustadz Reza. Maka, aku pun mulai tertarik dengan dunia pemrograman. Waktu itu aku sering beli buku-buku Jasakom, terutama yang ngoprek Windows dan tentang jaringan. Dua topik itu sekarang sudah jarang banget sih aku gali karena aku sekarang pakai Linux dan nggak main tentang jaringan lagi.\n",
        "link" : "http://localhost:1313/tentang-penulis/"
     }
    
     , 
     {
        "judul": "Sikap Yang Sebaiknya Dimiliki Programmer",
        "isi": "Pantang Menyerah Nggak Mudah Mengeluh Tetap Diam Selalu Update Pengetahuan ",
        "link" : "http://localhost:1313/sikap-yang-sebaiknya-dimiliki-programmer/"
     }
    
]
```

Kemudian kita buat shortcode supaya bisa menyisipkan HTML di dalam postingan. Nah, tuliskan kode berikut di `layouts/shortcodes/html.html`:

```tpl
{{ .Inner }}
```

Baru kita buat postingan baru dengan perintah:

```bash
hugo new posts/cari.md
```

Maka akan terbentuk `content/posts/cari.md`. Nah, kemudian kita edit dan diisi dengan:

```html
---
title: "Cari"
date: 2020-12-09T09:38:59Z
draft: false
description: Cari apa? 
tags:
  - 
---

{{<html>}}{{&lt;html&gt;}}{{</html>}}
 <style>
  .cari {
   width: 100%;
   padding: .5rem;
   box-sizing: border-box;
  }
 </style>
 <form class="formCari">
  <input class="cari" placeholder="Cari apa?" required>
 </form>
 <div class="hasil">
  <ol>
   <!--
   <li><a href="/">Halo</a></li>
   <li><a href="/">Halo</a></li>
   <li><a href="/">Halo</a></li>
   -->
  </ol>
 </div>
 <script>
  document.querySelector(".formCari").addEventListener("submit", (x) => {
   x.preventDefault()
   async function mulaiCari(){
    let hasil = await fetch('/posts/index.json').then(x => x.json())
    hasil = await hasil
    let yangDicari = document.querySelector('.cari').value.toLowerCase()
    hasil.map(x => {
      x.judulKecil = x.judul.toLowerCase()
      x.isiKecil = x.isi.toLowerCase()
    })
    hasil = hasil.sort((x, y) => x.judul > y.judul)
    let ketemu = []
    for (let y of hasil){
      if (y.judulKecil.includes(yangDicari) || y.isiKecil.includes(yangDicari)) {
        ketemu = [...ketemu, y]
      }
    }
    if (ketemu.length > 0) {
      document.querySelector('.hasil ol').innerHTML = ketemu.map(x => `<li><a href='${x.link}'>${x.judul}</a></li>`).join('')
    } else {
      document.querySelector('.hasil ol').innerHTML = `
        <li><a href='/cari'>Nggak Ketemu</a></li>
      `
    }
   }
   mulaiCari()
  })
 </script>
{{<html>}}{{&lt;/html&gt;}}{{</html>}}
```

Pada script di atas, aku menggunakan sedikit teknik JavaScript untuk mempermudah aku mengaplikasikan logika yang telah kususun sebelumnya. Di situ, aku nggak menggunakan framework JavaScript seperti Vue dan Angular JS, library JavaScript seperti React dan Alpine JS, juga nggak menggunakan compiler JavaScript seperti Svelte.

Kenapa sih aku mesti repot-repot menggunakan Vanilla JS dibandingkan menggunakan framework JavaScript yang sudah terkenal? Ya karena mau sederhana aja sih. Nggak ribet-ribet fungsinya. Cuma untuk mendapatkan data JSON, mengolahnya, lalu menampilkannya. Nah, sekarang coba deh kita bahas.

## Pembahasan Program

Pertama, aku menggunakan `addEventListener` untuk mendapatkan event submit dari form. Kenapa sih aku nggak menggunakan attribute `onsubmit`? Karena aku ingin menghadirkan `preventDefault` yang nggak bisa jalan kalau di `onsubmit`.

Nah, kodenya itu seperti ini plus dengan `preventDefault`:

```javascript
document.querySelector(".formCari").addEventListener("submit", (x) => {
 x.preventDefault()
})
```

Lalu, aku menggunakan async/await untuk melakukan `fetch` ke file JSON yang telah kita buat tadi. Secara umum, teknik async/await untuk `fetch` itu seperti ini:

```javascript
async function jalankanFetch(){
  let datanya = await fetch('http://situs.com/data.json').then(x => x.json())
  datanya = await datanya
  console.log(datanya)
}
```