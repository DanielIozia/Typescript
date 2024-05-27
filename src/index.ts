import { Startup } from './startup';
import { Incentive } from './incentive';
import { Citizen } from './citizen';

let startup1 = new Startup("TechStars", "Tecnologia", "Innova nel settore tech", "Sviluppo software");
let incentivo1 = new Incentive("INC123", "Incentivo per startup tecnologiche", 50000, "Settore tecnologia");
  
incentivo1.assignToStartup(startup1);
startup1.getIncentive(incentivo1);
  
let cittadino1 = new Citizen("Mario", "Rossi", 30, "Calcio");
cittadino1.partecipateActivity(startup1);

// Creazione di altre startup
let startup2 = new Startup("GreenEnergy", "Energia Rinnovabile", "Innovazione nelle energie rinnovabili", "Pannelli solari");
let startup3 = new Startup("HealthTech", "Salute", "Tecnologie avanzate per la salute", "App per la gestione della salute");

// Creazione di altri incentivi
let incentivo2 = new Incentive("INC456", "Incentivo per startup nel settore energetico", 100000, "Settore energia rinnovabile");
let incentivo3 = new Incentive("INC789", "Incentivo per startup nel settore salute", 75000, "Settore salute");

// Assegnazione di incentivi alle startup
incentivo2.assignToStartup(startup2);
incentivo3.assignToStartup(startup3);

// Ricezione di incentivi da parte delle startup
startup2.getIncentive(incentivo2);
startup3.getIncentive(incentivo3);

// Creazione di altri cittadini
let cittadino2 = new Citizen("Anna", "Bianchi", 25, "Ciclismo");
let cittadino3 = new Citizen("Luca", "Verdi", 40, "Tennis");

// Partecipazione dei cittadini alle attività delle startup
cittadino2.partecipateActivity(startup2);
cittadino3.partecipateActivity(startup3);

// Esempio di tentativo di partecipazione a una startup senza incentivo assegnato 
let startup4 = new Startup("EduTech", "Istruzione", "Tecnologie per l'istruzione", "Piattaforme e-learning");
let cittadino4 = new Citizen("Carla", "Neri", 22, "Nuoto");

cittadino4.partecipateActivity(startup4); //ERRORE

// Assegnazione di un incentivo a startup4 e nuova partecipazione
let incentivo4 = new Incentive("INC101", "Incentivo per startup nel settore istruzione", 60000, "Settore istruzione");

incentivo4.assignToStartup(startup4);
startup4.getIncentive(incentivo4);
cittadino4.partecipateActivity(startup4); // Ora funziona correttamente

  
let cittadino = new Citizen("Mario", "Rossi", 30, "Calcio");
let startup = new Startup("TechStars", "Tecnologia", "Innova nel settore tech", "Sviluppo software");
cittadino.partecipateActivity(startup); // Genera un errore se startup1 non ha ricevuto un incentivo
