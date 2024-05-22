interface IStartup{
    nome:string;
    settoreFocus:string;
    descrizione:string;
    prodottiServizi:string;
    riceviIncentivo(incentivo: IIncentivo): void;
}

interface IIncentivo{
    codiceIdentificativo:string;
    descrizione:string;
    valoreIncentivo:number;
    criteriEleggibilita:string;
    assegnaAStartup(startup: IStartup): void;
}

interface ICittadino{
    nome:string;
    cognome:string;
    eta:number;
    interessiSportivi:string;
    partecipaAttivita(startup: IStartup): void;
} 


class Startup implements IStartup{
    nome:string;
    settoreFocus:string;
    descrizione:string;
    prodottiServizi:string;

    riceviIncentivo(incentivo: IIncentivo): void{
        console.log("La startup " + this.nome + " ha ricevuto l'incentivo " + incentivo.codiceIdentificativo);
    }
}

class Incentivo implements IIncentivo{
    codiceIdentificativo:string;
    descrizione:string;
    valoreIncentivo:number;
    criteriEleggibilita:string;

    assegnaAStartup(startup: IStartup): void{
        console.log("L'incentivo " + this.codiceIdentificativo + " è stato assegnato alla startup " + startup.nome);
    }
}

class Cittadino implements ICittadino{
    nome:string;
    cognome:string;
    eta:number;
    interessiSportivi:string;

    partecipaAttivita(startup: IStartup): void{
        console.log("Il cittadino " + this.nome + " " + this.cognome + " partecipa all'attività della startup " + startup.nome);
    }
}


let startup1 = new Startup();
startup1.nome = "startup1";
startup1.settoreFocus = "sport";
startup1.descrizione = "descrizione1";
startup1.prodottiServizi = "prodottiServizi1";

let startup2 = new Startup();
startup2.nome = "startup2";
startup2.settoreFocus = "sport";
startup2.descrizione = "descrizione2";
startup2.prodottiServizi = "prodottiServizi2";

let incentivo1 = new Incentivo();
incentivo1.codiceIdentificativo = "incentivo1";
incentivo1.descrizione = "descrizione1";
incentivo1.valoreIncentivo = 1000;
incentivo1.criteriEleggibilita = "criteriEleggibilita1";

let incentivo2 = new Incentivo();
incentivo2.codiceIdentificativo = "incentivo2";
incentivo2.descrizione = "descrizione2";
incentivo2.valoreIncentivo = 2000;
incentivo2.criteriEleggibilita = "criteriEleggibilita2";

let cittadino1 = new Cittadino();
cittadino1.nome = "Mario";
cittadino1.cognome = "Rossi";

let cittadino2 = new Cittadino();
cittadino2.nome = "Luca";
cittadino2.cognome = "Verdi";

incentivo1.assegnaAStartup(startup1);
startup1.riceviIncentivo(incentivo1);

incentivo2.assegnaAStartup(startup2);
startup2.riceviIncentivo(incentivo2);

cittadino1.partecipaAttivita(startup1);
cittadino2.partecipaAttivita(startup2);

