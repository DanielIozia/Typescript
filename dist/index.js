"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startup_1 = require("./startup");
const incentive_1 = require("./incentive");
const citizen_1 = require("./citizen");
let startup1 = new startup_1.Startup("TechStars", "Tecnologia", "Innova nel settore tech", "Sviluppo software");
let incentivo1 = new incentive_1.Incentive("INC123", "Incentivo per startup tecnologiche", 50000, "Settore tecnologia");
incentivo1.assignToStartup(startup1);
startup1.receiveIncentive(incentivo1);
let cittadino1 = new citizen_1.Citizen("Mario", "Rossi", 30, "Calcio");
cittadino1.partecipateActivity(startup1);
// Creazione di altre startup
let startup2 = new startup_1.Startup("GreenEnergy", "Energia Rinnovabile", "Innovazione nelle energie rinnovabili", "Pannelli solari");
let startup3 = new startup_1.Startup("HealthTech", "Salute", "Tecnologie avanzate per la salute", "App per la gestione della salute");
// Creazione di altri incentivi
let incentivo2 = new incentive_1.Incentive("INC456", "Incentivo per startup nel settore enerreceiveico", 100000, "Settore energia rinnovabile");
let incentivo3 = new incentive_1.Incentive("INC789", "Incentivo per startup nel settore salute", 75000, "Settore salute");
// Assegnazione di incentivi alle startup
incentivo2.assignToStartup(startup2);
incentivo3.assignToStartup(startup3);
// Ricezione di incentivi da parte delle startup
startup2.receiveIncentive(incentivo2);
startup3.receiveIncentive(incentivo3);
// Creazione di altri cittadini
let cittadino2 = new citizen_1.Citizen("Anna", "Bianchi", 25, "Ciclismo");
let cittadino3 = new citizen_1.Citizen("Luca", "Verdi", 40, "Tennis");
// Partecipazione dei cittadini alle attività delle startup
cittadino2.partecipateActivity(startup2);
cittadino3.partecipateActivity(startup3);
// Esempio di tentativo di partecipazione a una startup senza incentivo assegnato 
let startup4 = new startup_1.Startup("EduTech", "Istruzione", "Tecnologie per l'istruzione", "Piattaforme e-learning");
let cittadino4 = new citizen_1.Citizen("Carla", "Neri", 22, "Nuoto");
cittadino4.partecipateActivity(startup4); //ERRORE
// Assegnazione di un incentivo a startup4 e nuova partecipazione
let incentivo4 = new incentive_1.Incentive("INC101", "Incentivo per startup nel settore istruzione", 60000, "Settore istruzione");
incentivo4.assignToStartup(startup4);
startup4.receiveIncentive(incentivo4);
cittadino4.partecipateActivity(startup4); // Ora funziona correttamente
let cittadino = new citizen_1.Citizen("Mario", "Rossi", 30, "Calcio");
let startup = new startup_1.Startup("TechStars", "Tecnologia", "Innova nel settore tech", "Sviluppo software");
cittadino.partecipateActivity(startup); // Genera un errore se startup1 non ha ricevuto un incentivo
let startup_0 = new startup_1.Startup("TechStars", "Tecnologia", "Innova nel settore tech", "Sviluppo software");
let cittadino_0 = new citizen_1.Citizen("Marco", "Neri", 30, "Calcio");
cittadino_0.partecipateActivity(startup_0);
