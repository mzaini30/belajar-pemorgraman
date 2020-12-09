---
title: "Cari"
date: 2020-12-09T09:38:59Z
draft: true
description: 
tags:
  - 
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
   alert("Halo")
  })
 </script>
{{</html>}}