export class Clan{

    constructor(id, ime, prezime, brojDozvole, tipDozvole){
        this.id=id;
        this.ime=ime;
        this.prezime=prezime;
        this.brojDozvole=brojDozvole;
        this.tipDozvole=tipDozvole;
    }

    crtaj(host){
        var tr=document.createElement("tr");
        host.appendChild(tr);

        var el=document.createElement("td");
        el.innerHTML=this.ime;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.prezime;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.brojDozvole;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.tipDozvole;
        tr.appendChild(el);
    }
}