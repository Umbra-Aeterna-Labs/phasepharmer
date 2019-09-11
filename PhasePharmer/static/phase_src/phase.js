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

let iconSize = 36;

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
    [0.8, '(+) Grow time 20% faster per crop']
    , [0.6, '(+) Grow time 40% faster per crop']
    , [1.25, '(-) Grow time 25% slower per crop']
    , [1.5, '(-) Grow time 50% slower per crop']
    , [2.0, '(-) Grow time 100% slower per crop']
    , [1, '(+) Chance for bonus mushroom +15%']
    , [1, '(+) Chance for bonus mushroom +33%']
    , [1, '(+) Yield +100% mushrooms per crop']
    , [1, '(+) Yield +200% mushrooms per crop']
    , [1, '(+) XP bonus +33% per mushroom']
    , [1, '(-) XP penalty -50% per mushroom']
    , [1, '(-) Requires 2 doses of substrate']
    , [1, '(▪) No additional effects']
];

let boxes = [
    ['Mushroom Box', [boxMods[12]]]
    , ['Lucky Box', [boxMods[6]]]
    , ['Practice Box', [boxMods[2], boxMods[9]]]
    , ['Epic Crop Box', [boxMods[4], boxMods[11], boxMods[8]]]
    , ['Fast Box', [boxMods[0], boxMods[10]]]
    , ['High Yield Box', [boxMods[3], boxMods[11], boxMods[5], boxMods[7]]]
    , ['Very Fast Box', [boxMods[1], boxMods[10]]]
];

let mus = [
    ['Parasol', 2, subs[0], subs[3], 'static/phase_img/parasol.png', [4, 7], [0, 3]]
    , ['Mycena', 3, subs[1], subs[4], 'static/phase_img/mycena.png', [1, 2], [5, 6]]
    , ['Boletus', 4, subs[2], subs[5], 'static/phase_img/boletus.png', [0, 5], [1, 4]]
    , ['Field', 5, subs[0], subs[4], 'static/phase_img/field.png', [3, 6], [2, 7]]
    , ['Goblin', 5, subs[2], subs[3], 'static/phase_img/goblin.png', [0, 3], [4, 7]]
    , ['Blusher', 6, subs[2], subs[5], 'static/phase_img/blusher.png', [0, 5], [1, 4]]
    , ['Milk Cap', 7, subs[0], subs[3], 'static/phase_img/milk.png', [4, 7], [0, 3]]
    , ['Blastcap', 8, subs[0], subs[5], 'static/phase_img/blastcap.png', [4, 5], [0, 1]]
    , ['Blood', 8, subs[1], subs[3], 'static/phase_img/blood.png', [1, 6], [2, 3]]
    , ['Coral', 9, subs[1], subs[5], 'static/phase_img/coral.png', [2, 3], [6, 7]]
    , ['Iocaine', 10, subs[1], subs[4], 'static/phase_img/iocaine.png', [1, 2], [5, 6]]
    , ['Groxmax', 11, subs[0], subs[4], 'static/phase_img/groxmax.png', [3, 6], [2, 7]]
    , ['False Agaric', 12, subs[1], subs[4], 'static/phase_img/false.png', [6, 7], [2, 3]]
    , ['Porcini', 12, subs[2], subs[5], 'static/phase_img/porcini.png', [4, 5], [0, 1]]
    , ['Black Foot', 13, subs[2], subs[3], 'static/phase_img/black.png', [0, 7], [6, 6]]
    , ['Wizard\'s', 13, subs[0], subs[4], 'static/phase_img/wizards.png', [1, 2], [3, 6]]
    , ['Pixie\'s', 14, subs[0], subs[5], 'static/phase_img/pixies.png', [2, 3], [6, 7]]
    , ['Fly Amanita', 15, subs[0], subs[4], 'static/phase_img/fly.png', [1, 4], [0, 5]]
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

let argDistLong = [
    [0, 0, 1, 0, 6288774, -20905355]
    , [2, 0, -1, 0, 1274027, -3699111]
    , [2, 0, 0, 0, 658314, -2955968]
    , [0, 0, 2, 0, 213618, -569925]
    , [0, 1, 0, 0, -185116, 48888]
    , [0, 0, 0, 2, -114332, -3149]
    , [2, 0, -2, 0, 58793, 246158]
    , [2, -1, -1, 0, 57066, -152138]
    , [2, 0, 1, 0, 53322, -170733]
    , [2, -1, 0, 0, 45758, -204586]
    , [0, 1, -1, 0, -40923, -129620]
    , [1, 0, 0, 0, -34720, 108743]
    , [0, 1, 1, 0, -30383, 104755]
    , [2, 0, 0, -2, 15327, 10321]
    , [0, 0, 1, 2, -12528, 1]
    , [0, 0, 1, -2, 10980, 79661]
    , [4, 0, -1, 0, 10675, -34782]
    , [0, 0, 3, 0, 10034, -23210]
    , [4, 0, -2, 0, 8548, -21636]
    , [2, 1, -1, 0, -7888, 24208]
    , [2, 1, 0, 0, -6766, 30824]
    , [1, 0, -1, 0, -5163, -8379]
    , [1, 1, 0, 0, 4987, -16675]
    , [2, -1, 1, 0, 4036, -12831]
    , [2, 0, 2, 0, 3994, -10445]
    , [4, 0, 0, 0, 3861, -11650]
    , [2, 0, -3, 0, 3665, 14403]
    , [0, 1, -2, 0, -2689, -7003]
    , [2, 0, -1, 2, -2602, 1]
    , [2, -1, -2, 0, 2390, 10056]
    , [1, 0, 1, 0, -2348, 6322]
    , [2, -2, 0, 0, 2236, -9884]
    , [0, 1, 2, 0, -2120, 5751]
    , [0, 2, 0, 0, -2069, 1]
    , [2, -2, -1, 0, 2048, -4950]
    , [2, 0, 1, -2, -1773, 4130]
    , [2, 0, 0, 2, -1595, 1]
    , [4, -1, -1, 0, 1215, -3958]
    , [0, 0, 2, 2, -1110, 1]
    , [3, 0, -1, 0, -892, 3258]
    , [2, 1, 1, 0, -810, 2616]
    , [4, -1, -2, 0, 759, -1897]
    , [0, 2, -1, 0, -713, -2117]
    , [2, 2, -1, 0, -700, 2354]
    , [2, 1, -2, 0, 691, 1]
    , [2, -1, 0, -2, 596, 1]
    , [4, 0, 1, 0, 549, -1423]
    , [0, 0, 4, 0, 537, -1117]
    , [4, -1, 0, 0, 520, -1571]
    , [1, 0, -2, 0, -487, -1739]
    , [2, 1, 0, -2, -399, 1]
    , [0, 0, 2, -2, -381, -4421]
    , [1, 1, 1, 0, 351, 1]
    , [3, 0, -2, 0, -340, 1]
    , [4, 0, -3, 0, 330, 1]
    , [2, -1, 2, 0, 327, 1]
    , [0, 2, 1, 0, -323, 1165]
    , [1, 1, -1, 0, 299, 1]
    , [2, 0, 3, 0, 294, 1]
    , [2, 0, -1, -2, 1, 8752]
];

let argLat = [
    [0, 0, 0, 1, 5128122]
    , [0, 0, 1, 1, 280602]
    , [0, 0, 1, -1, 277693]
    , [2, 0, 0, -1, 173237]
    , [2, 0, -1, 1, 55413]
    , [2, 0, -1, -1, 46271]
    , [2, 0, 0, 1, 32573]
    , [0, 0, 2, 1, 17198]
    , [2, 0, 1, -1, 9266]
    , [0, 0, 2, -1, 8822]
    , [2, -1, 0, -1, 8216]
    , [2, 0, -2, -1, 4324]
    , [2, 0, 1, 1, 4200]
    , [2, 1, 0, -1, -3359]
    , [2, -1, -1, 1, 2463]
    , [2, -1, 0, 1, 2211]
    , [2, -1, -1, -1, 2065]
    , [0, 1, -1, -1, -1870]
    , [4, 0, -1, -1, 1828]
    , [0, 1, 0, 1, -1794]
    , [0, 0, 0, 3, -1749]
    , [0, 1, -1, 1, -1565]
    , [1, 0, 0, 1, -1491]
    , [0, 1, 1, 1, -1475]
    , [0, 1, 1, -1, -1410]
    , [0, 1, 0, -1, -1344]
    , [1, 0, 0, -1, -1335]
    , [0, 0, 3, 1, 1107]
    , [4, 0, 0, -1, 1021]
    , [4, 0, -1, 1, 833]
    , [0, 0, 1, -3, 777]
    , [4, 0, -2, 1, 671]
    , [2, 0, 0, -3, 607]
    , [2, 0, 2, -1, 596]
    , [2, -1, 1, -1, 491]
    , [2, 0, -2, 1, -451]
    , [0, 0, 3, -1, 439]
    , [2, 0, 2, 1, 422]
    , [2, 0, -3, -1, 421]
    , [2, 1, -1, 1, -366]
    , [2, 1, 0, 1, -351]
    , [4, 0, 0, 1, 331]
    , [2, -1, 1, 1, 315]
    , [2, -2, 0, -1, 302]
    , [0, 0, 1, 3, -283]
    , [2, 1, 1, -1, -229]
    , [1, 1, 0, -1, 223]
    , [1, 1, 0, 1, 223]
    , [0, 1, -2, -1, -220]
    , [2, 1, -1, -1, -220]
    , [1, 0, 1, 1, -185]
    , [2, -1, -2, -1, 181]
    , [0, 1, 2, 1, -177]
    , [4, 0, -2, -1, 176]
    , [4, -1, -1, -1, 166]
    , [1, 0, 1, -1, -164]
    , [4, 0, 1, -1, 132]
    , [1, 0, -1, -1, -119]
    , [4, -1, 0, -1, 115]
    , [2, -2, 0, 1, 107]
];

function toggleTimerInfo() {
    let table = document.getElementById('shroom_farming');
    let timers = document.getElementById('box_timers');
    let toggle = document.getElementById('timer_toggle');

    if (table.style.display === 'none') {
        table.style.display = 'grid';
        timers.style.display = 'none';
        toggle.innerText = 'Box Timers';
    }
    else {
        table.style.display = 'none';
        timers.style.display = 'grid';
        toggle.innerText = 'Phase Info';
    }
}

function degToRads(degrees) {
    return (Math.PI / 180) * degrees;
}

function reducAng(angle) {
    return angle - (mF.fl(angle / 360) * 360);
}

function fixPhase(phase) {
    phase *= 8;
    phase = Math.round(phase);
    phase > 7 ? phase = 0 : phase;

    return phase;
}

function phaseName(phase) {
    return moonPhases[phase];
}

function julianDay(year, month, day, hour, minute) {
    month += 1;
    if (month < 3) {
        year -= 1;
        month += 12;
    }
    let minToDay = minute / 1440;
    let hourToDay = hour / 24;
    let adjDay = day + hourToDay + minToDay;
    let a = mF.fl(year / 100);
    let b = 2 - a + mF.fl(a / 4);

    return (mF.fl(365.25 * (year + 4716)) + mF.fl(30.6001 * (month + 1)) + adjDay + b - 1524.5);
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
    let h = today.getUTCHours();
    let d = today.getUTCDate();
    let dstMonth = ((today.getUTCMonth() + 1) > 2 && (today.getUTCMonth() + 1) < 10);
    let prevSunday = today.getUTCDate() - today.getUTCDay();
    let marchDst = (today.getUTCMonth() === 2) && (prevSunday >= 8);
    let novDst = (today.getUTCMonth() === 10) && (prevSunday <= 0);

    if (dstMonth || marchDst || novDst) {
        h = today.getUTCHours() - 4;
    }
    else {
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
    }
    else {
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

function curMoonFrac(JD) {
    let t = (JD - 2451545) / 36525;
    let t2 = mF.p(t, 2);
    let t3 = mF.p(t, 3);
    let t4 = mF.p(t, 4);

    let argD = mF.dTR(mF.rA((297.8501921 + (445267.1114034 * t) - (0.0018819 * t2) + (t3 / 545868) - (t4 / 113065000))));
    let argMs = mF.dTR(mF.rA((357.5291092 + (35999.0502909 * t) - (0.0001536 * t2) + (t3 / 24490000))));
    let argMm = mF.dTR(mF.rA((134.9633964 + (477198.8675055 * t) + (0.0087414 * t2) + (t3 / 69699) - (t4 / 14712000))));
    let argI = mF.dTR((180) - argD - ((6.289) * mF.s(argMm))
        + (((2.100) * mF.s(argMs)))
        - (((1.274) * mF.s((2 * argD) - argMm)))
        - (((0.658) * mF.s(2 * argD)))
        - (((0.214) * mF.s(2 * argMm)))
        - (((0.110) * mF.s(argD))));

    return ((1 + mF.c(argI)) / 2);
}

function getUTCNow() {
    let locNow = new Date(Date.now());

    return (new Date(locNow.getUTCFullYear(), locNow.getUTCMonth(), locNow.getUTCDate(), locNow.getUTCHours(),
        locNow.getUTCMinutes(), locNow.getUTCSeconds(), locNow.getUTCMilliseconds()));
}

function setBox() {
    let boxShrooms = document.getElementById('box_shrooms');
    let boxer = document.getElementById('boxes');
    let inTimeHrs = document.getElementById('input_timer_hrs');
    let inTimeMins = document.getElementById('input_timer_mins');
    let inTimeSecs = document.getElementById('input_timer_secs');

    if (typeof (Storage) !== 'undefined') {
        let timeRdy = getUTCNow();
        console.log(timeRdy);
        let userTimer = inTimeHrs.innerHTML.valueOf() + inTimeMins.innerHTML.valueOf()
            + inTimeSecs.innerHTML.valueOf();
        if (!userTimer) {
            let mushType = boxShrooms.selectedIndex;
            let boxType = boxer.selectedIndex;
            let boxMod = boxes[boxType][1][0][0];
            console.log(mus[mushType][1]);
            let hrsToRdy = mus[mushType][1] * boxMod.valueOf().toPrecision(3);
            console.log(hrsToRdy);
            let hrFrac = hrsToRdy - mF.fl(hrsToRdy);
            let minFrac = (hrFrac - mF.fl(hrFrac)) * 60;
            let secFrac = (minFrac - mF.fl(minFrac)) * 60;
            timeRdy.setUTCHours(timeRdy.getUTCHours() + hrsToRdy);
            timeRdy.setUTCMinutes(timeRdy.getUTCMinutes() + minFrac);
            timeRdy.setUTCSeconds(timeRdy.getUTCSeconds() + secFrac);
            console.log(timeRdy);
            //
        }
        else {

        }
    }


    else {
        alert('ERROR: Your browser does not implement local storage and thus box timers cannot work!');
    }
}

function updateTimer() {
    let boxNums = document.getElementById('box_nums');
    let boxIndexTxt = document.getElementById('box_index_txt');
}

function updateShroom() {
    let boxShrooms = document.getElementById('box_shrooms');
    let placedMush = document.getElementById('placed_mush');
    placedMush.innerHTML = mus[boxShrooms.selectedIndex][0];
}

function updateInfo() {
    let today = serverTime();
    let mi = today.getMinutes();
    let h = today.getHours();
    let d = today.getDate();
    let mo = today.getMonth() + 1;
    let y = today.getFullYear();
    let tblRobust = document.getElementById('robust_growing');
    let tblDecent = document.getElementById('decent_growing');
    let tblBoxes = document.getElementById('box_effects');
    let phaser = document.getElementById('phases');
    let boxer = document.getElementById('boxes');
    let untilNext = document.getElementById('until_next');
    tblRobust.innerHTML = '';
    tblDecent.innerHTML = '';
    tblBoxes.innerHTML = '';
    untilNext.innerHTML = '';
    let phaseNum = phaser.selectedIndex;
    let boxType = boxer.selectedIndex;
    let rob = 0;
    let dec = 0;
    let bx = 0;
    let boxMod = boxes[boxType][1][0][0];

    let headerR = tblRobust.createTHead();
    let rowR = headerR.insertRow(0);
    let nameR = rowR.insertCell(0);
    let iconR = rowR.insertCell(1);
    let grwTimeR = rowR.insertCell(2);
    let subsR = rowR.insertCell(3);
    subsR.colSpan = 2;
    let lowSubsR = rowR.insertCell(4);
    let phasePickR = rowR.insertCell(4);

    let headerD = tblDecent.createTHead();
    let rowD = headerD.insertRow(0);
    let nameD = rowD.insertCell(0);
    let iconD = rowD.insertCell(1);
    let grwTimeD = rowD.insertCell(2);
    let subsD = rowD.insertCell(3);
    subsD.colSpan = 2;
    let lowSubsD = rowD.insertCell(4);
    let phasePickD = rowD.insertCell(4);

    let bodyR = tblRobust.createTBody();
    let bodyD = tblDecent.createTBody();
    let bodyB = tblBoxes.createTBody();

    nameR.appendChild(nameR.ownerDocument.createTextNode('Mushroom'));
    iconR.appendChild(iconR.ownerDocument.createTextNode('Icon'));
    grwTimeR.appendChild(grwTimeR.ownerDocument.createTextNode('Time'));
    subsR.appendChild(subsR.ownerDocument.createTextNode('Substrates (High/Low)'));
    // lowSubs.appendChild(lowSubs.ownerDocument.createTextNode('Substrate'));
    phasePickR.appendChild(phasePickR.ownerDocument.createTextNode('Phase Ready'));


    for (let mod in boxes[boxType][1]) {
        rowR = bodyB.insertRow(bx);
        let cell = rowR.insertCell(0);
        cell.appendChild(cell.ownerDocument.createTextNode(boxes[boxType][1][bx][1]));
        bx += 1;
    }

    for (let shroom in mus) {
        let isRobust = (phaseNum === mus[shroom][5][0]) || (phaseNum === mus[shroom][5][1]);
        let isPoor = (phaseNum === mus[shroom][6][0]) || (phaseNum === mus[shroom][6][1]);
        let isDecent = (!isRobust && !isPoor);

        if (isRobust) {
            rowR = bodyR.insertRow(rob);
            nameR = rowR.insertCell(0);
            let mushPic = rowR.insertCell(1);
            let img = document.createElement('img');
            img.src = mus[shroom][4];
            img.width = iconSize;
            img.height = iconSize;
            mushPic.appendChild(img);
            grwTimeR = rowR.insertCell(2);
            subsR = rowR.insertCell(3);
            lowSubsR = rowR.insertCell(4);
            phasePickR = rowR.insertCell(5);
            nameR.appendChild(nameR.ownerDocument.createTextNode(mus[shroom][0]));
            grwTimeR.appendChild(grwTimeR.ownerDocument.createTextNode((mus[shroom][1] * boxMod.valueOf()).toPrecision(3) + ' hours'));
            subsR.appendChild(subsR.ownerDocument.createTextNode(mus[shroom][2]));
            lowSubsR.appendChild(lowSubsR.ownerDocument.createTextNode(mus[shroom][3]));


            let rdyHour = h + (mus[shroom][1] * boxMod.valueOf());
            let rdyDay = d;
            if (rdyHour >= 24) {
                rdyHour -= 24;
                rdyDay += 1;
            }
            let rdyDate = new Date(y, mo, rdyDay, rdyHour, mi, 0, 0);
            let rdyPhase = fixPhase(curMoonFrac(julianDay(rdyDate.getFullYear(), rdyDate.getMonth(), rdyDate.getDate(), mi)));
            let rdyText = moonPhasesTxt[rdyPhase];
            phasePickR.appendChild(phasePickR.ownerDocument.createTextNode(rdyText));
            rob += 1;
        }
        else if (isDecent) {
            rowR = bodyD.insertRow(dec);
            nameR = rowR.insertCell(0);
            let mushPic = rowR.insertCell(1);
            let img = document.createElement('img');
            img.src = mus[shroom][4];
            img.width = iconSize;
            img.height = iconSize;
            mushPic.appendChild(img);
            grwTimeR = rowR.insertCell(2);
            subsR = rowR.insertCell(3);
            lowSubsR = rowR.insertCell(4);
            phasePickR = rowR.insertCell(5);
            nameR.appendChild(nameR.ownerDocument.createTextNode(mus[shroom][0]));
            grwTimeR.appendChild(grwTimeR.ownerDocument.createTextNode((mus[shroom][1] * boxMod.valueOf()).toPrecision(3) + ' hours'));
            subsR.appendChild(subsR.ownerDocument.createTextNode(mus[shroom][2]));
            lowSubsR.appendChild(lowSubsR.ownerDocument.createTextNode(mus[shroom][3]));

            let rdyHour = h + (mus[shroom][1] * boxMod.valueOf());
            let rdyDay = d;
            if (rdyHour >= 24) {
                rdyHour -= 24;
                rdyDay += 1;
            }
            let rdyDate = new Date(y, mo, rdyDay, rdyHour, mi, 0, 0);
            let rdyPhase = fixPhase(curMoonFrac(julianDay(rdyDate.getFullYear(), rdyDate.getMonth(), rdyDate.getDate(), mi)));
            let rdyText = moonPhasesTxt[rdyPhase];
            phasePickR.appendChild(phasePickR.ownerDocument.createTextNode(rdyText));
            dec += 1;
        }
    }
}

function setupApp() {
    let today = serverTime();
    let mi = today.getMinutes();
    let d = today.getDate();
    let mo = today.getMonth() + 1;
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
    // let boxIndexTxt = document.getElementById('box_index_txt');
    let currPhaseElem = document.getElementById('curr_phase');
    let nextPhaseElem = document.getElementById('next_phase');
    let toggleButton = document.getElementById('timer_toggle');
    let resetBoxBtn = document.getElementById('reset_box');
    let setBoxBtn = document.getElementById('set_timer');

    // console.log(julianDay(y, mo, d, h, mi));
    // console.log(curMoonFrac(julianDay(y, mo, d, h, mi)));
    // console.log(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi))));
    // console.log(phaseName(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi)))));
    // console.log(nextFull());
    // console.log(gregorianDate(nextFull()));

    let phaseNow = phaseName(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi))));
    let phaseNext = phaseName(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi))) + 1);
    currPhaseElem.appendChild(currPhaseElem.ownerDocument.createTextNode(phaseNow));
    nextPhaseElem.appendChild(nextPhaseElem.ownerDocument.createTextNode(phaseNext));

    for (let i = 0; i < 12; i++) {
        let option = document.createElement('option');
        option.text = 'Box #' + (i + 1).toString();
        boxNums.add(option);
    }
    // boxIndexTxt.innerText = 'Box #1';
    // let placedMush = document.getElementById('placed_mush');
    // placedMush.innerHTML = mus[0][0];

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

    toggleButton.addEventListener('click', toggleTimerInfo);
    setBoxBtn.addEventListener('click', setBox);
    boxShrooms.addEventListener('change', (event) => {
        // updateShroom();
    });
    boxNums.addEventListener('change', (event) => {
        updateTimer();
    });
    phaser.addEventListener('change', (event) => {
        updateInfo();
    });
    boxer.addEventListener('change', (event) => {
        updateInfo();
    });

    let eventBoxNums = new Event('change');
    let eventPhase = new Event('change');
    let eventBox = new Event('change');
    boxNums.dispatchEvent(eventBoxNums);
    phaser.dispatchEvent(eventPhase);
    boxer.dispatchEvent(eventBox);
}

setupApp();
