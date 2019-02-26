export class Chat {
    id: string;
    nom: string;
    dateNaissance: Date;
    dateNaissanceConnue: boolean;
    couleurPoil: string;
    fiv: boolean;
    sterilise: boolean;
    tatouage: string;
    puce: boolean;

    constructor(id: string,
        nom: string,
        dateNaissance: Date,
        dateNaissanceConnue: boolean,
        couleurPoil: string,
        fiv: boolean,
        sterilise: boolean,
        tatouage: string,
        puce: boolean) {
        this.id = id;
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