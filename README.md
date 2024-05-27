# Project Management of Startups

This project is a TypeScript application that simulates the management of startups, incentives, and citizen participation.

## Prerequisites

- [Node.js](https://nodejs.org/) installed (recommended LTS version)
- [npm](https://www.npmjs.com/) installed (usually included with Node.js)

## Installation

1. **Clone the repository:**

   ```
   git clone <https://github.com/DanielIozia/Typescript.git>
    ```
    ```
    cd <Typescript>
    ```

 2. **Install dependencies:**

    ```
    npm install 
    ```

  3. **Compilation:**

      ```
      npm run build 
      ```

  4. **Execution:**

      ```
      npm start 
      ```


## Syntax Verification

To verify the syntax correctness of the TypeScript code, run:

```
npm run verify
```
This command executes the TypeScript compiler (tsc) to check for any syntax errors without generating JavaScript files.


## Contents

The project consists of three interfaces and three classes:

- **Interfaces:**
  1. `IStartup`: Defines methods and properties to be implemented by startups.

  2. `IIncentive`: Defines methods and properties to be implemented by incentives.

  3. `ICitizen`: Defines methods and properties to be implemented by citizens.

- **Classes:**
  1. `Startup`: Implements the `IStartup` interface for startups.

  2. `Incentive`: Implements the `IIncentive` interface for incentives

  3. `Citizen`: Implements the `ICitizen` interface for citizens.



## Usage

1. **Creating Instances:**
- Instances of startups, incentives, and citizens are created using the provided classes in the code. Example:

 ```typescript
 // Example TypeScript code for creating instances
let startup1 = new Startup("TechStars", "Tech", "Innovates in the tech sector", "Software development");
let cittadino1 = new Citizen("Mario", "Rossi", 30, "Football");
let incentivo4 = new Incentive("INC101", "Startup's Incentive for istruction", 60000, "Istruction");
// Continue with other attributes...

 ```

2. **Assigning Incentives to Startups:**
- Incentives are assigned to startups using the `assignToStartup` method of the incentive object.

3. **Receiving Incentives by Startups:**
- Startups receive incentives using the `getIncentive` method and display the identifier code of the received incentive.

4. **Citizens Participating in Startup Activities:**
- Citizens can participate in startup activities using the `partecipateActivity` method and display the name of the startup they participate in.

## Example

```typescript
let startup1 = new Startup("TechStars", "Technology", "Innovates in the tech sector", "Software development");
let incentive1 = new Incentive("INC123", "Incentive for technology startups", 50000, "Technology sector");
  
incentive1.assignToStartup(startup1);
startup1.receiveIncentive(incentive1);
  
let citizen1 = new Citizen("Mario", "Rossi", 30, "Football");
citizen1.participateActivity(startup1);

```



## Conclusion
The use of TypeScript and interfaces allows for better code organization and clearer definition of requirements and relationships between different entities of the system.

Finally, the project is open to external contributions, so anyone interested is invited to propose improvements, corrections, or new features to make the system even more effective and versatile.



