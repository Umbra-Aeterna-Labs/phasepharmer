let iconSize = 40;
let maxTimers = 12;
let hoursPerPhase = 88.59;
let daysPerPhase = 3.69125;

let timerNums = document.getElementById("timer_nums");
let timerMush = document.getElementById("timer_shrooms");
let inputTime = document.getElementById("input_timer");
let shroomTbl = document.getElementById('shroom_farming');
let timerArea = document.getElementById('timer_area');
let toggleBtn = document.getElementById('timer_toggle');
let tblRobust = document.getElementById('robust_growing');
let tblDecent = document.getElementById('decent_growing');
let tblBoxPos = document.getElementById('box_effects_pos');
let tblBoxNeg = document.getElementById('box_effects_neg');
let phaserSel = document.getElementById('phases');
let boxerSel = document.getElementById('boxes');
let shroomsSel = document.getElementById('timer_shrooms');
let currPhaseTxt = document.getElementById('curr_phase_txt');
let nextPhaseTxt = document.getElementById('next_phase_txt');
let toggleButton = document.getElementById('timer_toggle');
let timerDisplay = document.getElementById('box_display');

let mF = function () {
    return {
        s: Math.sin,
        c: Math.cos,
        p: Math.pow,
        ac: Math.acos,
        at: Math.atan,
        as: Math.asin,
        dTR: degToRads,
        rA: reducAng,
        fl: Math.floor
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
    'Organs'
    , 'Limbs'
    , 'Exotic'
    , 'Dirt'
    , 'Bone'
    , 'Meat'
];

let boxMods = [
    [0.80, '✓ 20% shorter grow time']
    , [0.60, '✓ 40% shorter grow time']
    , [1.00, '✓ 15% chance for bonus mushrooms']
    , [1.00, '✓ 33% chance for bonus mushrooms']
    , [1.00, '✓ +100% more mushrooms']
    , [1.00, '✓ +200% more mushrooms']
    , [1.00, '✓ 33% more xp']
    , [1.25, '✗ 25% longer grow time']
    , [1.50, '✗ 50% longer grow time']
    , [2.00, '✗ 100% longer grow time']
    , [1.00, '✗ -50% less xp']
    , [1.00, '✗ 2 substrate per box']
    , [1.00, '☾ No additional effects']
];

let boxes = [
    ['Mushroom Box', [boxMods[12]]]
    , ['Lucky Boxes', [boxMods[3]]]
    , ['Practice Boxes', [boxMods[6], boxMods[7]]]
    , ['Epic Crop Box', [boxMods[9], boxMods[5], boxMods[11]]]
    , ['High Yield Box', [boxMods[8], boxMods[11], boxMods[4], boxMods[2]]]
    , ['Fast Box', [boxMods[0], boxMods[10]]]
    , ['Very Fast Box', [boxMods[1], boxMods[10]]]
];

let mus = [
    ['Parasol', 2, subs[0], subs[3], 'phase_img/parasol.png', [4, 7], [0, 3], 0]
    , ['Mycena', 3, subs[1], subs[4], 'phase_img/mycena.png', [1, 2], [5, 6], 5]
    , ['Boletus', 4, subs[2], subs[5], 'phase_img/boletus.png', [0, 5], [1, 4], 10]
    , ['Field', 5, subs[0], subs[4], '/docs/PhasePharmer/assets/phase_img/field.png', [3, 6], [2, 7], 15]
    , ['Goblin', 5, subs[2], subs[3], '/docs/PhasePharmer/assets/phase_img/goblin.png', [0, 3], [4, 7], 20]
    , ['Blusher', 6, subs[2], subs[5], '/docs/PhasePharmer/assets/phase_img/blusher.png', [0, 5], [1, 4], 20]
    , ['Milk Cap', 7, subs[0], subs[3], '/docs/PhasePharmer/assets/phase_img/milk.png', [4, 7], [0, 3], 25]
    , ['Blastcap', 8, subs[0], subs[5], '/docs/PhasePharmer/assets/phase_img/blastcap.png', [4, 5], [0, 1], 25]
    , ['Blood', 8, subs[1], subs[3], '/docs/PhasePharmer/assets/phase_img/blood.png', [1, 6], [2, 3], 30]
    , ['Coral', 9, subs[1], subs[5], '/docs/PhasePharmer/assets/phase_img/coral.png', [2, 3], [6, 7], 35]
    , ['Iocaine', 10, subs[1], subs[4], '/docs/PhasePharmer/assets/phase_img/iocaine.png', [1, 2], [5, 6], 40]
    , ['Groxmax', 11, subs[0], subs[4], '/docs/PhasePharmer/assets/phase_img/groxmax.png', [3, 6], [2, 7], 47]
    , ['False Agaric', 12, subs[1], subs[4], '/docs/PhasePharmer/assets/phase_img/false.png', [6, 7], [2, 3], 50]
    , ['Porcini', 12, subs[2], subs[5], '/docs/PhasePharmer/assets/phase_img/porcini.png', [4, 5], [0, 1], 55]
    , ['Black Foot', 13, subs[2], subs[3], '/docs/PhasePharmer/assets/phase_img/black.png', [0, 7], [6, 6], 63]
    , ['Wizard\'s', 13, subs[0], subs[4], '/docs/PhasePharmer/assets/phase_img/wizards.png', [1, 2], [3, 6], 75]
    , ['Pixie\'s', 14, subs[0], subs[5], '/docs/PhasePharmer/assets/phase_img/pixies.png', [2, 3], [6, 7], 70]
    , ['Fly Amanita', 15, subs[0], subs[4], '/docs/PhasePharmer/assets/phase_img/fly.png', [1, 4], [0, 5], 75]
    , ['Charged Mycelium', 16, subs[2], subs[5], '/docs/PhasePharmer/assets/phase_img/charged.png', [0, 3], [7, 4], 85]
];

let robustly = [
    // new moon
    [mus[2], mus[4], mus[5], mus[14]]
    // waxing crescent
    , [mus[1], mus[8], mus[10], mus[15], mus[17]]
    // first quarter
    , [mus[1], mus[9], mus[10], mus[15], mus[16]]
    // waxing gibbous
    , [mus[3], mus[4], mus[9], mus[11], mus[16]]
    // full moon
    , [mus[0], mus[6], mus[7], mus[13], mus[17]]
    // waning gibbous
    , [mus[2], mus[5], mus[7], mus[13]]
    // last quarter
    , [mus[3], mus[8], mus[11], mus[12]]
    // waning crescent
    , [mus[0], mus[6], mus[12], mus[14]]
];

function loadTimers() {
    timerDisplay.innerHTML = '';
    let tmrHead = timerDisplay.createTHead();
    let tmrRow = tmrHead.insertRow(0);
    let tmrNum = tmrRow.insertCell(0);
    let tmrMush = tmrRow.insertCell(1);
    let boxType = tmrRow.insertCell(2);
    let tmrPlaced = tmrRow.insertCell(3);
    let tmrLeft = tmrRow.insertCell(4);
    tmrNum.appendChild(tmrNum.ownerDocument.createTextNode("Timer #"));
    tmrMush.appendChild(tmrMush.ownerDocument.createTextNode("Mushroom"));
    boxType.appendChild(boxType.ownerDocument.createTextNode("Box Type"));
    tmrPlaced.appendChild(tmrPlaced.ownerDocument.createTextNode("Time Started"));
    tmrLeft.appendChild(tmrLeft.ownerDocument.createTextNode("Time Left"));
    let tmrBody = timerDisplay.createTBody();
    for (let i = 0, j = 0; i < maxTimers; i += 1) {
        if (!timerIsEmpty(i)) {
            tmrRow = tmrBody.insertRow(j);
            tmrNum = tmrRow.insertCell(0);
            tmrMush = tmrRow.insertCell(1);
            boxType = tmrRow.insertCell(2);
            tmrPlaced = tmrRow.insertCell(3);
            tmrLeft = tmrRow.insertCell(4);
            let timer = getTimer(i);
            // console.log(timer);
            let loadTmrKey = timer[0].split("_");
            let tmrVal = JSON.parse(timer[1]);
            let loadTmrMush = tmrVal.m.toString();
            let loadTmrBox = tmrVal.b.toString();
            let placeTime = new Date(Date.parse(tmrVal.p));
            let loadTmrPlaced = timeToShortStr(placeTime);
            let timeLeftVar = tmrVal.l.split(" ");
            let loadTimerLeft = "";
            let tmrLftDay = timeLeftVar[0];
            let tmrLftHour = timeLeftVar[1];
            let tmrLftMin = timeLeftVar[2];
            let tmrLftSec = timeLeftVar[3];

            if (tmrLftDay > 0) {
                loadTimerLeft += (tmrLftDay + " day");
                if (tmrLftDay > 1) {
                    loadTimerLeft += "s";
                }
                loadTimerLeft += "\t";
            }
            if (tmrLftHour > 0) {
                loadTimerLeft += (tmrLftHour + " hour");
                if (tmrLftHour > 1) {
                    loadTimerLeft += "s";
                }
                loadTimerLeft += "\t";
            }
            if (tmrLftMin > 0) {
                loadTimerLeft += (tmrLftMin + " min");
                if (tmrLftMin > 1) {
                    loadTimerLeft += "s";
                }
                loadTimerLeft += "\t";
            }
            if (tmrLftSec > 0) {
                loadTimerLeft += (tmrLftSec + " sec");
                loadTimerLeft += "\t";
            }

            tmrNum.appendChild(tmrNum.ownerDocument.createTextNode(loadTmrKey[0]));
            tmrMush.appendChild(tmrMush.ownerDocument.createTextNode(mus[loadTmrMush][0]));
            boxType.appendChild(boxType.ownerDocument.createTextNode(boxes[loadTmrBox][0]));
            tmrPlaced.appendChild(tmrPlaced.ownerDocument.createTextNode(loadTmrPlaced));
            tmrLeft.appendChild(tmrLeft.ownerDocument.createTextNode(loadTimerLeft));
            j += 1;
        }
    }
}

function setTimer(tmrNum, mushroom, boxType, timePlaced, timeLeft) {
    let m = mushroom;
    let b = boxType;
    let p = timePlaced.toString();
    let l = timeLeft.toString();
    let tmrKey = attachPhTag(tmrNum);
    let tmrVal = {m, b, p, l};
    localStorage.setItem(tmrKey, JSON.stringify(tmrVal));
}

function timerIsEmpty(tmrNum) {
    let timer = getTimer(tmrNum);
    let empty = (timer[1] && timer[1].length);

    return !empty;
}

function getTimer(tmrNum) {
    let tmrKey = attachPhTag(tmrNum);
    let tmrVal = localStorage.getItem(tmrKey);

    return [tmrKey, tmrVal];
}

function resetTimer() {
    let tmrIndx = timerNums.selectedIndex;
    let tmrEmpty = timerIsEmpty(tmrIndx);
    if (!tmrEmpty) {
        localStorage.setItem(attachPhTag(tmrIndx), "");
    } else {
        console.log("timer is already empty")
    }
    loadTimers();
}

function startTimer() {
    let tmrIndx = timerNums.selectedIndex;
    if (timerIsEmpty(tmrIndx)) {
        let boxMod = boxes[boxerSel.selectedIndex][1][0][0];
        let days = 0;
        let hours = parseFloat((mus[timerMush.selectedIndex][1] * boxMod).toPrecision(3));
        let mins = 0;
        let secs = 0;
        while (hours >= 24) {
            days += 1;
            hours -= 24;
        }
        let timeLeft = days.toString() + " " + hours.toString() + " " +
            mins.toString() + " " + secs.toString();
        setTimer(tmrIndx, timerMush.selectedIndex, boxerSel.selectedIndex,
            serverTime(), timeLeft);
    }
    loadTimers();
}

function customTimer() {
    let tmrIndx = timerNums.selectedIndex;
    if (timerIsEmpty(tmrIndx)) {
        let boxMod = boxes[boxerSel.selectedIndex][1][0][0];
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let digits = inputTime.value.toString().split(" ");
        console.log(digits);
        digits[0] ? days = digits[0] : days;
        digits[1] ? hours = ((digits[1] * boxMod).toPrecision(3)) : hours;
        digits[2] ? minutes = digits[2] : minutes;
        digits[3] ? seconds = digits[3] : seconds;
        let timeLeft = days.toString() + " " + hours.toString() + " " +
            mins.toString() + " " + secs.toString();
        setTimer(tmrIndx, timerMush.selectedIndex, boxerSel.selectedIndex,
            serverTime(), timeLeft);
    }
    loadTimers();
}

function timeToShortStr(time) {
    return ("Day " + time.getDate() + " at " + time.getHours() + "h " +
        time.getMinutes() + "m " + time.getSeconds() + "s");
}

function timeToLongStr(time) {
    return (time.getDate() + " days " + time.getHours() + " hours " +
        time.getMinutes() + " minutes " + time.getSeconds() + " seconds");
}

function timeToShort(time) {
    return (time.getDate() + " " + time.getHours() + " " +
        time.getMinutes() + " " + time.getSeconds());
}

function timeToObj(time) {
    let d = time.getDate();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    return { d, h, m, s };
}


function attachPhTag(tmrNum) {
    return ((tmrNum + 1).toString() + "_bxTimer")
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
    return ((Math.PI / 180) * degrees);
}

function reducAng(angle) {
    return (angle - (mF.fl(angle / 360) * 360));
}

function phaseName(phase) {
    return moonPhases[phase];
}

function phaseNameTxt(phase) {
    return moonPhasesTxt[phase];
}

function phaseNameNext(phase) {
    return moonPhases[fixPhase(phase + 1)];
}

function phaseNameNextTxt(phase) {
    return moonPhasesTxt[fixPhase(phase + 1)];
}

function timeToNextPhase(year, month, day, hour) {
    let currPhase = phaseAt(julianDay(year, month, day, hour));
    // console.log('currPhase ' + currPhase);
    let phaseProgress;

    if ((currPhase.valueOf() < 1.0) && (currPhase.valueOf() >= 0.875)) {
        phaseProgress = currPhase.valueOf() - 0.875;
    } else if ((currPhase.valueOf() < 0.875) && (currPhase.valueOf() >= 0.75)) {
        phaseProgress = currPhase.valueOf() - 0.75;
    } else if ((currPhase.valueOf() < 0.75) && (currPhase.valueOf() >= 0.625)) {
        phaseProgress = currPhase.valueOf() - 0.625;
    } else if ((currPhase.valueOf() < 0.625) && (currPhase.valueOf() >= 0.5)) {
        phaseProgress = currPhase.valueOf() - 0.5;
    } else if ((currPhase.valueOf() < 0.5) && (currPhase.valueOf() >= 0.375)) {
        phaseProgress = currPhase.valueOf() - 0.375;
    } else if ((currPhase.valueOf() < 0.375) && (currPhase.valueOf() >= 0.25)) {
        phaseProgress = currPhase.valueOf() - 0.25;
    } else if ((currPhase.valueOf() < 0.25) && (currPhase.valueOf() >= 0.125)) {
        phaseProgress = currPhase.valueOf() - 0.125;
    } else if (currPhase.valueOf() < 0.125) {
        phaseProgress = currPhase.valueOf()
    } else {
        phaseProgress = -1.0;
    }

    let totHrsToNext = hoursPerPhase - (phaseProgress * 1 * daysPerPhase);
    // console.log('totHrsToNext ' + totHrsToNext);
    // console.log('phaseProgress ' + phaseProgress);
    let daysToNext = totHrsToNext / 24;
    let floorDays = Math.floor(daysToNext);
    let fracDays = daysToNext - floorDays;
    let hoursToNext = fracDays * 24;
    let floorHours = Math.floor(hoursToNext);
    let fracHours = hoursToNext - floorHours;
    let minToNext = fracHours * 60;
    let floorMins = Math.floor(minToNext);
    let fracMins = minToNext - floorMins;
    let secToNext = fracMins * 60;
    let floorSecs = Math.floor(secToNext);

    return {
        floorDays, floorHours, floorMins, floorSecs
    }
}

function julianDay(year, month, day, hour) {
    // console.log(year, month, day, hour);

    if (month < 3) {
        month += 12;
        year -= 1;
    }

    let adjDay = day + (hour / 24);
    let a = Math.floor(year / 100);
    let b = 2 - a + Math.floor(a / 4);
    let e = Math.floor(365.25 * (year + 4716));
    let f = Math.floor(30.6001 * (month + 1));
    let jd = b + adjDay + e + f - 1524.5;

    return jd;
}

function phaseAt(jd) {
    let dsn = jd - 2451549.5;
    let nm = dsn / 29.53;
    let nmInt = Math.floor(nm);

    return (fixPhase(phaseInt(nm - nmInt)));
}

function phaseInt(phase) {
    return (Math.round(phase * 8));
}

function fixPhase(phase) {
    if (phase >= 8) {
        phase -= 8;
    }

    return phase;
}

function gregorianDate(jd) {
    let z = mF.fl(jd + 0.5);
    let f = (jd + 0.5) - z;
    let alp = mF.fl((z - 1867216.25) / 36524.25);
    let a = z + 1 + alp - mF.fl(alp / 4);
    let b = a + 1524;
    let c = mF.fl((b - 122.1) / 365.25);
    let d = mF.fl(365.25 * c);
    let e = mF.fl((b - d) / 30.6001);
    let gDom = b - d - mF.fl(30.6001 * e) + f;
    let gMon = 0;
    e < 14 ? gMon = e - 1 : gMon = e - 13;
    let gYear = 0;
    gMon > 2 ? gYear = c - 4716 : gYear = c - 4715;
    let gHrs = (gDom - mF.fl(gDom)) / 24;
    let gMin = (gHrs - mF.fl(gHrs)) / 60;

    return new Date(gYear, gMon, gDom, gHrs, gMin, 0, 0)
}

function serverTime() {
    let today = new Date(Date.now());
    let h;
    let d = today.getUTCDate();
    let dstMonth = ((today.getUTCMonth() + 1) > 2 && (today.getUTCMonth() + 1) < 10);
    let prevSunday = today.getUTCDate() - today.getUTCDay();
    let marchDst = (today.getUTCMonth() === 2) && (prevSunday >= 8);
    let novDst = (today.getUTCMonth() === 10) && (prevSunday <= 0);

    if (dstMonth || marchDst || novDst) {
        h = today.getUTCHours() - 4;
    } else {
        h = today.getUTCHours() - 5;
    }

    if (h < 0) {
        h += 24;
        d -= 1;
    }

    return new Date(today.getUTCFullYear(), today.getUTCMonth(), d, h,
        today.getUTCMinutes(), today.getUTCSeconds(), 0)
}

function nextFull() {
    let today = serverTime();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let adjHour = hour + (minute / 60);
    let adjDay = day + (adjHour / 24);
    let adjMon = month + (adjDay / 29.5);
    let adjYear = year + (adjMon / 12);
    let k = (adjYear - 2000) * 12.3685;
    let kFrac = k - (mF.fl(k));

    if (kFrac < 0.5) {
        k = 0.5;
    } else {
        k = 1.5;
    }

    let t = k / 1236.85;
    let t2 = mF.p(t, 2);
    let t3 = mF.p(t, 3);
    let t4 = mF.p(t, 4);
    let jde = julianDay(year, month, day, hour, minute)
        + (29.530588861 * k)
        + (0.00015437 * t2)
        - (0.000000150 * t3)
        + (0.00000000073 * t4);

    return jde;
}

function updateInfo() {
    let today = serverTime();
    let mi = today.getMinutes();
    let h = today.getHours();
    let d = today.getDate();
    let mo = today.getMonth();
    let y = today.getFullYear();
    let phaseNum = phaserSel.selectedIndex;
    let boxType = boxerSel.selectedIndex;
    let rob = 0;
    let dec = 0;
    let boxIndxPos = 0;
    let boxIndxNeg = 0;
    let boxMod = boxes[boxType][1][0][0];

    tblRobust.innerHTML = '';
    tblDecent.innerHTML = '';
    tblBoxPos.innerHTML = '';
    tblBoxNeg.innerHTML = '';

    let headerR = tblRobust.createTHead();
    let row = headerR.insertRow(rob);
    let icon = row.insertCell(0);
    let name = row.insertCell(1);
    let level = row.insertCell(2);
    let grwTime = row.insertCell(3);
    let subs = row.insertCell(4);
    subs.colSpan = 2;
    let phasePick = row.insertCell(5);

    icon.appendChild(icon.ownerDocument.createTextNode(''));
    name.appendChild(name.ownerDocument.createTextNode('Name'));
    level.appendChild(name.ownerDocument.createTextNode('Level'));
    grwTime.appendChild(grwTime.ownerDocument.createTextNode('Grow Time'));
    subs.appendChild(subs.ownerDocument.createTextNode('Substrates'));
    phasePick.appendChild(phasePick.ownerDocument.createTextNode('Phase Ready'));

    let bodyR = tblRobust.createTBody();
    let bodyD = tblDecent.createTBody();
    let bodyBp = tblBoxPos.createTBody();
    let bodyBn = tblBoxNeg.createTBody();

    // let timeNext = timeToNextPhase(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours());
    // let sD, sH, sM, sS = 's ';
    // today.getDate().valueOf() > 1 ? sD = 's ' : sD = '';
    // today.getHours().valueOf() > 1 ? sH = 's ' : sH = '';
    // today.getMinutes().valueOf() > 1 ? sM = 's ' : sM = '';
    // today.getSeconds().valueOf() > 1 ? sS = 's ' : sS = '';
    // let txtNode = (timeNext.floorDays + ' day' + sD + timeNext.floorHours + ' hour' + sH +
    //     timeNext.floorMins + ' min' + sM + timeNext.floorSecs + ' second' + sS);
    // untilNext.appendChild(untilNext.ownerDocument.createTextNode(txtNode));

    for (let mods in boxes[boxType][1]) {
        let mod = boxes[boxType][1][mods];
        if (mod[1].includes('✓')) {
            let rowPos = bodyBp.insertRow(boxIndxPos);
            let cellPos = rowPos.insertCell(0);
            cellPos.appendChild(cellPos.ownerDocument.createTextNode(boxes[boxType][1][mods][1]));
            boxIndxPos += 1;
        } else if (mod[1].includes('✗')) {
            let rowNeg = bodyBn.insertRow(boxIndxNeg);
            let cellNeg = rowNeg.insertCell(0);
            cellNeg.appendChild(cellNeg.ownerDocument.createTextNode(boxes[boxType][1][mods][1]));
            boxIndxNeg += 1;
        } else if (mod[1].includes('☾')) {
            let rowPos = bodyBp.insertRow(boxIndxPos);
            let cellPos = rowPos.insertCell(0);
            cellPos.appendChild(cellPos.ownerDocument.createTextNode(boxes[boxType][1][mods][1]));
            boxIndxPos += 1;
            let rowNeg = bodyBn.insertRow(boxIndxNeg);
            let cellNeg = rowNeg.insertCell(0);
            cellNeg.appendChild(cellNeg.ownerDocument.createTextNode(boxes[boxType][1][mods][1]));
            boxIndxNeg += 1;
        }
    }

    for (let shroom in mus) {
        let isRobust = (phaseNum === mus[shroom][5][0]) || (phaseNum === mus[shroom][5][1]);
        let isPoor = (phaseNum === mus[shroom][6][0]) || (phaseNum === mus[shroom][6][1]);
        let isDecent = (!isRobust && !isPoor);

        if (isRobust) {
            let row = bodyR.insertRow(rob);
            let mushPic = row.insertCell(0);
            let img = document.createElement('img');
            img.src = mus[shroom][4];
            img.width = iconSize;
            img.height = iconSize;
            mushPic.appendChild(img);
            name = row.insertCell(1);
            level = row.insertCell(2);
            grwTime = row.insertCell(3);
            subs = row.insertCell(4);
            let lowSubs = row.insertCell(5);
            phasePick = row.insertCell(6);
            name.appendChild(name.ownerDocument.createTextNode(mus[shroom][0]));
            level.appendChild(name.ownerDocument.createTextNode(mus[shroom][7]));
            grwTime.appendChild(grwTime.ownerDocument.createTextNode((mus[shroom][1]
                * boxMod).toPrecision(3) + ' hours'));
            subs.appendChild(subs.ownerDocument.createTextNode(mus[shroom][2]));
            lowSubs.appendChild(lowSubs.ownerDocument.createTextNode(mus[shroom][3]));

            let rdyHour = h + (mus[shroom][1] * boxMod);
            let rdyDay = d;
            if (rdyHour >= 24) {
                rdyHour -= 24;
                rdyDay += 1;
            }

            // console.log(julianDay(y, mo, rdyDay, rdyHour));

            let rdyPhase = phaseNameTxt(phaseAt(julianDay(y, mo, rdyDay, rdyHour)));
            phasePick.appendChild(phasePick.ownerDocument.createTextNode(rdyPhase));
            rob += 1;
        } else if (isDecent) {
            let row = bodyD.insertRow(dec);
            let mushPic = row.insertCell(0);
            let img = document.createElement('img');
            img.src = mus[shroom][4];
            img.width = iconSize;
            img.height = iconSize;
            mushPic.appendChild(img);
            name = row.insertCell(1);
            level = row.insertCell(2);
            grwTime = row.insertCell(3);
            subs = row.insertCell(4);
            let lowSubs = row.insertCell(5);
            phasePick = row.insertCell(6);
            name.appendChild(name.ownerDocument.createTextNode(mus[shroom][0]));
            level.appendChild(name.ownerDocument.createTextNode(mus[shroom][7]));
            grwTime.appendChild(grwTime.ownerDocument.createTextNode((mus[shroom][1] * boxMod).toPrecision(3) + ' hours'));
            subs.appendChild(subs.ownerDocument.createTextNode(mus[shroom][2]));
            lowSubs.appendChild(lowSubs.ownerDocument.createTextNode(mus[shroom][3]));

            let rdyHour = h + (mus[shroom][1] * boxMod);
            let rdyDay = d;
            if (rdyHour >= 24) {
                rdyHour -= 24;
                rdyDay += 1;
            }

            // console.log(julianDay(y, mo, rdyDay, rdyHour));

            let rdyPhase = phaseNameTxt(phaseAt(julianDay(y, mo, rdyDay, rdyHour)));
            phasePick.appendChild(phasePick.ownerDocument.createTextNode(rdyPhase));
            dec += 1;
        }
    }
}

function setupApp() {
    loadTimers();
    let today = serverTime();
    // let mi = today.getMinutes();
    let d = today.getDate();
    let mo = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();

    // console.log(phaseAt(julianDay(y, mo, d, h)));
    // console.log(curMoonFrac(julianDay(y, mo, d, h, mi)));
    // console.log(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi))));
    // console.log(phaseName(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi)))));
    // console.log(nextFull());
    // console.log(gregorianDate(nextFull()));

    let phaseNow = phaseName(phaseAt(julianDay(y, mo, d, h)));
    let phaseNext = phaseNameNext(phaseAt(julianDay(y, mo, d, h)));
    currPhaseTxt.appendChild(currPhaseTxt.ownerDocument.createTextNode(phaseNow));
    nextPhaseTxt.appendChild(nextPhaseTxt.ownerDocument.createTextNode(phaseNext));

    for (let i = 0; i < 12; i++) {
        let option = document.createElement('option');
        option.text = 'Timer #' + (i + 1).toString();
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

    phaserSel.textAlign = 'center';
    boxerSel.textAlign = 'center';

    toggleButton.addEventListener("click", toggleTimerInfo);
    timerNums.addEventListener('change', (event) => {
        loadTimers();
    });
    phaserSel.addEventListener('change', (event) => {
        updateInfo();
    });
    boxerSel.addEventListener('change', (event) => {
        updateInfo();
    });

    let eventPhase = new Event('change');
    let eventBox = new Event('change');
    phaserSel.dispatchEvent(eventPhase);
    boxerSel.dispatchEvent(eventBox);
}

setupApp();
