//node bot.js
//CTRL + X ou C
const puppeteer = require('puppeteer');

const time = generateRandomTime();
const date = generateRandomDate();

const messages = [
  "Excellent c'était divin !!!",
  "J'ai adoré !",
  "Vraiment délicieux.",
  "Je recommande vivement.",
  "Super endroit, super nourriture.",
  "Belle expérience culinaire.",
  "Je suis ravi, merci !",
  "Les saveurs étaient incroyables.",
  "Un vrai régal.",
  "C'était génial, merci beaucoup !"
];

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
async function runPuppeteer() {
  try {
   const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox','--no-sandbox','--no-first-run','--incognito']});
   const page = await browser.newPage(); 
   await page.setViewport({ width: 1200,height: 1200,deviceScaleFactor: 1,});
   await page.goto('https://re.rateurvisit.com')
   await sleep(2600);
   await page.click(".cr");
   await sleep(2600);
   await page.click("#btncontinue");
   await sleep(2600);
   await page.click("#btnDisabled");
   await sleep(2600);
   await page.click("#btnstartorder");
   await sleep(2600);
   await page.type('#txtrestaurantnumber', "25001971");
   //await page.type('#txtrestaurantnumber', "25001962");
   await sleep(2600);
   await page.click("#btnnextrest");
   await sleep(2600);
   await page.type('#txtdateofvisit', generateRandomDate());
   await sleep(2600);
   const orderNumber = Math.floor(Math.random() * 100);
   await page.type('#txtordernumbersplit', orderNumber.toString().padStart(2, "0"));
   await sleep(2600);
   await page.type('#txtregno', "1");
   await sleep(2600);
   await page.click("#btnnextorder1");
   await sleep(2600);
   await page.click('#txtdateofvisit');
   await page.type('#txtdateofvisit', date);
   await sleep(2600);
   await page.click('#txttime');
   await page.type('#txttime', time);
   await sleep(2600);
   await page.click("#btnnextDate");
   await sleep(3000);
   await page.click("#form1 > div.msections.msection7 > section:nth-child(2) > div > div > div.col-md-12.survey-answer-box > div:nth-child(1) > label");
   await sleep(3000);
   await page.click("#dvBindSurveyQuestions > div:nth-child(1) > label");
   await sleep(3000);;
   await page.click("#btnnext");
   await sleep(2600);
   await page.click("#dvBindSurveyQuestions > div:nth-child(1) > label");
   await sleep(2600);
   await page.click("#btnnext");
   await sleep(2600);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2600);
   await page.click("#btnnext");
   await sleep(2600);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2600);
   await page.click("#btnnext");
   await sleep(2600);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2600);
   await page.click("#btnnext");
   await sleep(2600);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2600);
   await page.click("#btnnext");
   await sleep(2600);
   await page.click("#dvBindSurveyQuestions > div > div.like-btn.rating-option.mratingslide_0");
   await sleep(2600);
   await page.click("#btnnext");
   await sleep(2600);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2600);
   await page.click("#btnnext");
   await sleep(2600);
   await page.click("#dvBindSurveyQuestions > div > div.rating-option.mratingslide_4");
   await sleep(2600);
   await page.click("#btnnext");
   await sleep(2600);
   await page.click("#sad-btn");
   await sleep(2600);
   await page.click("#btnnext");
   await sleep(2600);
   await page.type('textarea', messages[Math.floor(Math.random() * messages.length)]);
   await sleep(2600);
   await page.click("#btnnext");
   await sleep(2600);
   await page.click("#form1 > div.msections.msection8 > header > div > div.skip-btn");
   await sleep(2600);
   await page.click("#form1 > div.msections.msection8 > header > div > div.skip-btn");
   await sleep(1700);
   
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
    console.log(`\nUne erreur est survenue : ${error.message}\nLe programme se relance automatiquement dans 1 seconde.\n`);
    await sleep(1000);
    Totalexecution();
    await browser.close()
    await browser.disconnect();
    await runPuppeteer();
  }
}
  const endTime = Date.now() + (120 * 60 * 1000); 
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
