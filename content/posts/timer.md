---
title: "Timer"
date: 2020-12-13T06:24:20+08:00
draft: false
description: Countdown menit
tags:
  - tools
---

{{<html>}}
	<style type="text/css">
		label,
		input {
			display: block;
		}
		input {
			width: 100%;
			padding: 10px;
			box-sizing: border-box;
		}
	</style>
	<div class="vue">
 	<form @submit.prevent="mulaiHitung">
 		<label>Timer Berapa Menit?</label>
 		<input type="tel" placeholder="Masukkan di sini" required="" name="" v-model="waktu">
 	</form>
  <center>
 	 <h1 v-if="sisa"><< sisa >> menit</h1>
 	</center>
 	<p></p>
 </div>
	<script type="text/javascript">
		new Vue({
		 el: ".vue",
		 delimiters: ["<<", ">>"],
		 data: {
		  waktu: "",
		  sisa: ""
		 },
		 methods: {
		  mulaiHitung(){
		   this.sisa = this.waktu
		   this.waktu = ""
		   setInterval(this.interval, 60000)
		  },
		  interval(){
		   if (this.sisa != 0){
		    this.sisa -= 1
		    console.log(this.sisa)
		   }
		  }
		 }
		})
	</script>
{{</html>}}