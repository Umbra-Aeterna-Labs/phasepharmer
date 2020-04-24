let iconSize = 36;
let hoursPerPhase = 88.59;
let daysPerPhase = 3.69125;

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
    [0.80, '++ Grow time 20% faster']             //0
    , [0.60, '++ Grow time 40% faster']
    , [1.00, '++ Chance for bonus mushrooms 15%']   //2
    , [1.00, '++ Chance for bonus mushrooms 33%']
    , [1.00, '++ Yield +100% more mushrooms']       //4
    , [1.00, '++ Yield +200% more mushrooms']
    , [1.00, '++ XP bonus +33%']                    //6
    , [1.25, '-- Grow time 25% slower']
    , [1.50, '-- Grow time 50% slower']             //8
    , [2.00, '-- Grow time 100% slower']
    , [1.00, '-- XP penalty -50%']                  //10
    , [1.00, '-- Requires 2 doses of substrate']
    , [1.00, '▪ No additional box effects']         //12
];

let boxes = [
    ['Mushroom Box', [boxMods[12]]]
    , ['Lucky Boxes', [boxMods[3]]]
    , ['Practice Boxes', [boxMods[6], boxMods[7]]]
    , ['Epic Crop Box', [boxMods[5], boxMods[9], boxMods[11]]]
    , ['High Yield Box', [boxMods[2], boxMods[4], boxMods[11], boxMods[8]]]
    , ['Fast Box', [boxMods[0], boxMods[10]]]
    , ['Very Fast Box', [boxMods[1], boxMods[10]]]
];

let mus = [
    ['Parasol', 2, subs[0], subs[3], '/assets/phase_img/parasol.png', [4, 7], [0, 3]]
    , ['Mycena', 3, subs[1], subs[4], '/assets/phase_img/mycena.png', [1, 2], [5, 6]]
    , ['Boletus', 4, subs[2], subs[5], '/assets/phase_img/boletus.png', [0, 5], [1, 4]]
    , ['Field', 5, subs[0], subs[4], '/assets/phase_img/field.png', [3, 6], [2, 7]]
    , ['Goblin', 5, subs[2], subs[3], '/assets/phase_img/goblin.png', [0, 3], [4, 7]]
    , ['Blusher', 6, subs[2], subs[5], '/assets/phase_img/blusher.png', [0, 5], [1, 4]]
    , ['Milk Cap', 7, subs[0], subs[3], '/assets/phase_img/milk.png', [4, 7], [0, 3]]
    , ['Blastcap', 8, subs[0], subs[5], '/assets/phase_img/blastcap.png', [4, 5], [0, 1]]
    , ['Blood', 8, subs[1], subs[3], '/assets/phase_img/blood.png', [1, 6], [2, 3]]
    , ['Coral', 9, subs[1], subs[5], '/assets/phase_img/coral.png', [2, 3], [6, 7]]
    , ['Iocaine', 10, subs[1], subs[4], '/assets/phase_img/iocaine.png', [1, 2], [5, 6]]
    , ['Groxmax', 11, subs[0], subs[4], '/assets/phase_img/groxmax.png', [3, 6], [2, 7]]
    , ['False Agaric', 12, subs[1], subs[4], '/assets/phase_img/false.png', [6, 7], [2, 3]]
    , ['Porcini', 12, subs[2], subs[5], '/assets/phase_img/porcini.png', [4, 5], [0, 1]]
    , ['Black Foot', 13, subs[2], subs[3], '/assets/phase_img/black.png', [0, 7], [6, 6]]
    , ['Wizard\'s', 13, subs[0], subs[4], '/assets/phase_img/wizards.png', [1, 2], [3, 6]]
    , ['Pixie\'s', 14, subs[0], subs[5], '/assets/phase_img/pixies.png', [2, 3], [6, 7]]
    , ['Fly Amanita', 15, subs[0], subs[4], '/assets/phase_img/fly.png', [1, 4], [0, 5]]
    , ['Charged Mycelium', 16, subs[2], subs[5], '/assets/phase_img/charged.png', [0, 3], [7, 7]]
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

function toggleTimerInfo() {
    let table = document.getElementById('shroom_farming');
    let timers = document.getElementById('box_timers');
    let toggle = document.getElementById('timer_toggle');

    if (table.style.display === 'none') {
        table.style.display = 'grid';
        timers.style.display = 'none';
        toggle.innerText = 'Box Timers';
    } else {
        table.style.display = 'none';
        timers.style.display = 'grid';
        toggle.innerText = 'Phase Info';
    }
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
        today.getUTCMinutes(), 0, 0)
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
    // let today = serverTime();
    let today = new Date(Date.now());
    let mi = today.getMinutes();
    let h = today.getHours();
    let d = today.getDate();
    let mo = today.getMonth();
    let y = today.getFullYear();
    let tblRobust = document.getElementById('robust_growing');
    let tblDecent = document.getElementById('decent_growing');
    let tblBoxesPos = document.getElementById('box_effects_pos');
    let tblBoxesNeg = document.getElementById('box_effects_neg');
    let phaser = document.getElementById('phases');
    let boxer = document.getElementById('boxes');
    // let untilNext = document.getElementById('until_next');
    let phaseNum = phaser.selectedIndex;
    let boxType = boxer.selectedIndex;
    let rob = 0;
    let dec = 0;
    let boxIndxPos = 0;
    let boxIndxNeg = 0;
    let boxMod = boxes[boxType][1][0][0];

    tblRobust.innerHTML = '';
    tblDecent.innerHTML = '';
    tblBoxesPos.innerHTML = '';
    tblBoxesNeg.innerHTML = '';
    // untilNext.innerHTML = '';

    let headerR = tblRobust.createTHead();
    let row = headerR.insertRow(rob);
    let icon = row.insertCell(0);
    let name = row.insertCell(1);
    let grwTime = row.insertCell(2);
    let highSubs = row.insertCell(3);
    let lowSubs = row.insertCell(4);
    let phasePick = row.insertCell(5);

    icon.appendChild(icon.ownerDocument.createTextNode('Icon'));
    name.appendChild(name.ownerDocument.createTextNode('Mushroom'));
    grwTime.appendChild(grwTime.ownerDocument.createTextNode('Time'));
    highSubs.appendChild(highSubs.ownerDocument.createTextNode('High Substrate'));
    lowSubs.appendChild(lowSubs.ownerDocument.createTextNode('Low Substrate'));
    phasePick.appendChild(phasePick.ownerDocument.createTextNode('Phase Ready'));

    let bodyR = tblRobust.createTBody();
    let bodyD = tblDecent.createTBody();
    let bodyBp = tblBoxesPos.createTBody();
    let bodyBn = tblBoxesNeg.createTBody();

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
        if (mod[1].includes('+')) {
            let rowPos = bodyBp.insertRow(boxIndxPos);
            let cellPos = rowPos.insertCell(0);
            cellPos.appendChild(cellPos.ownerDocument.createTextNode(boxes[boxType][1][mods][1]));
            boxIndxPos += 1;
        } else if ((mod[1].includes('-')) || (mod[1].includes('▪'))) {
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
            grwTime = row.insertCell(2);
            highSubs = row.insertCell(3);
            lowSubs = row.insertCell(4);
            phasePick = row.insertCell(5);
            name.appendChild(name.ownerDocument.createTextNode(mus[shroom][0]));
            grwTime.appendChild(grwTime.ownerDocument.createTextNode((mus[shroom][1] * boxMod).toPrecision(2) + ' hours'));
            highSubs.appendChild(highSubs.ownerDocument.createTextNode(mus[shroom][2]));
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
            grwTime = row.insertCell(2);
            highSubs = row.insertCell(3);
            lowSubs = row.insertCell(4);
            phasePick = row.insertCell(5);
            name.appendChild(name.ownerDocument.createTextNode(mus[shroom][0]));
            grwTime.appendChild(grwTime.ownerDocument.createTextNode((mus[shroom][1] * boxMod).toPrecision(2) + ' hours'));
            highSubs.appendChild(highSubs.ownerDocument.createTextNode(mus[shroom][2]));
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

function updateTimer() {
    let boxNums = document.getElementById('box_nums');
    let boxIndexTxt = document.getElementById('box_index_txt');
    boxIndexTxt.innerHTML = 'Box #' + (boxNums.selectedIndex + 1).toString();
}

function setupApp() {
    let today = new Date(Date.now());
    let mi = today.getMinutes();
    let d = today.getDate();
    let mo = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();

    let sD, sH, sM = '';
    d > 1 ? sD = 's ' : sD = '';
    h > 1 ? sH = 's ' : sH = '';
    mi > 1 ? sM = 's ' : sM = '';

    let phaser = document.getElementById('phases');
    let boxer = document.getElementById('boxes');
    let boxNums = document.getElementById('box_nums');
    let boxShrooms = document.getElementById('box_shrooms');
    let boxIndexTxt = document.getElementById('box_index_txt');
    let currPhaseElem = document.getElementById('curr_phase_txt');
    let nextPhaseElem = document.getElementById('next_phase_txt');
    let toggleButton = document.getElementById('timer_toggle');

    // console.log(phaseAt(julianDay(y, mo, d, h)));
    // console.log(curMoonFrac(julianDay(y, mo, d, h, mi)));
    // console.log(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi))));
    // console.log(phaseName(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi)))));
    // console.log(nextFull());
    // console.log(gregorianDate(nextFull()));

    let phaseNow = phaseName(phaseAt(julianDay(y, mo, d, h)));
    let phaseNext = phaseNameNext(phaseAt(julianDay(y, mo, d, h)));
    currPhaseElem.appendChild(currPhaseElem.ownerDocument.createTextNode(phaseNow));
    nextPhaseElem.appendChild(nextPhaseElem.ownerDocument.createTextNode(phaseNext));

    for (let i = 0; i < 12; i++) {
        let option = document.createElement('option');
        option.text = 'Box #' + (i + 1).toString();
        boxNums.add(option);
    }
    boxIndexTxt.innerText = 'Box #1';

    for (let i in mus) {
        let option = document.createElement('option');
        option.text = mus[i][0];
        boxShrooms.add(option);
    }

    for (let p in moonPhases) {
        let option = document.createElement('option');
        option.text = moonPhases[p];
        phaser.add(option);
    }
    for (let g in boxes) {
        let option = document.createElement('option');
        option.text = boxes[g][0];
        boxer.add(option);
    }

    phaser.textAlign = 'center';
    boxer.textAlign = 'center';

    toggleButton.addEventListener("click", toggleTimerInfo);
    boxNums.addEventListener('change', (event) => {
        updateTimer();
    });
    phaser.addEventListener('change', (event) => {
        updateInfo();
    });
    boxer.addEventListener('change', (event) => {
        updateInfo();
    });

    let eventPhase = new Event('change');
    let eventBox = new Event('change');
    phaser.dispatchEvent(eventPhase);
    boxer.dispatchEvent(eventBox);
}

setupApp();
