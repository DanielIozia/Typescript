# Sistema di Incentivazione per le Startup

Questo progetto illustra un sistema di incentivazione per le startup, dove le startup possono ricevere incentivi e i cittadini possono partecipare alle attività delle startup.

## Installazione

### Prerequisiti
 Node.js installato sul tuo computer

### Passaggi per l'installazione
1. Clona questo repository sul tuo computer utilizzando il comando: git clone <https://github.com/DanielIozia/Typescript.git>
2. Naviga nella directory del progetto: cd Typescript
3. Installa le dipendenze necessarie utilizzando npm: npm install


## Utilizzo

1. **Creazione delle istanze:**
- Vengono create istanze di startup, incentivi e cittadini utilizzando le classi fornite nel codice. Esempio:

 ```typescript
 // Esempio di codice TypeScript per la creazione di istanze
 let startup1 = new Startup();
 startup1.nome = "startup1";
 startup1.settoreFocus = "sport";
 // Continua con gli altri attributi...
 ```

2. **Assegnazione degli incentivi alle startup:**
- Gli incentivi vengono assegnati alle startup utilizzando il metodo `assegnaAStartup` dell'oggetto incentivo.

3. **Ricezione degli incentivi da parte delle startup:**
- Le startup ricevono gli incentivi utilizzando il metodo `riceviIncentivo` e visualizzando il codice identificativo dell'incentivo ricevuto.

4. **Partecipazione dei cittadini alle attività delle startup:**
- I cittadini possono partecipare alle attività delle startup utilizzando il metodo `partecipaAttivita` e visualizzando il nome della startup a cui partecipano.

## Contenuto

Il progetto è composto da tre interfacce e tre classi:

- **Interfacce:**
  1. `IStartup`: Definisce i metodi e le proprietà che devono essere implementati dalle startup.
  2. `IIncentivo`: Definisce i metodi e le proprietà che devono essere implementati dagli incentivi.
  3. `ICittadino`: Definisce i metodi e le proprietà che devono essere implementati dai cittadini.

- **Classi:**
  1. `Startup`: Implementa l'interfaccia `IStartup` per le startup.
  2. `Incentivo`: Implementa l'interfaccia `IIncentivo` per gli incentivi.
  3. `Cittadino`: Implementa l'interfaccia `ICittadino` per i cittadini.

## Esempio

```typescript
let startup1 = new Startup();
startup1.nome = "startup1";
startup1.settoreFocus = "sport";
startup1.descrizione = "descrizione1";
startup1.prodottiServizi = "prodottiServizi1";

let incentivo1 = new Incentivo();
incentivo1.codiceIdentificativo = "incentivo1";
incentivo1.descrizione = "descrizione1";
incentivo1.valoreIncentivo = 1000;
incentivo1.criteriEleggibilita = "criteriEleggibilita1";

incentivo1.assegnaAStartup(startup1);
startup1.riceviIncentivo(incentivo1);
```



## Conclusioni
L'utilizzo di TypeScript e delle interfacce permette una migliore organizzazione del codice e una maggiore chiarezza nella definizione dei requisiti e delle relazioni tra le diverse entità del sistema.

Infine, il progetto è aperto a contributi esterni, quindi chiunque sia interessato è invitato a proporre miglioramenti, correzioni o nuove funzionalità per rendere il sistema ancora più efficace e versatile.

