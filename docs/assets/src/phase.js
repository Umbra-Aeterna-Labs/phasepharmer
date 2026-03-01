let mF = function () {
  return {
    s: Math.sin,
    c: Math.cos,
    p: Math.pow,
    pi: Math.PI,
    r: Math.round,
    fl: Math.floor,
    ac: Math.acos,
    at: Math.atan,
    as: Math.asin,
    dTR: degToRads,
    rA: reducAng
  }
}();

let moonPhases = [
  '🌑New Moon🌑'
  , '🌒Waxing Crescent🌒'
  , '🌓First Quarter🌓'
  , '🌔Waxing Gibbous🌔'
  , '🌕Full Moon🌕'
  , '🌖Waning Gibbous🌖'
  , '🌗Last Quarter🌗'
  , '🌘Waning Crescent🌘'
];

let moonPhasesTxt = [
  'New Moon'
  , 'Waxing Crescent'
  , 'First Quarter'
  , 'Waxing Gibbous'
  , 'Full Moon'
  , 'Waning Gibbous'
  , 'Last Quarter'
  , 'Waning Crescent'
];

let subs = [
  'Organs',
  'Limbs',
  'Exotic'
];

let boxMods = [
  [0.80, '✓ 20% shorter grow time'],
  [0.60, '✓ 40% shorter grow time'],
  [1.00, '✓ 15% chance bonus shrooms'],
  [1.00, '✓ 33% chance bonus shrooms'],
  [1.00, '✓ +100% harvest size'],
  [1.00, '✓ +200% harvest size'],
  [1.00, '✓ 33% more xp per shroom'],
  [1.25, '✗ 25% longer grow time'],
  [1.50, '✗ 50% longer grow time'],
  [2.00, '✗ 100% longer grow time'],
  [1.00, '✗ 50% less xp per shroom'],
  [1.00, '✗ 2 substrates required'],
  [1.00, '✗ 1 strange dirt required'],
  [1.00, '☾ No additional effects'],
  [1.00, '✗ Single harvest'],
  [1.00, '✓ Multiple harvests']
];

let boxes = [
  ['Mushroom Box', [boxMods[13], boxMods[14]]],
  ['Lucky Boxes', [boxMods[3], boxMods[15]]],
  ['Practice Boxes', [boxMods[6], boxMods[7], boxMods[15]]],
  ['Epic Crop Box', [boxMods[9], boxMods[5], boxMods[11], boxMods[14]]],
  ['High Yield Box', [boxMods[8], boxMods[11], boxMods[12], boxMods[4], boxMods[2], boxMods[15]]],
  ['Fast Box', [boxMods[0], boxMods[10], boxMods[14]]],
  ['Very Fast Box', [boxMods[1], boxMods[10], boxMods[14]]]
];

/*
let mus = [
  ['Parasol', 2, subs[0], 'assets/img/parasol.png', [4, 7], [0, 3, 0, 3], 0],                    //0
  ['Mycena', 3, subs[1], 'assets/img/mycena.png', [1, 2], [5, 6, 5, 6], 5],                      //1
  ['Boletus', 4, subs[2], 'assets/img/boletus.png', [0, 5], [1, 4, 1, 4], 10],                   //2
  ['Field', 5, subs[0], 'assets/img/field.png', [3, 6], [2, 7, 2, 7], 15],                       //3
  ['Goblin Puffball', 5, subs[2], 'assets/img/goblin.png', [0, 3], [4, 7, 4, 7], 20],            //4
  ['Blusher', 6, subs[2], 'assets/img/blusher.png', [0, 5], [1, 4, 1, 4], 20],                   //5
  ['Milk Cap', 7, subs[0], 'assets/img/milk.png', [4, 7], [0, 3, 0, 3], 25],                     //6
  ['Blastcap', 8, subs[0], 'assets/img/blastcap.png', [4, 5], [0, 1, 0, 1], 25],                 //7
  ['Blood', 8, subs[1], 'assets/img/blood.png', [1, 6], [2, 3, 2, 3], 30],                       //8
  ['Coral', 9, subs[1], 'assets/img/coral.png', [2, 3], [6, 7, 6, 7], 35],                       //9
  ['Iocaine', 10, subs[1], 'assets/img/iocaine.png', [1, 2], [5, 6, 5, 6], 40],                  //10
  ['Groxmax', 11, subs[0], 'assets/img/groxmax.png', [3, 6], [2, 7, 2, 7], 47],                  //11
  ['False Agaric', 12, subs[1], 'assets/img/false.png', [6, 7], [2, 3, 2, 3], 50],               //12
  ['Porcini', 12, subs[2], 'assets/img/porcini.png', [4, 5], [0, 1, 0, 1], 55],                  //13
  ['Black Foot Morel', 13, subs[2], 'assets/img/black.png', [0, 7], [6, 6, 6, 6], 63],           //14
  ['Wizard\'s Mushroom', 13, subs[0], 'assets/img/wizards.png', [1, 2], [3, 6, 3, 6], 75],       //15
  ['Pixie\'s Parasol', 14, subs[0], 'assets/img/pixies.png', [2, 3], [6, 7, 6, 7], 70],          //16
  ['Fly Amanita', 15, subs[0], 'assets/img/false.png', [1, 4], [0, 5, 0, 5], 75],                //17
  ['Charged Mycelium', 16, subs[2], 'assets/img/charged.png', [0, 3], [4, 7, 4, 7], 80],         //18
  ['Granamurch', 17, subs[0], 'assets/img/granamurch.png', [0, 4], [2, 5, 6, 7], 85],            //19
  ['Ghostshroom', 18, subs[2], 'assets/img/ghostshroom.png', [1, 2], [1, 2, 3, 6], 90],          //20
  ['Mortaferus', 19, subs[0], 'assets/img/mortaferus.png', [5, 6], [1, 1, 1, 1], 95],            //19
];
*/

let mus = [
  ['Parasol', 2, subs[0], 'assets/img/parasol.png',               [4, 7], [0, 3], 0],         //0
  ['Mycena', 3, subs[1], 'assets/img/mycena.png',                 [1, 2], [5, 6], 5],         //1
  ['Boletus', 4, subs[2], 'assets/img/boletus.png',               [0, 5], [1, 4], 10],        //2
  ['Field', 5, subs[0], 'assets/img/field.png',                   [3, 6], [2, 7], 15],        //3
  ['Goblin Puffball', 5, subs[2], 'assets/img/goblin.png',        [0, 3], [4, 7], 20],        //4
  ['Blusher', 6, subs[2], 'assets/img/blusher.png',               [0, 5], [1, 4], 20],        //5
  ['Milk Cap', 7, subs[0], 'assets/img/milk.png',                 [4, 7], [0, 3], 25],        //6
  ['Blastcap', 8, subs[0], 'assets/img/blastcap.png',             [4, 5], [0, 1], 25],        //7
  ['Blood', 8, subs[1], 'assets/img/blood.png',                   [1, 6], [2, 3], 30],        //8
  ['Coral', 9, subs[1], 'assets/img/coral.png',                   [2, 3], [6, 7], 35],        //9
  ['Iocaine', 10, subs[1], 'assets/img/iocaine.png',              [1, 2], [5, 6], 40],        //10
  ['Groxmax', 11, subs[0], 'assets/img/groxmax.png',              [3, 6], [2, 7], 47],        //11
  ['False Agaric', 12, subs[1], 'assets/img/false.png',           [6, 7], [2, 3], 50],        //12
  ['Porcini', 12, subs[2], 'assets/img/porcini.png',              [4, 5], [0, 1], 55],        //13
  ['Black Foot Morel', 13, subs[2], 'assets/img/black.png',       [0, 7], [6, 6], 63],        //14
  ['Wizard\'s Mushroom', 13, subs[0], 'assets/img/wizards.png',   [1, 2], [3, 6], 75],        //15
  ['Pixie\'s Parasol', 14, subs[0], 'assets/img/pixies.png',      [2, 3], [6, 7], 70],        //16
  ['Fly Amanita', 15, subs[0], 'assets/img/false.png',            [1, 4], [0, 5], 75],        //17
  ['Charged Mycelium', 16, subs[2], 'assets/img/charged.png',     [0, 3], [4, 7], 80],        //18
  ['Granamurch', 17, subs[0], 'assets/img/granamurch.png',        [0, 4], [2, 5], 85],        //19
  ['Granamurch', 17, subs[0], 'assets/img/granamurch.png',        [0, 4], [6, 7], 85],        //19b
  ['Ghostshroom', 18, subs[2], 'assets/img/ghostshroom.png',      [1, 2], [1, 2], 90],        //20
  ['Ghostshroom', 18, subs[2], 'assets/img/ghostshroom.png',      [1, 2], [3, 6], 90],        //20b
  ['Mortaferus', 19, subs[0], 'assets/img/mortaferus.png',        [5, 6], [1, 1], 95],        //21
];

let robustly = [[
  // ### NEW MOON ###
  mus[2] /* Boletus_2 */,
  mus[4] /* Goblin Puffball_4 */,
  mus[5] /* Blusher_5 */,
  mus[14] /* Black Foot Morel_14 */,
  mus[18] /* Charged Mycelium_18 */], [
  // ### WAXING CRESCENT ###
  mus[1] /* Mycena_1 */,
  mus[8] /* Blood_8 */,
  mus[10] /* Iocaine_10 */,
  mus[15] /* Wizard's Mushroom_15 */,
  mus[17] /* Fly Amanita_17 */], [
  // ### FIRST QUARTER ###
  mus[1] /* Mycena_1 */,
  mus[9] /* Coral_9 */,
  mus[10] /* Iocaine_10 */,
  mus[15] /* Wizard's Mushroom_15 */,
  mus[16] /* Pixie's Parasol_16 */], [
  // ### WAXING GIBBOUS ###
  mus[3] /* Field_3 */,
  mus[4] /* Goblin Puffball_4 */,
  mus[9] /* Coral_9 */,
  mus[11] /* Groxmax_11 */,
  mus[16] /* Pixie's Parasol_16 */,
  mus[18] /* Charged Mycelium_18 */], [
  // ### FULL MOON ###
  mus[0] /* Parasol_0 */,
  mus[6] /* Milk Cap_6 */,
  mus[7] /* Blastcap_7 */,
  mus[13] /* Porcini_13 */,
  mus[17] /* Fly Amanita_17 */], [
  // ### WANING GIBBOUS ###
  mus[2] /* Boletus_2 */,
  mus[5] /* Blusher_5 */,
  mus[7] /* Blastcap_7 */,
  mus[13] /* Porcini_13 */], [
  // ### LAST QUARTER ###
  mus[3] /* Field_3 */,
  mus[8] /* Blood_8 */,
  mus[11] /* Groxmax_11 */,
  mus[12] /* False Agaric_12 */], [
  // ### WANING CRESCENT ###
  mus[0] /* Parasol_0 */,
  mus[6] /* Milk Cap_6 */,
  mus[12] /* False Agaric_12 */,
  mus[14] /* Black Foot Morel_14 */]
];

let decently = [[
  // ### NEW MOON ###
  mus[1] /* Mycena_1 */,
  mus[3] /* Field_3 */,
  mus[8] /* Blood_8 */,
  mus[9] /* Coral_9 */,
  mus[10] /* Iocaine_10 */,
  mus[11] /* Groxmax_11 */,
  mus[12] /* False Agaric_12 */,
  mus[15] /* Wizard's Mushroom_15 */,
  mus[16] /* Pixie's Parasol_16 */], [
  // ### WAXING CRESCENT ###
  mus[0] /* Parasol_0 */,
  mus[3] /* Field_3 */,
  mus[4] /* Goblin Puffball_4 */,
  mus[6] /* Milk Cap_6 */,
  mus[7] /* Blastcap_7 */,
  mus[9] /* Coral_9 */,
  mus[11] /* Groxmax_11 */,
  mus[12] /* False Agaric_12 */,
  mus[14] /* Black Foot Morel_14 */,
  mus[16] /* Pixie's Parasol_16 */], [
  // ### FIRST QUARTER ###
  mus[0] /* Parasol_0 */,
  mus[2] /* Boletus_2 */,
  mus[4] /* Goblin Puffball_4 */,
  mus[5] /* Blusher_5 */,
  mus[6] /* Milk Cap_6 */,
  mus[7] /* Blastcap_7 */,
  mus[13] /* Porcini_13 */,
  mus[14] /* Black Foot Morel_14 */,
  mus[17] /* Fly Amanita_17 */,
  mus[18] /* Charged Mycelium_18 */], [
  // ### WAXING GIBBOUS ###
  mus[1] /* Mycena_1 */,
  mus[2] /* Boletus_2 */,
  mus[5] /* Blusher_5 */,
  mus[7] /* Blastcap_7 */,
  mus[8] /* Blood_8 */,
  mus[10] /* Iocaine_10 */,
  mus[13] /* Porcini_13 */,
  mus[17] /* Fly Amanita_17 */], [
  // ### FULL MOON ###
  mus[1] /* Mycena_1 */,
  mus[3] /* Field_3 */,
  mus[8] /* Blood_8 */,
  mus[9] /* Coral_9 */,
  mus[10] /* Iocaine_10 */,
  mus[11] /* Groxmax_11 */,
  mus[12] /* False Agaric_12 */,
  mus[16] /* Pixie's Parasol_16 */,
  mus[15] /* Wizard's Mushroom_15 */], [
  // ### WANING GIBBOUS ###
  mus[0] /* Parasol_0 */,
  mus[3] /* Field_3 */,
  mus[4] /* Goblin Puffball_4 */,
  mus[6] /* Milk Cap_6 */,
  mus[9] /* Coral_9 */,
  mus[11] /* Groxmax_11 */,
  mus[12] /* False Agaric_12 */,
  mus[14] /* Black Foot Morel_14 */,
  mus[16] /* Pixie's Parasol_16 */,
  mus[15] /* Wizard's Mushroom_15 */,
  mus[18] /* Charged Mycelium_18 */], [
  // ### LAST QUARTER ###
  mus[0] /* Parasol_0 */,
  mus[2] /* Boletus_2 */,
  mus[4] /* Goblin Puffball_4 */,
  mus[5] /* Blusher_5 */,
  mus[6] /* Milk Cap_6 */,
  mus[7] /* Blastcap_7 */,
  mus[13] /* Porcini_13 */,
  mus[14] /* Black Foot Morel_14 */,
  mus[17] /* Fly Amanita_17 */,
  mus[18] /* Charged Mycelium_18 */], [
  // ### WANING CRESCENT ###
  mus[1] /* Mycena_1 */,
  mus[2] /* Boletus_2 */,
  mus[5] /* Blusher_5 */,
  mus[7] /* Blastcap_7 */,
  mus[8] /* Blood_8 */,
  mus[10] /* Iocaine_10 */,
  mus[13] /* Porcini_13 */,
  mus[17] /* Fly Amanita_17 */,
  mus[15] /* Wizard's Mushroom_15 */]
];

let readyBoxes = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

let timerNums = document.getElementById('timer-nums');
let timerMush = document.getElementById('timer-shrooms');
let inputTime = document.getElementById('input-timer');
let shroomTbl = document.getElementById('shroom-farm');
let timerArea = document.getElementById('timer-area');
let toggleBtn = document.getElementById('timer-toggle');
let tblRobust = document.getElementById('robust-grow');
let tblDecent = document.getElementById('decent-grow');
let tblBoxPos = document.getElementById('box-fx-pos');
let tblBoxNeg = document.getElementById('box-fx-neg');
let phaserSel = document.getElementById('phases');
let boxerSel = document.getElementById('boxes');
let shroomsSel = document.getElementById('timer-shrooms');
let currPhaseTxt = document.getElementById('curr-phase-txt');
let nextPhaseTxt = document.getElementById('next-phase-txt');
let toggleButton = document.getElementById('timer-toggle');
let timerDisplay = document.getElementById('timer-display');
let today = localTime();
let thePhase = phaseAt(julianDay(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds()));
let phaseNow = phaseName(thePhase);
let phaseNext = phaseNameNext(thePhase);
let boxType = boxerSel.selectedIndex;
let iconSize = 40;
let maxTimers = 12;


function loadTimers() {
  let todayTime = localTime();
  timerDisplay.innerHTML = '';
  let tmrHead = timerDisplay.createTHead();
  let tmrRow = tmrHead.insertRow(0);
  let tmrNum = tmrRow.insertCell(0);
  let tmrMush = tmrRow.insertCell(1);
  let tmrBox = tmrRow.insertCell(2);
  let tmrPlaced = tmrRow.insertCell(3);
  let tmrDue = tmrRow.insertCell(4);
  tmrNum.appendChild(tmrNum.ownerDocument.createTextNode('Timer'));
  tmrMush.appendChild(tmrMush.ownerDocument.createTextNode('Mushroom'));
  tmrBox.appendChild(tmrBox.ownerDocument.createTextNode('Box'));
  tmrPlaced.appendChild(tmrPlaced.ownerDocument.createTextNode('Start'));
  tmrDue.appendChild(tmrDue.ownerDocument.createTextNode('Ready'));
  let tmrBody = timerDisplay.createTBody();
  for (let i = 0, j = 0; i < maxTimers; i += 1) {
    if (!timerIsEmpty(i)) {
      tmrRow = tmrBody.insertRow(j);
      tmrNum = tmrRow.insertCell(0);
      tmrMush = tmrRow.insertCell(1);
      tmrBox = tmrRow.insertCell(2);
      tmrPlaced = tmrRow.insertCell(3);
      tmrDue = tmrRow.insertCell(4);
      let timer = getTimer(i);
      let loadTmrKey = timer[0].split('_');
      let tmrVal = JSON.parse(timer[1]);
      let loadTmrMush = tmrVal.Mus.toString();
      let loadTmrBox = remPhTag(tmrVal.Box.toString());
      let timePlaced = shortDateFmt(gregorianDate(tmrVal.Plcd));
      let timeDue = shortDateFmt(gregorianDate(tmrVal.Due));
      let tmrRdy = tmrVal.Rdy
      let timeLeft = '';
      let d = timeDue.getDate() - todayTime.getDate();
      let h = timeDue.getHours() - todayTime.getHours();
      let m = timeDue.getMinutes() - todayTime.getMinutes();
      let s = timeDue.getSeconds() - todayTime.getSeconds();

      while (s < 0) {
        s += 60;
        m -= 1;
      }
      while (m < 0) {
        m += 60;
        h -= 1;
      }
      while (h < 0) {
        h += 24;
        d -= 1;
      }
      while (d < 0) {
        d += 1;
        h -= 24;
      }
      timeLeft = '';
      let done = (d <= 0)
        && (h <= 0)
        && (m <= 0)
        && (s <= 0);
      if (done) {
        tmrRdy = 1;
        readyBoxes[i] = 1;
      } else {
        if (d === 1) {
          timeLeft += (d + ' day ');
        } else if (d > 1) {
          timeLeft += (d + ' days ');
        }

        if (h > 0) {
          timeLeft += (h + ':');
        }
        if (m > 0) {
          timeLeft += (m + ':');
        }
        if (s > 0) {
          timeLeft += (s);
        }
      }
      if (readyBoxes[i] === 1) {
        timeLeft = 'Now!';
      }
      tmrNum.appendChild(tmrNum.ownerDocument.createTextNode(loadTmrKey[0]));
      tmrMush.appendChild(tmrMush.ownerDocument.createTextNode(mus[loadTmrMush][0]));
      tmrBox.appendChild(tmrBox.ownerDocument.createTextNode(boxes[loadTmrBox][0]));
      tmrPlaced.appendChild(tmrPlaced.ownerDocument.createTextNode(remGMTTag(timePlaced)));
      tmrDue.appendChild(tmrDue.ownerDocument.createTextNode(timeLeft.toString()));
      j += 1;
    }
  }
}

function setTimer(tmrNum, mushroom, boxType, timePlaced, timeDue, ready) {
  let m = mushroom;
  let b = boxType;
  let p = timePlaced;
  let d = timeDue;
  let r = ready;
  let tmrKey = attPhTag(tmrNum);
  let tmrVal = {Mus: m, Box: b, Plcd: p, Due: d, Rdy: r};
  localStorage.setItem(tmrKey, JSON.stringify(tmrVal));
}

function timerIsEmpty(tmrNum) {
  let timer = getTimer(tmrNum);
  let empty = (timer[1] && timer[1].length);

  return !empty;
}

function getTimer(tmrNum) {
  let tmrKey = attPhTag(tmrNum);
  let tmrVal = localStorage.getItem(tmrKey);

  return [tmrKey, tmrVal];
}

function resetTimer() {
  let tmrIndx = timerNums.selectedIndex;
  let tmrEmpty = timerIsEmpty(tmrIndx);
  if (!tmrEmpty) {
    localStorage.setItem(attPhTag(tmrIndx), '');
  }
  loadTimers();
}

function startTimer() {
  let tmrIndx = timerNums.selectedIndex;
  let planted = localTime();
  if (timerIsEmpty(tmrIndx)) {
    let boxMod = boxes[boxerSel.selectedIndex][1][0][0];
    let days = 0;
    let hours = parseFloat((mus[timerMush.selectedIndex][1] * boxMod).toString());
    while (hours >= 24) {
      days += 1;
      hours -= 24;
    }
    let yearNow = planted.getFullYear();
    let monthNow = planted.getMonth();
    let dayNow = planted.getDate();
    let hourNow = planted.getHours();
    let minNow = planted.getMinutes();
    let placedJD = julianDay(yearNow, monthNow, dayNow, hourNow, minNow, 0);
    let dueJD = julianDay(yearNow, monthNow, dayNow + days, hourNow + hours, minNow, 0);
    setTimer(tmrIndx, timerMush.selectedIndex, boxerSel.selectedIndex, placedJD, dueJD, 0);
  }
}

function customTimer() {
  let tmrIndx = timerNums.selectedIndex;
  let planted = localTime();
  if (timerIsEmpty(tmrIndx)) {
    let days;
    let hours;
    let minutes;
    let seconds;
    let digits = inputTime.value.toString().split(' ');
    digits[0] ? days = parseInt(digits[0]) : days = 0;
    digits[1] ? hours = parseInt(digits[1]) : hours = 0;
    digits[2] ? minutes = parseInt(digits[2]) : minutes = 0;
    digits[3] ? seconds = parseInt(digits[3]) : seconds = 0;
    let yearNow = planted.getFullYear();
    let monthNow = planted.getMonth();
    let dayNow = planted.getDate();
    let hourNow = planted.getHours();
    let minNow = planted.getMinutes();
    let secNow = planted.getSeconds();
    let placedJD = julianDay(yearNow, monthNow, dayNow, hourNow, minNow, secNow);
    let dueJD = julianDay(yearNow, monthNow
      , dayNow + days
      , hourNow + hours
      , minNow + minutes
      , secNow + seconds);
    setTimer(tmrIndx, timerMush.selectedIndex, boxerSel.selectedIndex, placedJD, dueJD, 0);
  }
}

function fixDate(day, hour, min, sec) {
  while (sec >= 60) {
    sec -= 60;
    min += 1;
  }
  while (min >= 60) {
    min -= 60;
    hour += 1;
  }
  while (hour >= 24) {
    hour -= 24;
    day += 1;
  }

  return [day, hour, min, sec];
}

function remPhTag(timer) {
  let timerNum = timer.toString();
  timerNum = timerNum.replace('_PhasePharmer-Timer', '');
  return timerNum;
}

function attPhTag(timerNum) {
  return ((timerNum + 1).toString() + '_PhasePharmer-Timer');
}

function remGMTTag(time) {
  let timeStr = time.toString();
  timeStr = timeStr.replace('(', '');
  timeStr = timeStr.replace(')', '');
  timeStr = timeStr.replace('Standard ', '');
  timeStr = timeStr.replace('Time', '');
  timeStr = timeStr.replace('Eastern ', '');
  timeStr = timeStr.replace('Central ', '');
  timeStr = timeStr.replace('Western ', '');
  timeStr = timeStr.replace('Pacific ', '');
  timeStr = timeStr.replace('Mountain ', '');
  timeStr = timeStr.replace('European ', '');
  timeStr = timeStr.replace('Australian ', '');

  return timeStr;
}

function toggleTimerInfo() {
  if (shroomTbl.style.display === 'none') {
    shroomTbl.style.display = 'grid';
    timerArea.style.display = 'none';
    toggleBtn.innerText = 'Show Box Timers!';
  } else {
    shroomTbl.style.display = 'none';
    timerArea.style.display = 'grid';
    toggleBtn.innerText = 'Show Phase Info!';
  }
  loadTimers();
}

function degToRads(degrees) {
  return ((mF.pi / 180) * degrees);
}

function reducAng(angle) {
  return (angle - (mF.fl(angle / 360) * 360));
}

function phaseNameTxt(phase) {
  return moonPhasesTxt[phase];
}

function fixMonthJul(year, month) {
  let fxMonth = month;
  let fxYear = year;
  if (month < 3) {
    fxMonth += 12;
    fxYear -= 1;
  }

  return [fxYear, fxMonth];
}

function julianDay(year, month, day, hour, min, sec) {
  let fixedYrMon = fixMonthJul(year, month);
  year = fixedYrMon[0];
  month = fixedYrMon[1];
  let secToDay = parseFloat((sec / 86400).toString());
  let minToDay = parseFloat((min / 1440).toString());
  let hourToDay = parseFloat((hour / 24).toString());

  let A = mF.fl(year / 100);
  let B = mF.fl(A / 4);
  let C = 2 - A + B;
  let D = parseFloat((day + hourToDay + minToDay + secToDay).toString());
  let E = mF.fl(365.25 * (year + 4716));
  let F = mF.fl(30.6001 * (month + 2))

  return (C + D + E + F - 1524.5);
}

function phaseAt(jd) {
  let dsn = jd - 2451549.5;
  let nm = dsn / 29.53;
  let nmInt = mF.fl(nm);

  return (fixPhase(phaseInt(nm - nmInt)));
}

function phaseName(phase) {
  return moonPhases[phase];
}

function phaseNameNext(phase) {
  return moonPhases[fixPhase(phase + 1)];
}

function phaseInt(phase) {
  return (mF.r(phase * 8));
}

function fixPhase(phase) {
  if (phase >= 8) {
    phase -= 8;
  }

  return phase;
}

/*
function shortGregorianDate(gregDate) {
  let gd = gregDate;
  return (gd.getDay().toString() + " " + gd.getDate().toString() + "/" + gd.getMonth().toString()
    + "/" + gd.getFullYear().toString() + " " + gd.getHours().toString() + ":" + gd.getMinutes().toString()
    + ":" + gd.getSeconds().toString());
}
*/

function gregorianDate(jd) {
  let Q = jd + 0.5;
  let Z = mF.fl(Q);
  let W = mF.fl((Z - 1867216.25) / 36524.25);
  let X = mF.fl(W / 4);
  let A = Z + 1 + W - X;
  let B = A + 1524;
  let C = mF.fl((B - 122.1) / 365.25);
  let D = mF.fl(365.25 * C);
  let E = mF.fl((B - D) / 30.6001);
  let F = mF.fl(30.6001 * E);
  let gDoM = B - D - F + (Q - Z);
  let gMonth = E;
  E < 14 ? gMonth -= 2 : gMonth -= 13;
  let gYear = C;
  gMonth > 2 ? gYear -= 4716 : gYear -= 4715;
  let gSecs = (gDoM - mF.fl(gDoM)) * 86400;
  let gMins = 0;
  let gHours = 0;
  while (gSecs >= 60) {
    gSecs -= 60;
    gMins += 1;
  }
  while (gMins >= 60) {
    gMins -= 60;
    gHours += 1;
  }
  while (gHours >= 24) {
    gHours -= 24;
    gDoM += 1;
  }

  return new Date(mF.fl(gYear), mF.fl(gMonth), mF.fl(gDoM), mF.fl(gHours), mF.fl(gMins), mF.fl(gSecs), 0);
}

function localTime() {
  let currDateTime = new Date(Date.now());
  let y = currDateTime.getFullYear();
  let mo = currDateTime.getMonth();
  let d = currDateTime.getDate();
  let h = currDateTime.getHours();
  let mn = currDateTime.getMinutes();
  let s = currDateTime.getSeconds();

  return new Date(y, mo, d, h, mn, s)
}

function shortDateFmt(longDate) {
  let opts = {
    weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit',
    minute: '2-digit', second: '2-digit', timeZoneName: 'short'
  }

  return new Intl.DateTimeFormat('default', opts).format(longDate);
}

function addTblHeaders(tblType) {
  let table;
  if (tblType === 'r') {
    table = tblRobust;
  } else if (tblType === 'd') {
    table = tblDecent;
  }
  let head = table.createTHead();
  let row = head.insertRow(0);
  let icon = row.insertCell(0);
  let name = row.insertCell(1);
  let level = row.insertCell(2);
  let grwTime = row.insertCell(3);
  let subs = row.insertCell(4);
  let phasePick = row.insertCell(5);

  icon.appendChild(icon.ownerDocument.createTextNode('Icon'));
  name.appendChild(name.ownerDocument.createTextNode('Mushroom'));
  level.appendChild(name.ownerDocument.createTextNode('Skill Level'));
  grwTime.appendChild(grwTime.ownerDocument.createTextNode('Grow Time'));
  subs.appendChild(subs.ownerDocument.createTextNode('Substrate'));
  phasePick.appendChild(phasePick.ownerDocument.createTextNode('Phase Ready'));
}

function addTblBody(tblType) {
  let table;
  let shroom;
  let tblShrooms;
  let rowIndex = 0;
  if (tblType === 'r') {
    table = tblRobust;
    tblShrooms = robustly[thePhase];
  } else if (tblType === 'd') {
    table = tblDecent;
    tblShrooms = decently[thePhase];
  }
  let body = table.createTBody();
  
  for (shroom in tblShrooms) {
    let row = body.insertRow(rowIndex);
    let mushPic = row.insertCell(0);
    let name = row.insertCell(1);
    let level = row.insertCell(2);
    let grwTime = row.insertCell(3);
    let subs = row.insertCell(4);
    let phasePick = row.insertCell(5);
    let boxGrowTimeMod = boxes[boxType][1][0][0];
    let img = document.createElement('img');
    let rdyHour = today.getHours() + (mus[shroom][1] * boxGrowTimeMod);
    let rdyMin = (rdyHour - mF.fl(rdyHour)) * 60;
    let rdyDate = today.getDate() + mF.fl(rdyHour / 24);
    let rdyFixed = fixDate(rdyDate, rdyHour, rdyMin, 0);
    let rdyPhase = phaseNameTxt(phaseAt(julianDay(today.getFullYear(), today.getMonth(), rdyFixed[0], rdyFixed[1], rdyFixed[2], rdyFixed[3])));

    img.src = mus[shroom][3];
    img.width = iconSize;
    img.height = iconSize;
    mushPic.appendChild(img);
    name.appendChild(name.ownerDocument.createTextNode(mus[shroom][0]));
    level.appendChild(level.ownerDocument.createTextNode(mus[shroom][6]));
    grwTime.appendChild(grwTime.ownerDocument.createTextNode((mus[shroom][1] *
      boxGrowTimeMod).toPrecision(3) + ' hours'));
    subs.appendChild(subs.ownerDocument.createTextNode(mus[shroom][2]));
    phasePick.appendChild(phasePick.ownerDocument.createTextNode(rdyPhase));
    rowIndex += 1;
  }
}

function addBoxMods(boxType) {
  let rowP;
  let rowN;
  let cell;
  // let mod;
  let modPosIndex = 0;
  let modNegIndex = 0;
  let boxMods = boxes[boxType][1];
  let bodyBP = tblBoxPos.createTBody();
  let bodyBN = tblBoxNeg.createTBody();
  
  while (modPosIndex + modNegIndex < boxMods.length) {
    if ((boxMods[boxType][0] === '✓' || boxMods[boxType][0] === '☾') && boxMods[boxType][0] !== '✗') {
      rowP = bodyBP.insertRow(modPosIndex);
      cell = rowP.insertCell(0);
      cell.appendChild(cell.ownerDocument.createTextNode(boxMods[boxType]));
      modPosIndex += 1;
    }
    else if (boxMods[boxType][0] === '✗' && (boxMods[boxType][0] !== '✓' || boxMods[boxType][0] !== '☾')) {
      rowN = bodyBN.insertRow(modNegIndex);
      cell = rowN.insertCell(0);
      cell.appendChild(cell.ownerDocument.createTextNode(boxMods[boxType]));
      modNegIndex += 1;
    }
  }
}

function updateBoxes() {
  tblBoxPos.innerHTML = '';
  tblBoxNeg.innerHTML = '';
  thePhase = phaserSel.selectedIndex;
  boxType = boxerSel.selectedIndex;
  addBoxMods(boxType);
}

function updateMushTbl() {
  tblRobust.innerHTML = '';
  tblDecent.innerHTML = '';
  thePhase = phaserSel.selectedIndex;
  boxType = boxerSel.selectedIndex;
  addTblHeaders('r');
  addTblBody('r');
  addTblHeaders('d');
  addTblBody('d');
}

function timerTick() {
  loadTimers();
}

function timerInt() {
  setInterval(timerTick, 1000);
}

function setupApp() {
  loadTimers();
  currPhaseTxt.appendChild(currPhaseTxt.ownerDocument.createTextNode(phaseNow));
  nextPhaseTxt.appendChild(nextPhaseTxt.ownerDocument.createTextNode(phaseNext));

  for (let i = 0; i < 12; i++) {
    let option = document.createElement('option');
    option.text = 'Timer ' + (i + 1).toString();
    timerNums.add(option);
  }

  for (let i in mus) {
    let option = document.createElement('option');
    option.text = mus[i][0];
    shroomsSel.add(option);
  }

  for (let p in moonPhases) {
    let option = document.createElement('option');
    option.text = moonPhases[p];
    phaserSel.add(option);
  }
  for (let g in boxes) {
    let option = document.createElement('option');
    option.text = boxes[g][0];
    boxerSel.add(option);
  }

  phaserSel.selectedIndex = thePhase;
  phaserSel.textAlign = 'center';
  boxerSel.textAlign = 'center';

  toggleButton.addEventListener('click', toggleTimerInfo);
  timerNums.addEventListener('change', () => {
    loadTimers();
  });
  phaserSel.addEventListener('change', () => {
    updateMushTbl();
    updateBoxes();
  });
  boxerSel.addEventListener('change', () => {
    updateBoxes();
    updateMushTbl();
  });

  let eventPhase = new Event('change');
  let eventBox = new Event('change');
  phaserSel.dispatchEvent(eventPhase);
  boxerSel.dispatchEvent(eventBox);
}

setupApp();
setTimeout(timerInt, 3000);
