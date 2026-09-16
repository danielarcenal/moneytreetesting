##### Clone the Repository #####
git clone https://github.com/danielarcenal/moneytreetesting.git

##### Initialize Playwright #####
npm init playwright@latest

Instructions:
-TypeScript or JavaScript? TypeScript (highly recommended for Playwright)
-Where to put your end-to-end tests? tests
-Add a GitHub Actions workflow? Yes (This automatically adds a .github/workflows/playwright.yml file so your tests run on GitHub every time you push code!)
-Install Playwright browsers? Yes

##### Adding/Push changes #####
git add .
git commit -m "Initialize Playwright with TypeScript and GitHub Actions"
git push origin main


##### Initializing BDD #####
npm install -D playwright-bdd
mkdir tests
mkdir features
mkdir steps

##### Initializing BDD #####
-Playwright command: execute in root folder
npx bddgen && npx playwright test .features-gen/tests/features/<filename>.feature.spec.js --project=chromium --headed
-Example
npx bddgen && npx playwright test .features-gen/tests/features/suprea.feature.spec.js --project=chromium --headed

