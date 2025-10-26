let iconSize = 40;
let maxTimers = 12;

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
let timerDisplay = document.getElementById('timer_display');

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

let readyBoxes = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

function loadTimers() {
    let todayTime = serverTime();
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
            let timePlaced = gregorianDate(tmrVal.Plcd);
            let timeDue = gregorianDate(tmrVal.Due);
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
    let planted = serverTime();
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
    let planted = serverTime();
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

function phaseName(phase) {
    return moonPhases[phase];
}

function phaseNameTxt(phase) {
    return moonPhasesTxt[phase];
}

function phaseNameNext(phase) {
    return moonPhases[fixPhase(phase + 1)];
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

function phaseInt(phase) {
    return (mF.r(phase * 8));
}

function fixPhase(phase) {
    if (phase >= 8) {
        phase -= 8;
    }

    return phase;
}

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

function serverTime() {
    let today = new Date(Date.now());
    today.toLocaleString('en-US', {timeZone: 'America/New_York'});
    let y = today.getFullYear();
    let mo = today.getMonth();
    let d = today.getDate();
    let dstMonth = ((mo + 1) > 2 && (mo + 1) < 10);
    let prevSunday = d - today.getDay();
    let marchDst = (mo === 2) && (prevSunday >= 8);
    let novDst = (mo === 10) && (prevSunday <= 0);
    let h = today.getHours();
    let mn = today.getMinutes();
    let s = today.getSeconds();
    if (dstMonth || marchDst || novDst) {
        h -= 1;
    } else {
        h -= 0;
    }
    while (h < 0) {
        h += 24;
        d -= 1;
    }

    return new Date(y, mo, d, h, mn, s, 0)
}

function updateInfo(v) {
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

    for (let mods in boxes[boxType][1]) {
        if (boxes[boxType][1].hasOwnProperty(mods)) {
            let mod = boxes[boxType][1][mods];
            let positive = (mod[1].includes('✓') || mod[1].includes('☾'))
                && !mod[1].includes('✗');
            if (positive) {
                let rowPos = bodyBp.insertRow(boxIndxPos);
                let cellPos = rowPos.insertCell(0);
                cellPos.appendChild(cellPos.ownerDocument.createTextNode(boxes[boxType][1][mods][1]));
                boxIndxPos += 1;
            } else {
                let rowNeg = bodyBn.insertRow(boxIndxNeg);
                let cellNeg = rowNeg.insertCell(0);
                cellNeg.appendChild(cellNeg.ownerDocument.createTextNode(boxes[boxType][1][mods][1]));
                boxIndxNeg += 1;
            }
        }
    }

    for (let shroom in mus) {
        let isRobust = (phaseNum === mus[shroom][5][0]) || (phaseNum === mus[shroom][5][1]);
        let isPoor = (phaseNum === mus[shroom][6][0]) || (phaseNum === mus[shroom][6][1]);
        let isDecent = (!isRobust && !isPoor);
        let rdyDay;
        let rdyHour;
        let rdyMin;
        let rdyFixed;
        let rdyPhase;
        let row;
        let mushPic;
        let img;
        let lowSubs;

        if (isRobust) {
            row = bodyR.insertRow(rob);
            rob += 1;
        } else if (isDecent) {
            row = bodyD.insertRow(dec);
            dec += 1;
        }
        if (isRobust || isDecent) {
            mushPic = row.insertCell(0);
            img = document.createElement('img');
            img.src = mus[shroom][4];
            img.width = iconSize;
            img.height = iconSize;
            mushPic.appendChild(img);
            name = row.insertCell(1);
            level = row.insertCell(2);
            grwTime = row.insertCell(3);
            subs = row.insertCell(4);
            lowSubs = row.insertCell(5);
            phasePick = row.insertCell(6);
            name.appendChild(name.ownerDocument.createTextNode(mus[shroom][0]));
            level.appendChild(name.ownerDocument.createTextNode(mus[shroom][7]));
            grwTime.appendChild(grwTime.ownerDocument.createTextNode((mus[shroom][1] *
                boxMod).toPrecision(3) + ' hours'));
            subs.appendChild(subs.ownerDocument.createTextNode(mus[shroom][2]));
            lowSubs.appendChild(lowSubs.ownerDocument.createTextNode(mus[shroom][3]));
            rdyDay = curDay;
            rdyHour = curHour + (mus[shroom][1] * boxMod);
            rdyMin = (rdyHour - mF.fl(rdyHour)) * 60;
            rdyFixed = fixDate(rdyDay, rdyHour, rdyMin, 0);
            rdyPhase = phaseNameTxt(phaseAt(julianDay(curYear, curMonth, rdyFixed[0], rdyFixed[1], rdyFixed[2], rdyFixed[3])));
            phasePick.appendChild(phasePick.ownerDocument.createTextNode(rdyPhase));
        }

    }
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

let today = serverTime();
let curDay = today.getDate();
let curMonth = today.getMonth();
let curYear = today.getFullYear();
let curHour = today.getHours();
let curMins = today.getMinutes();
let curSecs = today.getSeconds();

let thePhase = phaseAt(julianDay(year = curYear, month = curMonth, day = curDay, hour = curHour, min = curMins, sec = curSecs));
let phaseNow = phaseName(thePhase);
let phaseNext = phaseNameNext(thePhase);

setupApp();
setTimeout(timerInt, 3000);
