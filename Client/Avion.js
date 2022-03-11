export class Avion{

    constructor(id, registracija, naziv){
        this.id=id;
        this.registracija=registracija;
        this.naziv=naziv;
    }

    crtaj(host){
        var tr=document.createElement("tr");
        host.appendChild(tr);

        var el=document.createElement("td");
        el.innerHTML=this.naziv;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.registracija;
        tr.appendChild(el);
    }
}