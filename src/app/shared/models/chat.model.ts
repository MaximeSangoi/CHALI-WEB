export class Chat {
    nom: string;
    dateNaissance: Date;
    dateNaissanceConnue: boolean;
    couleurPoil: string;
    fiv: boolean;
    sterilise: boolean;
    tatouage: string;
    puce: boolean;

    constructor(nom:string, 
                dateNaissance:Date, 
                dateNaissanceConnue:boolean, 
                couleurPoil:string,
                fiv:boolean,
                sterilise:boolean,
                tatouage:string,
                puce:boolean) {
        this.nom = nom;
        this.dateNaissance = dateNaissance;
        this.dateNaissanceConnue = dateNaissanceConnue;
        this.couleurPoil = couleurPoil;
        this.fiv = fiv;
        this.sterilise = sterilise;
        this.tatouage = tatouage;
        this.puce = puce;
    }
}