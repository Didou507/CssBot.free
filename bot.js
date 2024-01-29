//node bot.js
//CTRL + X ou C
const puppeteer = require('puppeteer');

const time = generateRandomTime();

const date = generateRandomDate();

const messages = [
"Des hamburgers savoureux à souhait !",
"Les frites sont une véritable gourmandise.",
"Un délice pour les papilles à chaque bouchée.",
"Les saveurs des hamburgers sont inoubliables.",
"Les frites croustillent de bonheur.",
"Des ingrédients de première qualité dans chaque ingrédients.",
"Les produits sont frais et soigneusement préparés.",
"Une expérience culinaire inégalée avec des hamburgers délicieusement savoureux.",
"Les frites sont un véritable enchantement pour les amateurs de gourmandise.",
"Chaque bouchée est une explosion de plaisir pour les papilles.",
"Les saveurs inoubliables des hamburgers font de chaque repas un moment mémorable.",
"Les frites croustillent de bonheur à chaque dégustation.",
"Des ingrédients de première qualité sublimant chaque bouchée.",
"La fraîcheur et la précision dans la préparation rendent chaque plat exceptionnel.",
"La qualité transparaît dès la première bouchée, une expérience gustative incomparable.",
"Un McDonald's qui mise résolument sur l'excellence des produits.",
"La constance de la qualité se démarque à chaque visite.",
"L'hygiène irréprochable crée un environnement propre et accueillant.",
"Un lieu toujours d'une propreté exemplaire, renforçant ainsi l'expérience agréable.",
"La propreté impeccable contribue à une expérience culinaire positive.",
"On se sent à l'aise dans un lieu si propre, ce qui ajoute au plaisir de la dégustation.",
"Des hamburgers d'une qualité exceptionnelle, chaque bouchée est un délice.",
"Les frites sont plus qu'une simple accompagnement, elles sont une véritable tentation.",
"Chaque plat témoigne de l'engagement envers des ingrédients frais et soigneusement préparés.",
"L'excellence des produits se reflète dans chaque détail de l'expérience.",
"La qualité constante fait de ce McDonald's une référence en matière de restauration rapide.",
"Un établissement où la satisfaction du client est élevée au rang de priorité absolue.",
"Une expérience qui allie saveurs exquises et environnement impeccable.",
"On ressent la qualité dès la première bouchée.",
"Un McDo qui mise sur l'excellence des produits.",
"La qualité se démarque à chaque fois",
"L'hygiène est impeccable, un environnement propre.",
"Un lieu toujours d'une propreté exemplaire.",
"Les desserts sont une véritable douceur pour clôturer le repas.",
"Le service rapide et efficace rend l'expérience encore plus agréable.",
"Les menus offrent une variété appréciable pour tous les goûts.",
"Les boissons sont fraîches et parfaitement assorties aux repas.",
"L'ambiance chaleureuse crée un cadre convivial pour partager un repas.",
"Les options végétariennes sont délicieuses, offrant un choix diversifié.",
"Le personnel amical et souriant ajoute à l'atmosphère positive du lieu.",
"Les promotions régulières permettent de profiter de délicieux repas à des prix avantageux.",
"La propreté renforce l'expérience agréable.",
"On se sent à l'aise dans un lieu si propre.",
];
const SELECTORS = {
  cr: '.cr',
  btnContinue: '#btncontinue',
  btnDisabled: '#btnDisabled',
  btnStartOrder: '#btnstartorder',
  txtRestaurantNumber: '#txtrestaurantnumber',
  txtNextRest: '#btnnextrest',
  txtDateOfVisit: '#txtdateofvisit',
  txtOrderNumberSplit: '#txtordernumbersplit',
  txtRegNo: '#txtregno',
  btnNextOrder1: '#btnnextorder1',
  txtTime: '#txttime',
  btnNextDate: '#btnnextDate',
  labelSurvey1: '#form1 > div.msections.msection7 > section:nth-child(2) > div > div > div.col-md-12.survey-answer-box > div:nth-child(1) > label',
  labelSurvey2: '#dvBindSurveyQuestions > div:nth-child(1) > label',
  btnNextSurvey: '#btnnext',
  txtMessage: 'textarea',
  btnsourire : '#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4',
  btnSkip: '#form1 > div.msections.msection8 > header > div > div.skip-btn'
};

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

function generateRandomDate() {
  const today = new Date();
  const days = Math.floor(Math.random() * 3); // entre 0 et 3
  const randomDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - days);
  const dd = String(randomDate.getDate()).padStart(2, '0');
  const mm = String(randomDate.getMonth() + 1).padStart(2, '0'); // +1 car janvier = 0
  const yyyy = randomDate.getFullYear();
  return `${dd}${mm}${yyyy}`;
}

function generateRandomTime() {
  const hours = Math.floor(Math.random() * 11) + 9;
  const minutes = Math.floor(Math.random() * 12) * 5;
  const timeStr = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
  return timeStr;
}

const fs = require('fs');
const path = require('path');
const today = new Date();
const day = today.getDate().toString().padStart(2, '0');
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const year = today.getFullYear().toString();
const foldername = `${day}-${month}-${year}`;
const folderpath = path.join(__dirname, 'CSS', foldername);
if (!fs.existsSync(folderpath)) {
  fs.mkdirSync(folderpath, { recursive: true });
}

let index = 1;
let count = 0;
let countTotalExecution = 0;

function Totalexecution() {
  ++countTotalExecution;
}
function Victory() {
  ++countTotalExecution;
  ++count;
  console.log("Le script a fonctionné " + (count) + " fois sur " + (countTotalExecution) + " !");
}
console.clear();
console.log("Lancement du script ! Appuyez sur Ctrl+C pour l'interrompre.\n")

async function runPuppeteerLoop() {
  await sleep(1000);
async function runPuppeteer() {
  try {
   const browser = await puppeteer.launch({headless:'new' ,args: ['--no-sandbox','--no-first-run','--incognito']});
   const page = await browser.newPage(); 
   await page.setViewport({ width: 1200,height: 1200,deviceScaleFactor: 1,});
   await page.goto('https://re.rateurvisit.com')
   //await page.waitForNavigation()
   await sleep(2500);
   await page.click(".cr");
   await sleep(2500);
   await page.click("#btncontinue");
   await sleep(2500);
   await page.click("#btnDisabled");
   await sleep(2500); 
   await page.click("#btnstartorder");
   await sleep(2500);
   await page.type('#txtrestaurantnumber', "25001971");
   //await page.type('#txtrestaurantnumber', "25000974"); //pour tester erreur 
   await sleep(2500);
   await page.click("#btnnextrest");
   await sleep(2500);
   await page.type('#txtdateofvisit', generateRandomDate());
   await sleep(2500);
   const orderNumber = Math.floor(Math.random() * 100);
   await page.type('#txtordernumbersplit', orderNumber.toString().padStart(2, "0"));
   await sleep(2500);
   await page.type('#txtregno', "1");
   await sleep(2500);
   await page.click("#btnnextorder1");
   await sleep(2500);
   await page.click('#txtdateofvisit');
   await page.type('#txtdateofvisit', date);
   await sleep(2500);
   await page.click('#txttime');
   await page.type('#txttime', time);
   await sleep(2500);
   await page.click("#btnnextDate");
   await sleep(2800);
   await page.click("#form1 > div.msections.msection7 > section:nth-child(2) > div > div > div.col-md-12.survey-answer-box > div:nth-child(1) > label");
   await sleep(2800);
   await page.click("#dvBindSurveyQuestions > div:nth-child(1) > label");
   await sleep(2800);
   await page.click("#btnnext");
   await sleep(2500);
   await page.click("#dvBindSurveyQuestions > div:nth-child(1) > label");
   await sleep(2500);
   await page.click("#btnnext");
   await sleep(2500);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2500);
   await page.click("#btnnext");
   await sleep(2500);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2500);
   await page.click("#btnnext");
   await sleep(2500);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2500);
   await page.click("#btnnext");
   await sleep(2500);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2500);
   await page.click("#btnnext");
   await sleep(2500);
   await page.click("#dvBindSurveyQuestions > div > div.like-btn.rating-option.mratingslide_0");
   await sleep(2500);
   await page.click("#btnnext");
   await sleep(2500);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2500);
   await page.click("#btnnext");
   await sleep(2500);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2500);
   await page.click("#btnnext");
   await sleep(2500);
   await page.click("#sad-btn");
   await sleep(2500);
   await page.click("#btnnext");
   await sleep(2500);
   await page.type('textarea', messages[Math.floor(Math.random() * messages.length)]);
   await sleep(2500);
   await page.click("#btnnext");
   await sleep(2500);
   await page.click("#form1 > div.msections.msection8 > header > div > div.skip-btn");
   await sleep(2500);
   await page.click("#form1 > div.msections.msection8 > header > div > div.skip-btn");
   await sleep(1800);
   
   while (true) {
    const filename = `${index}_${day}-${month}-${year}.png`;
    const filepath = path.join(folderpath, filename);
  
    if (fs.existsSync(filepath)) {
      index++;
    } else {
      await page.screenshot({ path: filepath, fullPage: true });
      break;
    }
  }
    Victory();  
    await browser.close()
    await browser.disconnect();
  } catch(error) {
    console.log(`\nUne erreur est survenue : ${error.message}\nLe programme se relance automatiquement.\n`);
    await sleep(1000);
    Totalexecution();
    await browser.close()
    await browser.disconnect();
    await runPuppeteer();
  }
}
  const endTime = Date.now() + (25000 * 60 * 1000); 
  while (Date.now() < endTime) {
    try {
      await runPuppeteer();
    } catch (err) {
      Totalexecution();
      continue;
    }
  }
  console.log("Fin TOTAL de l'execution du script !!!");
  process.exit();
}

runPuppeteerLoop();