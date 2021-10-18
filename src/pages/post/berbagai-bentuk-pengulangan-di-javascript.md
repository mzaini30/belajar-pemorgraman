---
judul: Berbagai Bentuk Pengulangan di JavaScript
layout: ./__layout.astro
kategori: JavaScript
tanggal: 2021-10-19
---

Ada berbagai macam bentuk pengulangan di JavaScript.

Tapi sebelumnya, apa itu pengulangan dan mengapa kita memerlukannya?

Contohnya saja ketika guru menghukum kita buat menulis "Aku nggak akan nakal lagi" sebanyak 100 kali. Tentu, kita sangat capek menuliskannya kan? Nah, begitu pula dengan coding. Tentu akan sangat melelahkan jika kita menulis kode yang sama berkali-kali. Ingat, di dunia coding ada istilah DRY (Don't Repeat Yourself). Jadi, hindari menulis berulang-ulang, kode yang sama.

Berikut ini adalah beberapa bentuk pengulangan di JavaScript:

## Pengulangan Berdasarkan Jumlah Pengulangan

Sintaksnya:

```javascript
for (let n = 1; n <= 10; n++){
	console.log(`Angka ${n}`)
}
```

Hasilnya:

```
Angka 1
Angka 2
Angka 3
Angka 4
Angka 5
Angka 6
Angka 7
Angka 8
Angka 9
Angka 10
```

Lebih singkat kan daripada nulis satu-satu?
