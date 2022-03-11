export class Padobran{

    constructor(id, naziv, povrsina, tip){
        this.id=id;
        this.naziv=naziv;
        this.povrsina=povrsina;
        this.tip=tip;
    }

    crtaj(host){
        var tr=document.createElement("tr");
        host.appendChild(tr);

        var el=document.createElement("td");
        el.innerHTML=this.naziv;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.povrsina;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.tip;
        tr.appendChild(el);
    }
}