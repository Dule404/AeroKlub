import { Aktivnost } from "./Aktivnost.js";
import { Avion } from "./Avion.js";
import { Clan } from "./Clan.js";
import { Padobran } from "./Padobran.js";

export class AeroKlub{
    constructor(listaClanva, listaPadobrana, ListaAviona){
        this.listaClanva=listaClanva;
        this.listaPadobrana=listaPadobrana;
        this.ListaAviona=ListaAviona;
        this.head=null;
        this.kont=null;
    }

    glavniKont(host){
        this.kont=document.createElement("div");
        this.kont.className="Glavni";

        this.head=document.createElement("div");
        this.head.className="divHome";

        let btnHome=document.createElement("button");
        btnHome.onclick=(ev)=>this.IzbrisiPocetnu(host);
        btnHome.innerHTML="HOME"
        btnHome.className="home";
        this.head.appendChild(btnHome);

        this.kont.appendChild(this.head);
        host.appendChild(this.kont);
    }

    IzbrisiPocetnu(host){
        host.removeChild(this.kont);
        this.crtajPocetnu(host);
    }

    crtajPocetnu(host){
        this.glavniKont(host);

        let divNaslov=document.createElement("div");
        divNaslov.className="Naslov";
        this.kont.appendChild(divNaslov);

        let naslov=document.createTextNode("Dobrodošli u AK Naša Krila!");
        let naslov1=document.createTextNode("Vi ste?");
        divNaslov.appendChild(naslov);
        divNaslov.appendChild(naslov1);

        let divPocetni=document.createElement("div");
        divPocetni.className="Pocetni";
        divNaslov.appendChild(divPocetni);


        let btnAdmin=document.createElement("button");
        btnAdmin.onclick=(ev)=>this.crtajLogovanje(host);
        btnAdmin.className="DugmeP";
        btnAdmin.innerHTML="ADMIN";
        divPocetni.appendChild(btnAdmin);

        let btnClan=document.createElement("button");
        btnClan.onclick=(ev)=>this.crtajClana(host);
        btnClan.className="DugmeP";
        btnClan.innerHTML="ČLAN";
        divPocetni.appendChild(btnClan);
    }

    crtajClana(host){
        host.removeChild(this.kont);
        this.glavniKont(host);

        let divClan=document.createElement("div");
        divClan.className="divClan";
        this.kont.appendChild(divClan);

        let divNaslov=document.createElement("div");
        divNaslov.className="divNaslov";
        divClan.appendChild(divNaslov);

        let naslov=document.createElement("label");
        naslov.innerHTML="Dobrodosli!";
        divNaslov.appendChild(naslov);

        let btnRezervisiAktivnost=document.createElement("button");
        btnRezervisiAktivnost.onclick=(ev)=>this.crtajRezAktivnost(host);
        btnRezervisiAktivnost.className="DugmeClan";
        btnRezervisiAktivnost.innerHTML="Rezerviši Aktivnost";
        divClan.appendChild(btnRezervisiAktivnost);

        let btnOtkaziAktivnost=document.createElement("button");        
        btnOtkaziAktivnost.onclick=(ev)=>this.crtajOtkaziAktivnost(host);
        btnOtkaziAktivnost.className="DugmeClan";
        btnOtkaziAktivnost.innerHTML="Otkaži Aktivnost";
        divClan.appendChild(btnOtkaziAktivnost);
    }

    crtajLogovanje(host)
    {
        host.removeChild(this.kont);
        this.glavniKont(host);  

        let divLogovanje=document.createElement("div");
        divLogovanje.className="divLogovanje";
        this.kont.appendChild(divLogovanje);

        let naslov=document.createElement("div");
        naslov.className="divNaslovlog";
        divLogovanje.appendChild(naslov);

        let text=document.createElement("div");
        text.className="divText";
        divLogovanje.appendChild(text);

        let btn=document.createElement("div");
        btn.className="divBTN";
        divLogovanje.appendChild(btn);

        let logovanje=document.createElement("label");
        logovanje.innerHTML="Unesite šifru za admina:";
        logovanje.className="naslov";
        naslov.appendChild(logovanje);

        var pass=document.createElement("input");
        pass.className="logpolje";
        pass.type='password';
        text.appendChild(pass);

        let btnLog=document.createElement("button");
        btnLog.className="Dugme";
        btnLog.innerHTML="Logovanje!";
        btnLog.onclick=(ev)=>this.ProveriSifru(host,pass);
        btn.appendChild(btnLog);
        
    }

    ProveriSifru(host,p)
    {
        if(p.value==="password")
        {
            this.crtajAdmina(host);
        }
        else
        {
            alert("Netacna lozinka!");
            this.crtajLogovanje(host);
        }
    }

    crtajAdmina(host){
        host.removeChild(this.kont);
        this.glavniKont(host);

        let divAdmin=document.createElement("div");
        divAdmin.className="divAdmin";
        this.kont.appendChild(divAdmin);

        let divnaslov=document.createElement("div");
        divAdmin.className="divAdminnaslov";
        divAdmin.appendChild(divnaslov);

        let text=document.createTextNode("Dobrodošli!");
        text.className="textp";
        divnaslov.appendChild(text);

        let DivClan=document.createElement("div");
        DivClan.className="DivAdminp";
        divAdmin.appendChild(DivClan);

        let btnDodajClana=document.createElement("button");
        btnDodajClana.onclick=(ev)=>this.crtajDodajClana(host);
        btnDodajClana.className="DugmeAdmin1";
        btnDodajClana.innerHTML="Dodaj Člana";
        DivClan.appendChild(btnDodajClana);

        let btnIzmeniClana=document.createElement("button");
        btnIzmeniClana.onclick=(ev)=>this.crtajIzmeniClana(host);
        btnIzmeniClana.className="DugmeAdmin9";
        btnIzmeniClana.innerHTML="Izmeni Člana";
        DivClan.appendChild(btnIzmeniClana);

        let btnIzbrisiClana=document.createElement("button");        
        btnIzbrisiClana.onclick=(ev)=>this.crtajIzbrisiClana(host);
        btnIzbrisiClana.className="DugmeAdmin3";
        btnIzbrisiClana.innerHTML="Izbriši Člana";
        DivClan.appendChild(btnIzbrisiClana);
        
        let DivPadobran=document.createElement("div");
        DivPadobran.className="DivAdmin";
        divAdmin.appendChild(DivPadobran);

        let btnDodajPadobran=document.createElement("button");
        btnDodajPadobran.onclick=(ev)=>this.crtajDodajPadobran(host);
        btnDodajPadobran.className="DugmeAdmin4";
        btnDodajPadobran.innerHTML="Dodaj Padobran";
        DivPadobran.appendChild(btnDodajPadobran);

        let btnIzbrisiPadobran=document.createElement("button");        
        btnIzbrisiPadobran.onclick=(ev)=>this.crtajIzbrisiPadobran(host);
        btnIzbrisiPadobran.className="DugmeAdmin5";
        btnIzbrisiPadobran.innerHTML="Izbriši Padobran";
        DivPadobran.appendChild(btnIzbrisiPadobran);
       
        let DivAvion=document.createElement("div");
        DivAvion.className="DivAdmin";
        divAdmin.appendChild(DivAvion);

        let btnDodajAvion=document.createElement("button");
        btnDodajAvion.onclick=(ev)=>this.crtajDodajAvion(host);
        btnDodajAvion.className="DugmeAdmin6";
        btnDodajAvion.innerHTML="Dodaj Avion";
        DivAvion.appendChild(btnDodajAvion);

        let btnIzbrisiAvion=document.createElement("button");        
        btnIzbrisiAvion.onclick=(ev)=>this.crtajIzbrisiAvion(host);
        btnIzbrisiAvion.className="DugmeAdmin7";
        btnIzbrisiAvion.innerHTML="Izbriši Avion";
        DivAvion.appendChild(btnIzbrisiAvion);

        let DivPrikaz=document.createElement("div");
        DivPrikaz.className="DivAdmin2";
        divAdmin.appendChild(DivPrikaz);

        let btnPrikaz=document.createElement("button");
        btnPrikaz.innerHTML="Prikazi Aero Klub";
        btnPrikaz.className="DugmeAdmin2";
        btnPrikaz.onclick=(ev)=>this.crtajPrikazi(host);
        DivPrikaz.appendChild(btnPrikaz);
    }

    crtajPrikazi(host)
    {
        host.removeChild(this.kont);
        this.glavniKont(host);

        let DivAk=document.createElement("div");
        DivAk.className="DivAK";
        this.kont.appendChild(DivAk);
//clan
        let DivClanovi=document.createElement("div");
        DivClanovi.className="DivPrikaz";
        DivAk.appendChild(DivClanovi);

        let naslovc=document.createElement("label");
        naslovc.className="naslovc";
        naslovc.innerHTML="Clanovi:";
        DivClanovi.appendChild(naslovc);

        var tabelaClan=document.createElement("table");
        tabelaClan.className="tbClan";
        DivClanovi.appendChild(tabelaClan);

        var clanHead=document.createElement("thead");
        tabelaClan.appendChild(clanHead);

        var tr=document.createElement("tr");
        tr.className="red";
        clanHead.appendChild(tr);

        var clanBody=document.createElement("tbody");
        clanBody.className="clanBody";
        tabelaClan.appendChild(clanBody);

        let th;
        var clanZag=["Ime", "Prezime", "Broj Dozvole", "Tip Dozvole"];
        clanZag.forEach(el=>{
            th=document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })

        fetch("https://localhost:5001/Clan/PrikaziClanove")
         .then(p=>{
            p.json().then(clanovi=>{
                 clanovi.forEach(clan=>{
                    var c=new Clan(clan.id, clan.ime, clan.prezime, clan.brojDozvole, clan.tipDozvole)
                     c.crtaj(tabelaClan);
        })
    })
})
//avion
        let DivAvioni=document.createElement("div");
        DivAvioni.className="DivPrikaz";
        DivAk.appendChild(DivAvioni);

        let naslova=document.createElement("label");
        naslova.className="naslova";
        naslova.innerHTML="Avioni:";
        DivAvioni.appendChild(naslova);

        var tabelaAvion=document.createElement("table");
        tabelaAvion.className="tbAvion";
        DivAvioni.appendChild(tabelaAvion);

        var avionHead=document.createElement("thead");
        tabelaAvion.appendChild(avionHead);

        var tr=document.createElement("tr");
        avionHead.appendChild(tr);

        var avionBody=document.createElement("tbody");
        avionBody.className="clanBody";
        tabelaAvion.appendChild(avionBody);

        var avionZag=["Naziv", "Registracija"];
        avionZag.forEach(el=>{
            th=document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })

        fetch("https://localhost:5001/Avion/PrikaziAvione")
        .then(p=>{
            p.json().then(avioni=>{
                avioni.forEach(avion => {
                    var a=new Avion(avion.id, avion.registracija, avion.naziv)
                    a.crtaj(tabelaAvion);
        })
    })
})
//padobran
        let DivPadobrani=document.createElement("div");
        DivPadobrani.className="DivPrikaz";
        DivAk.appendChild(DivPadobrani);

        let naslovp=document.createElement("label");
        naslovp.className="naslovp";
        naslovp.innerHTML="Padobrani:";
        DivPadobrani.appendChild(naslovp);

        var tabelaPadobrani=document.createElement("table");
        tabelaPadobrani.className="tbPadobran";
        DivPadobrani.appendChild(tabelaPadobrani);

        var padobranHead=document.createElement("thead");
        tabelaPadobrani.appendChild(padobranHead);

        var tr=document.createElement("tr");
        padobranHead.appendChild(tr);

        var padobranBody=document.createElement("tbody");
        padobranBody.className="clanBody";
        tabelaPadobrani.appendChild(padobranBody);

        var padobranZag=["Naziv", "Povrsina(ft)", "Tip"];
        padobranZag.forEach(el=>{
            th=document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })

        fetch("https://localhost:5001/Padobran/PrikaziPadobrane")
        .then(p=>{
            p.json().then(padobrani=>{
                padobrani.forEach(padobran=>{
                    var p=new Padobran(padobran.id, padobran.naziv, padobran.povrsina, padobran.tip);
                    p.crtaj(tabelaPadobrani);
                })      
            })
        })
//aktivnosti
        let DivAkt=document.createElement("div");
        DivAkt.className="DivPrikaz";
        DivAk.appendChild(DivAkt);

        let naslovakt=document.createElement("label");
        naslovakt.className="naslovp";
        naslovakt.innerHTML="Aktivnosti:";
        DivAkt.appendChild(naslovakt);

        var tabelaAkt=document.createElement("table");
        tabelaAkt.className="tbAktivnost";
        DivAkt.appendChild(tabelaAkt);

        var aktHead=document.createElement("thead");
        tabelaAkt.appendChild(aktHead);

        var tr=document.createElement("tr");
        aktHead.appendChild(tr);

        var aktBody=document.createElement("tbody");
        aktBody.className="aktivnostBody";
        tabelaAkt.appendChild(aktBody);

        var aktZag=["Vreme", "Datum", "Visina(m)", "Član", "Avion", "Padobran"];
        aktZag.forEach(el=>{
            th=document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })
        
        fetch("https:localhost:5001/Aktivnost/Aktivnosti")
        .then(p=>{
            p.json().then(aktivnosti=>{
                aktivnosti.forEach(aktivnost=>{
                    var clanName=aktivnost.clan.ime+" "+aktivnost.clan.prezime;
                    var avionName=aktivnost.avion.registracija;
                    var padobranName=aktivnost.padobran.naziv+" "+aktivnost.padobran.povrsina;
                    var akt=new Aktivnost(aktivnost.id, aktivnost.vreme, aktivnost.datum, aktivnost.visina, clanName, padobranName, avionName);
                    akt.crtaj(tabelaAkt);
                })
            })
        })
    }
    
    crtajRezAktivnost(host){
        host.removeChild(this.kont);
        this.glavniKont(host);

        let DivRezAkt=document.createElement("div");
        DivRezAkt.className="DivRezAkt";
        this.kont.appendChild(DivRezAkt);

        let DivNsalov=document.createElement("div");
        DivNsalov.className="NaslovAktivnost";
        DivRezAkt.appendChild(DivNsalov);
        
        let lblRezAkt=document.createElement("label");
        lblRezAkt.innerHTML="Rezerviši Aktivnost:";
        DivNsalov.appendChild(lblRezAkt);
//clan
        let DivClan=document.createElement("div");
        DivClan.className="DivRezervisi";
        DivRezAkt.appendChild(DivClan);
        
        let lblClan=document.createElement("label");
        lblClan.className="labelarezervisi1";
        lblClan.innerHTML="Član:";
        DivClan.appendChild(lblClan);

        let clanSelect=document.createElement("select");
        clanSelect.className="textRezervisi1";
        DivClan.appendChild(clanSelect);
        this.listaClanva.forEach(clan => {
            var option=document.createElement("option");
            option.value = clan.id;
            option.text=clan.ime;
            clanSelect.appendChild(option);
        });
//padobran
        let DivPadobran=document.createElement("div");
        DivPadobran.className="DivRezervisi";
        DivRezAkt.appendChild(DivPadobran);
        
        let lblPadobran=document.createElement("label");
        lblPadobran.className="labelarezervisi1";
        lblPadobran.innerHTML="Padobran:";
        DivPadobran.appendChild(lblPadobran);

        let padobranSelect=document.createElement("select");
        padobranSelect.className="textRezervisi1";
        DivPadobran.appendChild(padobranSelect);
        this.listaPadobrana.forEach(padobran => {
            var option=document.createElement("option");
            option.value = padobran.id;
            option.text=padobran.naziv;
            padobranSelect.appendChild(option);
        });
//avion
        let DivAvion=document.createElement("div");
        DivAvion.className="DivRezervisiAvion";
        DivRezAkt.appendChild(DivAvion);
        
        let lblAvion=document.createElement("label");
        lblAvion.className="labelarezervisi";
        lblAvion.innerHTML="Avion:";
        DivAvion.appendChild(lblAvion);

        let Divoption=document.createElement("div");
        Divoption.className="DivOption";
        DivAvion.appendChild(Divoption);

        this.ListaAviona.forEach(avion => {
            var option=document.createElement("input");
            option.className="option";
            option.type='radio';
            option.value = avion.id;
            option.name="avion";
            Divoption.appendChild(option);
            let ime=document.createElement("label");
            ime.className="imeRez";
            ime.innerHTML=avion.naziv;
            Divoption.appendChild(ime);           
        });
//visina
        let DivVisina=document.createElement("div");
        DivVisina.className="DivRezervisi";
        DivRezAkt.appendChild(DivVisina);
        
        let lblVisina=document.createElement("label");
        lblVisina.className="labelarezervisi";
        lblVisina.innerHTML="Visina:";
        DivVisina.appendChild(lblVisina);

        let textVisina=document.createElement("input");
        textVisina.className="textRezervisi";
        textVisina.type="text";
        DivVisina.appendChild(textVisina);
//vreme
        let DivVreme=document.createElement("div");
        DivVreme.className="DivRezervisi";
        DivRezAkt.appendChild(DivVreme);
        
        let lblVreme=document.createElement("label");
        lblVreme.className="labelarezervisi";
        lblVreme.innerHTML="Vreme:";
        DivVreme.appendChild(lblVreme);

        let textVreme=document.createElement("input");
        textVreme.className="textRezervisi";
        textVreme.type="text";
        DivVreme.appendChild(textVreme);
//datum
        let DivDatum=document.createElement("div");
        DivDatum.className="DivRezervisi";
        DivRezAkt.appendChild(DivDatum);
        
        let lblDatum=document.createElement("label");
        lblDatum.className="labelarezervisi";
        lblDatum.innerHTML="Datum:";
        DivDatum.appendChild(lblDatum);

        let textDatum=document.createElement("input");
        textDatum.className="textRezervisi";
        textDatum.type="text";
        DivDatum.appendChild(textDatum);
//  
        let clanovi=DivClan.querySelector("select");
        let padobrani=DivPadobran.querySelector("select");
        
        let btnDodaj=document.createElement("button");
        btnDodaj.onclick=(ev)=>this.ProveriAktivnost(clanovi, padobrani, textVisina, textVreme, textDatum, host);
        btnDodaj.className="DugmeRezervisi";
        btnDodaj.innerHTML="REZERVIŠI";
        DivRezAkt.appendChild(btnDodaj);
    }

    crtajOtkaziAktivnost(host){
        host.removeChild(this.kont);
        this.glavniKont(host);

        let DivOtkaziAktivnost=document.createElement("div");
        DivOtkaziAktivnost.className="DivIzbrisi";
        this.kont.appendChild(DivOtkaziAktivnost);

        let naslov=document.createElement("label");
        naslov.innerHTML="Unesite ID aktivnosti";
        naslov.className="naslov";
        DivOtkaziAktivnost.appendChild(naslov);

        let DivLabela=document.createElement("div");
        DivLabela.className="DivLabela";
        DivOtkaziAktivnost.appendChild(DivLabela);

        let DivDugme=document.createElement("div");
        DivDugme.className="DivDugme";
        DivOtkaziAktivnost.appendChild(DivDugme);


        let idAktivnosti=document.createElement("label");
        idAktivnosti.innerHTML="ID Aktivnosti:"
        DivLabela.appendChild(idAktivnosti);

        let txtAktivnostid=document.createElement("input");
        txtAktivnostid.className="idpolje";
        txtAktivnostid.type="text";
        DivLabela.appendChild(txtAktivnostid);

        let btnOtkazi=document.createElement("button");
        btnOtkazi.className="Dugme";
        btnOtkazi.innerHTML="OTKAŽI";
        DivDugme.appendChild(btnOtkazi);
        let aktivnostID=txtAktivnostid.value;
        btnOtkazi.onclick=(ev)=>this.OtkaziAktivnost(host, txtAktivnostid);
    }

    crtajIzbrisiClana(host){
        host.removeChild(this.kont);
        this.glavniKont(host);

        let DivIzbrisiClana=document.createElement("div");
        DivIzbrisiClana.className="DivIzbrisi";
        this.kont.appendChild(DivIzbrisiClana);

        let naslov=document.createElement("label");
        naslov.innerHTML="Unesite ID člana";
        naslov.className="naslov";
        DivIzbrisiClana.appendChild(naslov);

        let DivLabelaC=document.createElement("div");
        DivLabelaC.className="DivLabela";
        DivIzbrisiClana.appendChild(DivLabelaC);

        let DivDugmeC=document.createElement("div");
        DivDugmeC.className="DivDugme";
        DivIzbrisiClana.appendChild(DivDugmeC);

        let ClanID=document.createElement("label");
        ClanID.innerHTML="ID Člana:"
        DivLabelaC.appendChild(ClanID);

        let txtClanid=document.createElement("input");
        txtClanid.className="idpolje";
        txtClanid.type="text";
        DivLabelaC.appendChild(txtClanid);

        let btnIzbrisi=document.createElement("button");
        btnIzbrisi.className="Dugme";
        btnIzbrisi.innerHTML="IZBRIŠI";
        DivDugmeC.appendChild(btnIzbrisi);
        btnIzbrisi.onclick=(ev)=>this.ProveriIzbrisiClana(host, txtClanid);
    }

    crtajDodajClana(host){
        host.removeChild(this.kont);
        this.glavniKont(host);

        let DivDodajClana=document.createElement("div");
        DivDodajClana.className="DivDodaj1";
        this.kont.appendChild(DivDodajClana);
        
        let lblDodajClana=document.createElement("label");
        lblDodajClana.className="naslovDodaj";
        lblDodajClana.innerHTML="Dodaj člana";
        DivDodajClana.appendChild(lblDodajClana);
//Ime
        let DivIme=document.createElement("div");
        DivIme.className="DivDodajp";
        DivDodajClana.appendChild(DivIme);

        let lblIme=document.createElement("label");
        lblIme.className="labele";
        lblIme.innerHTML="Ime:";
        DivIme.appendChild(lblIme);

        let textIme=document.createElement("input");
        textIme.className="textdodaj";
        textIme.type="text";
        DivIme.appendChild(textIme);
//Prezime
        let DivPrezime=document.createElement("div");
        DivPrezime.className="DivDodaj";
        DivDodajClana.appendChild(DivPrezime);

        let lblPrezime=document.createElement("label");
        lblPrezime.className="labele";
        lblPrezime.innerHTML="Prezime:";
        DivPrezime.appendChild(lblPrezime);

        let textPrezime=document.createElement("input");
        textPrezime.className="textdodaj";
        textPrezime.type="text";
        DivPrezime.appendChild(textPrezime);
//BR.Dozvole
        let DivBrDozvole=document.createElement("div");
        DivBrDozvole.className="DivDodaj";
        DivDodajClana.appendChild(DivBrDozvole);

        let lblBrDozvole=document.createElement("label");
        lblBrDozvole.className="labele";
        lblBrDozvole.innerHTML="Broj dozvole:";
        DivBrDozvole.appendChild(lblBrDozvole);

        let textBrDozvole=document.createElement("input");
        textBrDozvole.className="textdodaj";
        textBrDozvole.type="text";
        DivBrDozvole.appendChild(textBrDozvole);
//TipDozvole
        var tipovi=["A", "B", "C", "D"];

        let DivTipDozvole=document.createElement("div");
        DivTipDozvole.className="DivDodaj";
        DivDodajClana.appendChild(DivTipDozvole);

        let lblTipDozvole=document.createElement("label");
        lblTipDozvole.className="labeledb";
        lblTipDozvole.innerHTML="Tip dozvole:";
        DivTipDozvole.appendChild(lblTipDozvole);

        let tipSelect=document.createElement("select");
        tipSelect.className="textdodajdb";
        DivTipDozvole.appendChild(tipSelect);
        tipovi.forEach(tip => {
            var option=document.createElement("option");
            option.value = tip;
            option.text=tip;
            tipSelect.appendChild(option);
        });
//
        let tipDozvole=DivTipDozvole.querySelector("select");

        let btnDodaj=document.createElement("button");
        btnDodaj.onclick=(ev)=>this.ProveriDodajClana(host, textIme, textPrezime, textBrDozvole, tipDozvole);
        btnDodaj.className="DugmeDodaj";
        btnDodaj.innerHTML="DODAJ";
        DivDodajClana.appendChild(btnDodaj);
    }

    crtajIzmeniClana(host){
        host.removeChild(this.kont);
        this.glavniKont(host);

        let DivDodajClana=document.createElement("div");
        DivDodajClana.className="DivDodaj1";
        this.kont.appendChild(DivDodajClana);
        
        let lblDodajClana=document.createElement("label");
        lblDodajClana.className="naslovDodaj";
        lblDodajClana.innerHTML="Izmeni člana";
        DivDodajClana.appendChild(lblDodajClana);

        let DivLabelaC=document.createElement("div");
        DivLabelaC.className="DivDodajp";
        DivDodajClana.appendChild(DivLabelaC);

        let ClanID=document.createElement("label");
        ClanID.className="labele";
        ClanID.innerHTML="ID Člana:"
        DivLabelaC.appendChild(ClanID);

        let txtClanid=document.createElement("input");
        txtClanid.className="textdodaj";
        txtClanid.type="text";
        DivLabelaC.appendChild(txtClanid);
//Ime
        let DivIme=document.createElement("div");
        DivIme.className="DivDodaj";
        DivDodajClana.appendChild(DivIme);

        let lblIme=document.createElement("label");
        lblIme.className="labele";
        lblIme.innerHTML="Ime:";
        DivIme.appendChild(lblIme);

        let textIme=document.createElement("input");
        textIme.className="textdodaj";
        textIme.type="text";
        DivIme.appendChild(textIme);
//Prezime
        let DivPrezime=document.createElement("div");
        DivPrezime.className="DivDodaj";
        DivDodajClana.appendChild(DivPrezime);

        let lblPrezime=document.createElement("label");
        lblPrezime.className="labele";
        lblPrezime.innerHTML="Prezime:";
        DivPrezime.appendChild(lblPrezime);

        let textPrezime=document.createElement("input");
        textPrezime.className="textdodaj";
        textPrezime.type="text";
        DivPrezime.appendChild(textPrezime);
//BR.Dozvole
        let DivBrDozvole=document.createElement("div");
        DivBrDozvole.className="DivDodaj";
        DivDodajClana.appendChild(DivBrDozvole);

        let lblBrDozvole=document.createElement("label");
        lblBrDozvole.className="labele";
        lblBrDozvole.innerHTML="Broj dozvole:";
        DivBrDozvole.appendChild(lblBrDozvole);

        let textBrDozvole=document.createElement("input");
        textBrDozvole.className="textdodaj";
        textBrDozvole.type="text";
        DivBrDozvole.appendChild(textBrDozvole);
//TipDozvole
        var tipovi=["A", "B", "C", "D"];

        let DivTipDozvole=document.createElement("div");
        DivTipDozvole.className="DivDodaj";
        DivDodajClana.appendChild(DivTipDozvole);

        let lblTipDozvole=document.createElement("label");
        lblTipDozvole.className="labeledb";
        lblTipDozvole.innerHTML="Tip dozvole:";
        DivTipDozvole.appendChild(lblTipDozvole);

        let tipSelect=document.createElement("select");
        tipSelect.className="textdodajdb";
        DivTipDozvole.appendChild(tipSelect);
        tipovi.forEach(tip => {
            var option=document.createElement("option");
            option.value = tip;
            option.text=tip;
            tipSelect.appendChild(option);
        });
//
        let tipDozvole=DivTipDozvole.querySelector("select");

        let btnDodaj=document.createElement("button");
        btnDodaj.onclick=(ev)=>this.ProveriIzmeniClana(host, txtClanid, textIme, textPrezime, textBrDozvole, tipDozvole);
        btnDodaj.className="DugmeDodaj";
        btnDodaj.innerHTML="IZMENI";
        DivDodajClana.appendChild(btnDodaj);
    }

    crtajIzbrisiPadobran(host){
        host.removeChild(this.kont);
        this.glavniKont(host);

        let DivIzbrisiPadobran=document.createElement("div");
        DivIzbrisiPadobran.className="DivIzbrisi";
        this.kont.appendChild(DivIzbrisiPadobran);

        let naslov=document.createElement("label");
        naslov.innerHTML="Unesite ID padobrana";
        naslov.className="naslov";
        DivIzbrisiPadobran.appendChild(naslov);

        let DivLabelaP=document.createElement("div");
        DivLabelaP.className="DivLabela";
        DivIzbrisiPadobran.appendChild(DivLabelaP);

        let DivDugmeP=document.createElement("div");
        DivDugmeP.className="DivDugme";
        DivIzbrisiPadobran.appendChild(DivDugmeP);

        let PadobranID=document.createElement("label");
        PadobranID.innerHTML="ID Padobrana:"
        DivLabelaP.appendChild(PadobranID);

        let txtPadobranid=document.createElement("input");
        txtPadobranid.className="idpolje";
        txtPadobranid.type="text";
        DivLabelaP.appendChild(txtPadobranid);

        let btnIzbrisi=document.createElement("button");
        btnIzbrisi.className="Dugme";
        btnIzbrisi.innerHTML="IZBRIŠI";
        DivDugmeP.appendChild(btnIzbrisi);
        btnIzbrisi.onclick=(ev)=>this.ProveriIzbrisiPadobran(host, txtPadobranid);
    }

    crtajDodajPadobran(host){
        host.removeChild(this.kont);
        this.glavniKont(host);

        let DivDodajPadobran=document.createElement("div");
        DivDodajPadobran.className="DivDodaj1";
        this.kont.appendChild(DivDodajPadobran);
        
        let lblDodajPadobran=document.createElement("label");
        lblDodajPadobran.className="naslovDodaj";
        lblDodajPadobran.innerHTML="Dodaj padobran";
        DivDodajPadobran.appendChild(lblDodajPadobran);
//Naziv
        let DivNaziv=document.createElement("div");
        DivNaziv.className="DivDodajp";
        DivDodajPadobran.appendChild(DivNaziv);

        let lblNaziv=document.createElement("label");
        lblNaziv.className="labele";
        lblNaziv.innerHTML="Naziv:";
        DivNaziv.appendChild(lblNaziv);

        let textNaziv=document.createElement("input");
        textNaziv.className="textdodaj";
        textNaziv.type="text";
        DivNaziv.appendChild(textNaziv);
//Povrsina
        let DivPovrsina=document.createElement("div");
        DivPovrsina.className="DivDodaj";
        DivDodajPadobran.appendChild(DivPovrsina);

        let lblPovrsina=document.createElement("label");
        lblPovrsina.className="labele";
        lblPovrsina.innerHTML="Površina:";
        DivPovrsina.appendChild(lblPovrsina);

        let textPovrsina=document.createElement("input");
        textPovrsina.className="textdodaj";
        textPovrsina.type="text";
        DivPovrsina.appendChild(textPovrsina);
//Tip
        var tipovi=["Krilo", "Okrugla"];

        let DivTipKupole=document.createElement("div");
        DivTipKupole.className="DivDodaj";
        DivDodajPadobran.appendChild(DivTipKupole);

        let lblTipKupole=document.createElement("label");
        lblTipKupole.className="labeledb";
        lblTipKupole.innerHTML="Tip kupole:";
        DivTipKupole.appendChild(lblTipKupole);

        let tipSelect=document.createElement("select");
        tipSelect.className="textdodajdb";
        DivTipKupole.appendChild(tipSelect);
        tipovi.forEach(tip => {
            var option=document.createElement("option");
            option.value = tip;
            option.text=tip;
            tipSelect.appendChild(option);
        });
//
        let tipKupole=DivTipKupole.querySelector("select");

        let btnDodaj=document.createElement("button");
        btnDodaj.onclick=(ev)=>this.ProveriDodajPadobran(host, textNaziv, textPovrsina, tipKupole);
        btnDodaj.className="DugmeDodaj";
        btnDodaj.innerHTML="DODAJ";
        DivDodajPadobran.appendChild(btnDodaj);
    }   
    
    crtajIzbrisiAvion(host){
        host.removeChild(this.kont);
        this.glavniKont(host);

        let DivIzbrisiAvion=document.createElement("div");
        DivIzbrisiAvion.className="DivIzbrisi";
        this.kont.appendChild(DivIzbrisiAvion);

        let naslov=document.createElement("label");
        naslov.innerHTML="Unesite ID aviona";
        naslov.className="naslov";
        DivIzbrisiAvion.appendChild(naslov);


        let DivLabelaA=document.createElement("div");
        DivLabelaA.className="DivLabela";
        DivIzbrisiAvion.appendChild(DivLabelaA);

        let DivDugmeA=document.createElement("div");
        DivDugmeA.className="DivDugme";
        DivIzbrisiAvion.appendChild(DivDugmeA);


        let AvionID=document.createElement("label");
        AvionID.innerHTML="ID Aviona:"
        DivLabelaA.appendChild(AvionID);

        let txtAvionid=document.createElement("input");
        txtAvionid.className="idpolje";
        txtAvionid.type="text";
        DivLabelaA.appendChild(txtAvionid);

        let btnIzbrisi=document.createElement("button");
        btnIzbrisi.className="Dugme";
        btnIzbrisi.innerHTML="IZBRIŠI";
        DivDugmeA.appendChild(btnIzbrisi);
        btnIzbrisi.onclick=(ev)=>this.ProveriIzbrisiAvion(host, txtAvionid);
    }

    crtajDodajAvion(host){
        host.removeChild(this.kont);
        this.glavniKont(host);

        let DivDodajAvion=document.createElement("div");
        DivDodajAvion.className="DivDodaj1";
        this.kont.appendChild(DivDodajAvion);
        
        let lblDodajAvion=document.createElement("label");
        lblDodajAvion.className="naslovDodaj";
        lblDodajAvion.innerHTML="Dodaj avion";
        DivDodajAvion.appendChild(lblDodajAvion);
//Naziv
        let DivNaziv=document.createElement("div");
        DivNaziv.className="DivDodajp";
        DivDodajAvion.appendChild(DivNaziv);

        let lblNaziv=document.createElement("label");
        lblNaziv.className="labele";
        lblNaziv.innerHTML="Naziv:";
        DivNaziv.appendChild(lblNaziv);

        let textNaziv=document.createElement("input");
        textNaziv.className="textdodaj";
        textNaziv.type="text";
        DivNaziv.appendChild(textNaziv);
//Registracija
        let DivRegistracija=document.createElement("div");
        DivRegistracija.className="DivDodaj";
        DivDodajAvion.appendChild(DivRegistracija);

        let lblRegistracija=document.createElement("label");
        lblRegistracija.className="labele";
        lblRegistracija.innerHTML="Registracija:";
        DivRegistracija.appendChild(lblRegistracija);

        let textRegistracija=document.createElement("input");
        textRegistracija.className="textdodaj";
        textRegistracija.type="text";
        DivRegistracija.appendChild(textRegistracija);
//

        let btnDodaj=document.createElement("button");
        btnDodaj.onclick=(ev)=>this.ProveriDodajAvion(host, textNaziv, textRegistracija);
        btnDodaj.className="DugmeDodaj";
        btnDodaj.innerHTML="DODAJ";
        DivDodajAvion.appendChild(btnDodaj);
    }

    OtkaziAktivnost(host, id){
        fetch("https://localhost:5001/Aktivnost/IzbrisiAktivnost/"+id.value,{
            method:"DELETE"
        })
        alert("Aktivnost je uspesno otkazana.");
        host.removeChild(this.kont);
        this.crtajPocetnu(host);
    }

    DodajAktivnost(clanovi, padobrani, avion, visina, vreme, datum, host){

        var clanid=clanovi.options[clanovi.selectedIndex].value;
        var padobranid=padobrani.options[padobrani.selectedIndex].value;

        fetch("https://localhost:5001/Aktivnost/DodajAktivnost/"+datum.value+"/"+vreme.value+"/"+visina.value+"/"+clanid+"/"+padobranid+"/"+avion.value,
        {
            method:"POST"
        }).then(p=>{ 
            fetch("https://localhost:5001/Aktivnost/AktivnostID/"+clanid+"/"+datum.value+"/"+vreme.value,
            {
                method:"GET"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        alert("Aktivnost rezervisana. Broj Vase aktivnosti je: "+data);
                        host.removeChild(this.kont);
                        this.crtajPocetnu(host);
                    })
                }
            })
        })

    }//err

    ProveriAktivnost(clanid, padobranid, textVisina, textVreme, textDatum, host)
    {

        var list = document.getElementsByName("avion");
        var avion;
        for (var i = 0; i < list.length; i++) {
             if (list[i].checked) {
                 avion = list[i];
                 break;
              }
         }

        if(textVisina.value>1000 || textVisina.value>4000 || textVisina.value!=null){
            if(avion.value!=null){
                    if(textVreme.value!=null){
                        if(textDatum.value!=null){
                            this.DodajAktivnost(clanid, padobranid, avion, textVisina, textVreme, textDatum, host)
                        }
                        else{
                            alert("Popubite polje datum");
                        }
                    }
                    else{
                        alert("Popubite polje vreme");
                    }
            }
            else{
                alert("Izaberite avion");
            }
        }
        else{
            alert("Popunite polje visina");
        }
    }

    ProveriIzbrisiClana(host, txtClanid)
    {
        if(txtClanid.value==null)
        {
            alert("Polje ID clana je prazno!");
            this.crtajIzbrisiClana(host);
        }
        else
        {
            this.IzbrisiClana(host, txtClanid);
        }
    }

    IzbrisiClana(host, id){
        fetch("https://localhost:5001/Clan/IzbrisiClana/"+id.value,{
            method:"DELETE"
        })
        alert("Clan je izbrisan.");
        this.crtajAdmina(host);
    }

    ProveriIzbrisiAvion(host, Avion)
    {
        if(Avion.value==null)
        {
            alert("Polje ID aviona je prazno!");
            this.crtajIzbrisiAvion(host);
        }
        else
        {
            this.IzbrisiAvion(host, Avion);
        }
    }

    IzbrisiAvion(host, id){
        fetch("https://localhost:5001/Avion/IzbrisiAvion/"+id.value,{
            method:"DELETE"
        })
        alert("Avion je izbrisan.");
        this.crtajAdmina(host);
    }

    ProveriIzbrisiPadobran(host, pad)
    {
        if(pad.value==null)
        {
            alert("Polje ID padobrana je prazno!");
            this.crtajIzbrisiPadobran(host);
        }
        else
        {
            this.IzbrisiPadobran(host, pad);
        }
    }

    IzbrisiPadobran(host, id){
        fetch("https://localhost:5001/Padobran/IzbrisiPadobran/"+id.value,{
            method:"DELETE"
        })
        alert("Padobran je izbrisan.");
        this.crtajAdmina(host);
    }

    DodajClana(host, textIme, textPrezime, brDozvole, tipDozvle){

        var tip=tipDozvole.options[tipDozvole.selectedIndex].value;

        fetch("https://localhost:5001/Clan/DodajClana/"+textIme.value+"/"+textPrezime.value+"/"+brDozvole.value+"/"+tip,
        {
            method:"POST"
        }).then(s=>{
            if(s.ok){
                    alert("Član je uspešno dodat!");
                    this.crtajAdmina(host);
            }
        })
    }

    ProveriDodajClana(host, textIme, textPrezime, brDozvole, tip){
        if(textIme.value!=null){
            if(textPrezime.value!=null){
               if(brDozvole.value!=null){
                   if(tip!=null){
                        this.DodajClana(host, textIme, textPrezime, brDozvole, tip);
                   }
                   else{
                       alert("Popunite polje tip dozvole");
                   }
                }
                else{
                    alert("Popunite polje broj dozvole!");
                }
            }
            else{
                alert("Popunite polje prezime!");
            }
        }
        else{
            alert("Popunite polje ime!");
        }
    }

    DodajPadobran(host, textNaziv, textPovrsina, tipKupole){

        var tip=tipKupole.options[tipKupole.selectedIndex].value;

        fetch("https://localhost:5001/Padobran/DodajPadobran/"+textNaziv.value+"/"+tip+"/"+textPovrsina.value,
        {
            method:"POST"
        }).then(s=>{
            if(s.ok){
                 alert("Padobran je uspešno dodat!");
                this.crtajAdmina(host);
            }
        })
    }

    ProveriDodajPadobran(host, textNaziv, textPovrsina, tip){
        if(textNaziv.value!=null){
            if(textPovrsina.value!=null){
                if(tip!=null){
                    this.DodajPadobran(host, textNaziv, textPovrsina, tip);
                }
                else{
                    alert("Izaberite tip!");
                }
            }
            else{
                alert("Popunit polje površina!");
            }
        }
        else{
            alert("Popunite polje naziv!");
        }
    }

    DodajAvion(host, textNaziv, textRegistracija){

        fetch("https://localhost:5001/Avion/DodajAvion/"+textNaziv.value+"/"+textRegistracija.value,
        {
            method:"POST"
        }).then(s=>{
            if(s.ok){
                    alert("Avion je uspešno dodat!");
                    this.crtajAdmina(host);
            }
        })
    }

    ProveriDodajAvion(host, textNaziv, textRegistracija){
        if(textNaziv.value!=null){
            if(textRegistracija.value!=null){
                this.DodajAvion(host, textNaziv, textRegistracija);
            }       
            else{
                alert("Popunite polje registracija!");
            }     
        }
        else{
            alert("Popunite polje naziv!");
        }
    }

    IzmeniClana(host, txtClanid, textIme, textPrezime, textBrDozvole, tipDozvole){

        var tip=tipDozvole.options[tipDozvole.selectedIndex].value;

        fetch("https://localhost:5001/Clan/PromeniClana/"+txtClanid.value+"/"+textIme.value+"/"+textPrezime.value+"/"+tip+"/"+textBrDozvole.value,
        {
            method:"PUT"
        }).then(s=>{
            if(s.ok){
                    alert("Član izmenjen!");
                    this.crtajAdmina(host);
            }
        })
    }

    ProveriIzmeniClana(host, txtClanid, textIme, textPrezime, textBrDozvole, tip){
        if(txtClanid.value!=null){
            if(textIme.value!=null){
                if(textPrezime.value!=null){
                    if(textBrDozvole.value!=null){
                        if(tip!=null){
                            this.IzmeniClana(host, txtClanid, textIme, textPrezime, textBrDozvole, tip);
                        }
                        else{
                            alert("Popunite polje tip!");
                        }
                    }
                    else{
                        alert("Popunite polje broj dozvole!");
                    }
                }
                else{
                    alert("Popunite polje prezime!");
                }
            }
            else{
                alert("Popunite polje ime!");
            }
        }
        else{
            alert("Popunite polje ID!");
        }
    }
}