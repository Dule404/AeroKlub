import { Clan } from "./Clan.js";
import { Padobran } from "./Padobran.js";
import { Avion } from "./Avion.js";

export class Aktivnost{

    constructor(id, vreme, datum, visina, clanid, avionid, padobranid){
        this.id=id;
        this.vreme=vreme;
        this.datum=datum;
        this.visina=visina;
        this.clan=clanid;
        this.padobran=padobranid;
        this.avion=avionid;
    }

    crtaj(host){

        var tr=document.createElement("tr");
        host.appendChild(tr);

        var el=document.createElement("td");
        el.innerHTML=this.vreme;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.datum;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.visina;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.clan;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.avion;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.padobran;
        tr.appendChild(el);
    }
}