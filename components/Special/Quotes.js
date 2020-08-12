import React from 'react'
import Typed from 'react-typed';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null;

const quotes = [
    {
        name: "Yudha (tytydjemboed)",
        quote: "Semoga anda tetap bersih dan tidak tercemar",
        realName: "Yudha Indra Permana",
    },
    {
        name: "ropi.",
        quote: "see u on the top , wkwk",
        realName: "M. Roofi A.R"
    },
    {
        name: "Han",
        quote: "Mabar kuy",
        realName: "M. Farkhanudin"
    },
    {
        name: "sanッ",
        quote: "Be yourself and never surrender",
        realName: "M. Ahsanu Qaulan"
    },
    {
        name: "FirjaS",
        quote: "Excellent Work",
        realName: "Firjatullah"
    },
    {
        name: "Kyrant",
        quote: `tetap semangat dil, semoga bahagia di sana dan jangan menyerah jika suatu saat realita tak sesuai ekspetasi, ingat "The days that break you are the days that make you" #GGMU`,
        realName: "Kyrant Benyamin A. Haloho"
    },
    {
        name: "Fazry",
        quote: "Yamete kudasai",
        realName: "M. Fazry Suhada"
    },
    {
        name: "aput",
        quote: "Padill, aku tau klo kita ni ga deket deket amat, gak sedeket km sama pida & ncen, cuman ya klo padil pergi tuu kek kek mana ya, kek rasanya kelas tu ada yg kurang gtu, padil tu rasaku gapernah marah na ndapernah aku liat padil marah, baik betull km tuu, klo ada org minta bantu tu pasti dibantu, moga aja ya kita bisa ketemu lagi yaaa, moga aja ya kita semua bisa sama sama sukses yaa, jangan lupain kita semua ya😉",
        realName: "Alisanabela Nasrun"
    },
    {
        name: " Your Queen(✿^‿^)",
        quote: 'Makasii ya dah baek sm aku, makasii jugaa kalau aku sering liat tugasmu wkwk, hati" di sana, jangan lupain tmn kelas, jangan nakal boyy, maapin aku sering ambil jaketmu sm pida, trs kalau aku sering ganggu atau yang lain maap yaa, ttp jadi anak umi ya, kapan" balik ke smd, sampe sana jangan lupa beli pulpen yaa biar gk cariin umi mu lagii yaa.. Sukses trus Dil :") Papaiii',
        realName: "Niken Astrid Pradiva Putri"
    },
    {
        name: "CODM PLAYER",
        quote: `"Sehat selalu dil, jangan berhenti berkarya dan tingkatkan subscriber youtube, tetap ramah ke semua orang kyk biasanya, dan sejauh ini kamu orang teramah yang pernah ku 'temani'"`,
        realName: "M. Novil Fahlevy"
    },
    {
        name: "Hamba Allah",
        quote: "mager bawaannya laper",
        realName: "M. Rizki Maulidan"
    },
    {
        name: "Alam",
        quote: `
            "Hati-hati di sana ya dhil "
            "Semoga kau tenang disana"
        `,
        realName: "Alamsyah Haikal Ramadhan"
    },
    {
        name: "dhaibtullah (tullahfamily)",
        quote: `
            "Jgn lupa jadi wibu yg berkelas"
            "Yukiinime update tiap hari"
        `,
        realName: "M. Dhaib Athariq"
    },
    {
        name: "Fariz",
        quote: "Lanjutin Channel Youtube mu",
        realName: "Fariz Dwi Januardi"
    },
    {
        name: "Morphling",
        quote: "Laksekmu bagi dil",
        realName: "Andi Rachmad T. Rusli"
    },
    {
        name: "Konpachiro",
        quote: `
        "Selamat tinggal temanku, maaf kalau selama ini aku selalu kelewatan ketika bercanda. Hati-jati di perjalanan, stay safe dhil 👍

        Tetap semangat dan semoga sukses goodluck👌"
        `,
        realName: "Shena Monica Shavitri"
    },
    {
        name: "Hamba Allah 2",
        quote: `"Sampai jumpa lagi! Semoga bisa menjadi orang yg sukses dan membanggakan di kemudian hari"`,
        realName: "M. Haikal Raffy"
    },
    {
        name: "FoxLoL",
        quote: `
        “Maaf ya dil kl aku ada salah dan juga aku ingin berdoa semoga km sehat selalu 👍
        
        entah kenapa aku nda bisa mikir kata-kata yang bagus jd maaf ya dil kl pendek"
        `,
        realName: "M. Haikal Mahardika"
    },
    {
        name: "Dark_",
        quote: "Selamat Tinggal Fadhil,Sehat selalu Yah,jaga kesehatan dan semoga nanti kedepannya kita bisa ketemu lagi ya,sehat selalu buat km",
        realName: "Eddy Gunawan"
    },
    {
        name: "rian ganteng gada obat uwaw ❤",
        quote: "Perkenalkan saya fans realmadrid dari 2008 tarak tak dung 2020, taraktakdung taraktakdung, tarak tak.. tak... tak dungg.. semoga disana makassar sukses selalu dan bisa mendapatkan lingkungan yang lebih baik lagi dari sebelumnya, dan semoga juga chelsea cepet cepet angkat ucl tapi mustahil sih HAHAHAAHAHA 😎",
        realName: "Rizki Adriannur Raqiib"
    },
    {
        name: "mewnich",
        quote: `
            Aku ingin botol yg gede banget
            Bewan pes kita di bandara nnti
        `,
        realName: "Albygael Rifal Nifansa"
    },
    {
        name: "Tank yang suka nyampah",
        quote: "Terimakasih buat teman ku yang sudah setia menemani ku main game, semoga di tempat yang baru akan semakin betah untuk melanjutkan belajarnya",
        realName: "M. Ridho"
    },
    {
        name: "orang sabar",
        quote: "Fadhil jangan lupain sahabat yang paling pro bermail ml mu dan aku juga tidak akan melupakan sobat wibuku",
        realName: "M. Rizky Anugerah"
    },
    {
        name: "Hoplophile",
        quote: `
            have a safe trip my comrade. jangan lupakan kami sebagaimana kami tidak akan melupakanmu. aku tau perpisahan mungkin berat tetapi dimana ada pertemuan disitu ada perpisahan.
            
            jangan lupa "MAKE AQUORS GREAT AGAIN!!!" walaupun saya team Muse hehe
        `,
        realName: "Maulana Rumi D. R."
    },
    {
        name: "Kina",
        quote: `“padil walau kita jarang talking² sedih juga kalau dipaksa pisah, 2× temen aku pindah di tahun² terakhir sekolah. baik² ya, tetep sehat, jangan lupa pake masker, jangan lupa cuci tangan, jangan lupa mandi, i hope we can meet again. always lopeyu”`,
        realName: "Sakhinahita Isnaini"
    },
    {
        name: "Pida",
        quote: `Fadil, ntr kalo udh jauh disana, jangan cari umi baru wkwkwk semangat belajarnya, semoga sukses ditempat baru, disenangin banyak orang, semoga kita bisa ketemu lagi. SEE YOU ON TOP 💜`,
        realName: "Firdha Elma Izah"
    },
    {
        name: "Anggia",
        quote: `"Kamu it orgnya baik dan kek nya sabar ya 🤔, satu lgi jngan lupaiin RPL 1 yaa, dan semoga ap yg kmu cita" kan bisa tercapai, fightingg 👊. "`,
        realName: "Anggia Yasmin"
    },

];
export default class Quotes extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile: true,
            live: false,
        }).init();
    }
    render() {
        return (
            <div id="quotes" class="container">
                <div className="d-flex align-items-center flex-column justify-content-center">
                    <h1>Quotes</h1>
                    <p>Di bawah ini adalah kalimat-kalimat yang sudah terkumpul dari teman-teman mu yang tidak memilik akhlak sama sekali.</p>
                </div>
                <div class="card-columns mt-4">
                    {quotes.map((quote) => (
                        <div class="card p-3 wow fadeInUp">
                            <blockquote class="blockquote mb-0 card-body">
                                <p>{quote.quote}</p>
                                <footer class="blockquote-footer">
                                    <small class="text-muted">
                                        <cite title={quote.name}>
                                            {quote.name}
                                        </cite>
                                    </small>
                                </footer>
                            </blockquote>
                            {/* <div class="overlay">
                                <h1>{quote.realName}</h1>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
