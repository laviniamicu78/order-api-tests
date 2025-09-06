NL

# Order API Test Project (Playwright + TypeScript)
Dit mini-project is specifiek gericht op vacatures waarbij kennis van API-, keten- en backendtesten, 
CI/CD, en ervaring met JSON/XML en SQL essentieel zijn.

# Ideeën / Features
API-tests via Playwright API Testing 
Keten-testscenario: Order aanmaken → status controleren 
JSON- én/of XML-payloads voor veelzijdige dataverwerking SQL-check op gesimuleerde 
database met SQLite 
Volledig geautomatiseerde testsuite CI/CD integratie via Azure DevOps (YAML pipeline)

# Installatie incl controleren van de installatie

Volg deze stappen om de ontwikkelomgeving op te zetten:

1. Installeer Node.js
•	Download van https://nodejs.org/en/download/
•	Controleer de installatie:
node -v
npm -v


2. Installeer Playwright
•	Ga naar de projectmap en voer uit:
npm init playwright@latest
•	Controleer of Playwright goed is geïnstalleerd:
npx playwright --version


3. Installeer Visual Studio Code
•	Download van code.visualstudio.com

4. Installeer VS Code-extensies
•	Playwright Test for VSCode
•	ESLint
•	Prettier


Controleer of alles werkt:
node -v          # Node.js versie
npm -v           # NPM versie
npx playwright --version   # Playwright geïnstalleerd
In VS Code:
•	Ga naar Weergave → Extensies → Geïnstalleerd en controleer of alle extensies actief zijn.

# Structuur:
├── tests/                 # Testbestanden: Tests voor order aanmaken 
├── data/                  # JSON & XML testdata
├── sql/                   # SQL-queries voor simulaties
├── azure-pipelines.yml    # CI/CD configuratie voor Azure DevOps
├── playwright.config.ts   # Basisinstellingen voor Playwright 
├── package.json           # NPM dependencies en scripts
├── tsconfig.json          # TypeScript configuratie
└── README.md              # Project uitleg en gebruikersinstructies

# Uitvoeren van de tests:
    Installeer dependencies:
npm install
    Installeer browsers (eenmalig):
npx playwright install --with-deps
    Run alle tests:
npx playwright test
-----------------------------
EN

# Order API Test Project (Playwright + TypeScript)
This mini-project is specifically aimed at roles that require knowledge of API, end-to-end, and backend testing, CI/CD, and experience with JSON/XML and SQL.

# Ideas / Features
API testing via Playwright API Testing
End-to-end test scenario: Create order → check status
JSON and/or XML payloads for flexible data handling
SQL validation on a simulated database with SQLite
Fully automated test suite
CI/CD integration via Azure DevOps (YAML pipeline)

# Installation (including verification)
Follow these steps to set up the development environment:
Install Node.js
Download from: https://nodejs.org/en/download/
Verify installation:
node -v
npm -v

Install Playwright
Navigate to the project folder and run:
npm init playwright@latest

Verify installation:
npx playwright --version

Install Visual Studio Code
Download from: https://code.visualstudio.com

Install VS Code extensions
Playwright Test for VSCode
ESLint
Prettier

Verify installation

Check that everything works:

node -v                   # Node.js version
npm -v                    # NPM version
npx playwright --version  # Playwright installed

In VS Code:
Go to View → Extensions → Installed and confirm that all extensions are active.

Project Structure
├── tests/                # Test files: Order creation tests
├── data/                 # JSON & XML test data
├── sql/                  # SQL queries for simulations
├── azure-pipelines.yml   # CI/CD configuration for Azure DevOps
├── playwright.config.ts  # Playwright base settings
├── package.json          # NPM dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project description and user instructions

Running the tests

Install dependencies:

npm install
Install browsers (one-time):

npx playwright install --with-deps

Run all tests:
npx playwright test
