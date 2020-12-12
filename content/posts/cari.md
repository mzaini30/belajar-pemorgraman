---
title: "Cari"
date: 2020-12-09T09:38:59Z
draft: false
description: Cari apa? 
tags:
  - tools
---

{{<html>}}
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
{{</html>}}