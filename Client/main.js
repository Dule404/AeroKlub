import { Padobran } from "./Padobran.js";
import { Avion } from "./Avion.js";
import { Clan } from "./Clan.js";
import { AeroKlub } from "./AeroKlub.js";

var listaClanva=[];
var listaPadobrana=[];
var ListaAviona=[];

fetch("https://localhost:5001/Avion/PrikaziAvione")
.then(p=>{
    p.json().then(avioni=>{
        avioni.forEach(avion => {
            console.log(avion);
            var a=new Avion(avion.id, avion.registracija, avion.naziv)
            ListaAviona.push(a);
        })

fetch("https://localhost:5001/Clan/PrikaziClanove")
.then(p=>{
    p.json().then(clanovi=>{
        clanovi.forEach(clan=>{
            console.log(clan);
            var c=new Clan(clan.id, clan.ime, clan.prezime, clan.brojDozvole, clan.tipDozvole)
            listaClanva.push(c);
        })

fetch("https://localhost:5001/Padobran/PrikaziPadobrane")
.then(p=>{
    p.json().then(padobrani=>{
        padobrani.forEach(padobran=>{
            console.log(padobran);
            var p=new Padobran(padobran.id, padobran.naziv, padobran.povrsina, padobran.tip);
            listaPadobrana.push(p);
        })      
    })
})
        var ak=new AeroKlub(listaClanva, listaPadobrana, ListaAviona);
        ak.crtajPocetnu(document.body);
    })
})
    })
})