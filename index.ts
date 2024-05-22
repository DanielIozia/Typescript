interface IStartup {
    nome: string;
    settoreFocus: string;
    descrizione: string;
    prodottiServizi: string;
    riceviIncentivo(incentivo: IIncentivo): void;
    assegnato: boolean;
  }
  
  interface IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valoreIncentivo: number;
    criteriEleggibilita: string;
    assegnaAStartup(startup: IStartup): void;
  }
  
  interface ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string;
    partecipaAttivita(startup: IStartup): void;
  }
  
  class Startup implements IStartup {
    nome: string;
    settoreFocus: string;
    descrizione: string;
    prodottiServizi: string;
    assegnato: boolean = false;
  
    constructor(nome: string, settoreFocus: string, descrizione: string, prodottiServizi: string) {
      this.nome = nome;
      this.settoreFocus = settoreFocus;
      this.descrizione = descrizione;
      this.prodottiServizi = prodottiServizi;
    }
  
    riceviIncentivo(incentivo: IIncentivo): void {
        if (this.assegnato) {
            console.log("La startup " + this.nome + " ha ricevuto l'incentivo " + incentivo.codiceIdentificativo );
        } 
        else {
            console.log("ERROR --- Alla startup " + this.nome + " non è stato assegnato l'incentivo " + incentivo.codiceIdentificativo + " --- ERROR");
        }
    }
}
  
  class Incentivo implements IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valoreIncentivo: number;
    criteriEleggibilita: string;
  
    constructor(codiceIdentificativo: string, descrizione: string, valoreIncentivo: number, criteriEleggibilita: string) {
      this.codiceIdentificativo = codiceIdentificativo;
      this.descrizione = descrizione;
      this.valoreIncentivo = valoreIncentivo;
      this.criteriEleggibilita = criteriEleggibilita;
    }
  
    assegnaAStartup(startup: IStartup): void {
        startup.assegnato = true;
        console.log( "L'incentivo " + this.codiceIdentificativo + " è stato assegnato alla startup " + startup.nome );
    }
  }
  
  class Cittadino implements ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string;
  
    constructor(nome: string, cognome: string, eta: number, interessiSportivi: string) {
      this.nome = nome;
      this.cognome = cognome;
      this.eta = eta;
      this.interessiSportivi = interessiSportivi;
    }
  
    partecipaAttivita(startup: IStartup): void {
        if (startup.assegnato) {
            console.log( "Il cittadino " + this.nome + " " + this.cognome + " partecipa all'attività della startup " + startup.nome );
        } 
        else {
            console.log( "ERROR --- Il cittadino " + this.nome + " " + this.cognome + 
            " non può partecipare all'attività della startup " + startup.nome + " --- ERROR" );
        }
    }
  }
  
  
  let startup1 = new Startup("TechStars", "Tecnologia", "Innova nel settore tech", "Sviluppo software");
  let incentivo1 = new Incentivo("INC123", "Incentivo per startup tecnologiche", 50000, "Settore tecnologia");
  
  incentivo1.assegnaAStartup(startup1);
  startup1.riceviIncentivo(incentivo1);
  
  let cittadino1 = new Cittadino("Mario", "Rossi", 30, "Calcio");
  cittadino1.partecipaAttivita(startup1);

// Creazione di altre startup
let startup2 = new Startup("GreenEnergy", "Energia Rinnovabile", "Innovazione nelle energie rinnovabili", "Pannelli solari");
let startup3 = new Startup("HealthTech", "Salute", "Tecnologie avanzate per la salute", "App per la gestione della salute");

// Creazione di altri incentivi
let incentivo2 = new Incentivo("INC456", "Incentivo per startup nel settore energetico", 100000, "Settore energia rinnovabile");
let incentivo3 = new Incentivo("INC789", "Incentivo per startup nel settore salute", 75000, "Settore salute");

// Assegnazione di incentivi alle startup
incentivo2.assegnaAStartup(startup2);
incentivo3.assegnaAStartup(startup3);

// Ricezione di incentivi da parte delle startup
startup2.riceviIncentivo(incentivo2);
startup3.riceviIncentivo(incentivo3);

// Creazione di altri cittadini
let cittadino2 = new Cittadino("Anna", "Bianchi", 25, "Ciclismo");
let cittadino3 = new Cittadino("Luca", "Verdi", 40, "Tennis");

// Partecipazione dei cittadini alle attività delle startup
cittadino2.partecipaAttivita(startup2);
cittadino3.partecipaAttivita(startup3);

// Esempio di tentativo di partecipazione a una startup senza incentivo assegnato 
let startup4 = new Startup("EduTech", "Istruzione", "Tecnologie per l'istruzione", "Piattaforme e-learning");
let cittadino4 = new Cittadino("Carla", "Neri", 22, "Nuoto");

cittadino4.partecipaAttivita(startup4); //ERRORE

// Assegnazione di un incentivo a startup4 e nuova partecipazione
let incentivo4 = new Incentivo("INC101", "Incentivo per startup nel settore istruzione", 60000, "Settore istruzione");

incentivo4.assegnaAStartup(startup4);
startup4.riceviIncentivo(incentivo4);
cittadino4.partecipaAttivita(startup4); // Ora funziona correttamente

  
let cittadino = new Cittadino("Mario", "Rossi", 30, "Calcio");
cittadino1.partecipaAttivita(startup1); // Genera un errore se startup1 non ha ricevuto un incentivo
