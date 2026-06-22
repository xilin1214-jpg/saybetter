<div align="center">

[English](README.md) · [中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · [Español](README.es.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Português](README.pt.md) · [Русский](README.ru.md) · **Bahasa Indonesia**

</div>

# SayBetter

> Sampaikan yang ingin Anda katakan, tanpa menyakiti.

**SayBetter** adalah asisten komunikasi open-source yang menulis ulang pesan sulit menjadi ungkapan yang jelas, sopan, dan efektif.

## Contoh

```
Input: Kamu kok telat lagi?

Output:
  ✅ Lembut:   Bisa kita selesaikan hari ini? Saya butuh hasilnya untuk menyusun langkah selanjutnya.
  ✅ Tegas:    Ini harus diselesaikan hari ini, kalau tidak jadwal berikutnya terpengaruh.
              Mohon jawaban pasti sebelum akhir hari.
  ✅ Bijak:    Saya tahu kamu sibuk, tapi hasil ini penting untuk kelanjutan proyek.
              Bisa kita samakan kesimpulan hari ini?
  ❌ Hindari: "Kamu selalu telat" / "Tiap kali begini terus."
```

## Mengapa SayBetter?

Banyak orang bukan tidak punya ide — tapi tidak punya kata-kata. SayBetter membantu Anda menyampaikan dengan jelas saat situasi penting: menolak, menagih, minta maaf, menetapkan batasan, mendesak.

## Fitur

- Tulis ulang pesan sulit menjadi 3-5 versi yang lebih baik
- Pilih hubungan, tujuan, dan nada bicara
- Pustaka 12 skenario berbasis prompt (terbuka untuk kontribusi)
- Ungkapan "tidak disarankan" beserta penjelasannya
- Kartu berbagi (unduh PNG)
- 20 contoh nyata
- Kompatibel dengan OpenAI (DeepSeek, Kimi, Ollama, dll.)
- Mendukung 10 bahasa

## Skenario

| Skenario | Deskripsi |
|----------|-----------|
| ✋ Penolakan | Menolak permintaan dengan sopan dan jelas |
| ⏰ Menagih | Mendorong kemajuan tanpa menyinggung |
| 🙏 Permintaan maaf | Minta maaf dengan tulus, tanpa merendahkan diri |
| 💬 Ketidakpuasan | Menyampaikan kekesalan tanpa bertengkar |
| 🚧 Batasan | Menyatakan batasan Anda dengan jelas |
| 👔 Bicara dengan atasan | Komunikasi profesional ke atas |
| 🤝 Bicara dengan rekan | Komunikasi ramah dan efisien |
| 💕 Komunikasi hubungan | Perasaan dan kebutuhan dalam hubungan |
| 🏠 Bicara dengan orang tua | Menjelaskan hal sulit kepada orang tua |
| 💰 Uang | Percakapan canggung soal uang |
| 📞 Komplain | Komplain efektif yang menghasilkan solusi |
| 📋 Gaji & pengunduran diri | Komunikasi di momen karir penting |

## Mulai cepat

```bash
git clone https://github.com/xilin1214-jpg/saybetter.git
cd saybetter
pnpm install
cp .env.example .env
pnpm dev
```

## Privasi

- Input Anda tidak pernah disimpan di server kami
- Jika self-hosted, semua permintaan menggunakan konfigurasi Anda sendiri

## Lisensi

MIT
