let mF = function () {
    function s() {
    }

    function c() {
    }

    function p() {
    }

    function ac() {
    }

    function at() {
    }

    function as() {
    }

    function dTR() {
    }

    function rA() {
    }

    function fl() {
    }

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
    [0.8, '▪Grow time 20% faster than normal']
    , [0.6, '▪Grow time 40% faster than normal']
    , [1.25, '▪Grow time 25% slower per crop']
    , [1.5, '▪Grow time 50% slower for each crop']
    , [2.0, '▪Grow time 100% slower than normal']
    , [1, '▪Chance for Second Mushroom Type: 15% per crop']
    , [1, '▪Chance for Second Mushroom Type: 33%']
    , [1, '▪Yield +100% mushrooms per crop']
    , [1, '▪Yield +200% more mushrooms than normal']
    , [1, '▪XP +33% more per mushroom']
    , [1, '▪XP penalty -50% XP per mushroom']
    , [1, '▪This box requires 2 doses of substrate']
    , [1, 'No additional effects']
];

let boxes = [
    ['Mushroom Box', [boxMods[12]]]
    , ['Lucky Box', [boxMods[6]]]
    , ['Practice Box', [boxMods[2], boxMods[9]]]
    , ['Epic Crop Box', [boxMods[4], boxMods[8], boxMods[11]]]
    , ['Fast Box', [boxMods[0], boxMods[10]]]
    , ['High Yield Box', [boxMods[3], boxMods[5], boxMods[7], boxMods[11]]]
    , ['Very Fast Box', [boxMods[1], boxMods[10]]]
];

let mus = [
    ['Parasol', 2, subs[0], subs[3], '../static/phase_img/parasol.png', [4, 7], [0, 3]]
    , ['Mycena', 3, subs[1], subs[4], '../static/phase_img/mycena.png', [1, 2], [5, 6]]
    , ['Boletus', 4, subs[2], subs[5], '../static/phase_img/boletus.png', [0, 5], [1, 4]]
    , ['Field', 5, subs[0], subs[4], '../static/phase_img/field.png', [3, 6], [2, 7]]
    , ['Goblin', 5, subs[2], subs[3], '../static/phase_img/goblin.png', [0, 3], [4, 7]]
    , ['Blusher', 6, subs[2], subs[5], '../static/phase_img/blusher.png', [0, 5], [1, 4]]
    , ['Milk Cap', 7, subs[0], subs[3], '../static/phase_img/milk.png', [4, 7], [0, 3]]
    , ['Blastcap', 8, subs[0], subs[5], '../static/phase_img/blastcap.png', [4, 5], [0, 1]]
    , ['Blood', 8, subs[1], subs[3], '../static/phase_img/blood.png', [1, 6], [2, 3]]
    , ['Coral', 9, subs[1], subs[5], '../static/phase_img/coral.png', [2, 3], [6, 7]]
    , ['Iocaine', 10, subs[1], subs[4], '../static/phase_img/iocaine.png', [1, 2], [5, 6]]
    , ['Groxmax', 11, subs[0], subs[4], '../static/phase_img/groxmax.png', [3, 6], [2, 7]]
    , ['False Agaric', 12, subs[1], subs[4], '../static/phase_img/false.png', [6, 7], [2, 3]]
    , ['Porcini', 12, subs[2], subs[5], '../static/phase_img/porcini.png', [4, 5], [0, 1]]
    , ['Black Foot', 13, subs[2], subs[3], '../static/phase_img/black.png', [0, 7], [6, 6]]
    , ['Wizard\'s', 13, subs[0], subs[4], '../static/phase_img/wizards.png', [1, 2], [3, 6]]
    , ['Pixie\'s', 14, subs[0], subs[5], '../static/phase_img/pixies.png', [2, 3], [6, 7]]
    , ['Fly Amanita', 15, subs[0], subs[4], '../static/phase_img/fly.png', [1, 4], [0, 5]]
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
    if (month < 3) {
        year -= 1;
        month += 12;
    }
    let minToDay = minute / 1440;
    let hourToDay = hour / 24;
    let adjDay = day + hourToDay + minToDay;
    let a = mF.fl(year / 100);
    let b = 2 - a + mF.fl(a / 4);

    return mF.fl(365.25 * (year + 4716)) + mF.fl(30.6001 * (month + 1)) + adjDay + b - 1524.5;
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
    let h, d = 0;
    let dstMonth = (today.getUTCMonth() > 2 && today.getUTCMonth() < 10);
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
        d = today.getUTCDate() - 1;
    }

    return new Date(today.getUTCFullYear(), today.getUTCMonth(), d, h,
        today.getUTCMinutes(), 0, 0)
}

function calcPhase(phase) {
    let today = serverTime();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let adjHour = hour + (minute / 60);
    let adjDay = day + (adjHour / 24);
    let adjMon = month + (adjDay / 29.5);
    let adjYear = year + (adjMon / 365.25);
    let k = (adjYear - 2000) * 12.3685;
    let kFrac = k - (mF.fl(k));
    let calcPhase = 0.0;

    if (phase < 0) {
        if (kFrac < 0.25) {
            k = mF.fl(k);
            calcPhase = 0.25;
        }
        else if (kFrac < 0.5) {
            k = mF.fl(k) + 0.25;
            calcPhase = 0.5;
        }
        else if (kFrac < 0.75) {
            k = mF.fl(k) + 0.5;
            calcPhase = 0.75;
        }
        else if (kFrac < 1.0) {
            k = mF.fl(k) + 0.75;
            calcPhase = 1.0;
        }
    }
    else {
        k = mF.fl(k) + phase;
        phase < kFrac ? k += 1 : k;
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

    return [jde, calcPhase];
}

function curMoonFrac(JD) {
    let t = (JD - 2451545) / 36525;
    let t2 = mF.p(t, 2);
    let t3 = mF.p(t, 3);
    let t4 = mF.p(t, 4);
    let sunGML = 280.46646 + (36000.76983 * t) + (0.0003032 * t2);
    let meanAnom = 357.52911 + (35999.05029 * t) - (0.0001537 * t2);
    let meanAnom2 = meanAnom * 2;
    let meanAnom3 = meanAnom * 3;
    let orbEccnt = 0.016708634 - (0.000042037 * t) - (0.0000001267 * t2);
    let sunCent = ((1.914602 - (0.004817 * t) - (0.000014 * t2)) * mF.s(meanAnom))
        + (0.019993 - (0.000101 * t) * mF.s(meanAnom2)) + (0.000289 * mF.s(meanAnom3));
    let eclpOblq = 23.439291111111 - (0.0130041666667 * t) - (0.00059 * t2 / 3600) + (0.001813 * t3 / 3600);
    let sunLong = sunGML + sunCent;
    let sunAsc = mF.at(mF.c(eclpOblq) * mF.s(sunLong)) / mF.c(sunLong);
    let sunDec = mF.as(mF.s(eclpOblq) * mF.s(sunLong));
    let sunAnom = meanAnom + sunCent;

    let argL = 218.3164477 + (481267.88123421 * t) - (0.0015786 * t2) + (t3 / 538841) - (t4 / 65194000);
    let argD = 297.8501921 + (445267.1114034 * t) - (0.0018819 * t2) + (t3 / 545868) - (t4 / 113065000);
    let argMs = 357.5291092 + (35999.0502909 * t) - (0.0001536 * t2) + (t3 / 24490000);
    let argMm = 134.9633964 + (477198.8675055 * t) + (0.0087414 * t2) + (t3 / 69699) - (t4 / 14712000);
    let argF = 93.2720950 + (483202.0175233 * t) - (0.0036539 * t2) - (t3 / 3526000) + (t4 / 863310000);
    let argE = 1 - (0.002516 * t) - (0.0000074 * t2);
    let arg1 = mF.dTR(119.75) + (mF.dTR(131.849) * t);
    let arg2 = mF.dTR(53.09) + (mF.dTR(mF.rA(479264.290) * t));
    let arg3 = mF.dTR(313.45) + (mF.dTR(mF.rA(481266.484) * t));
    let sigL = 0;
    let sigR = 0;
    let sigB = 0;
    let aDL = argDistLong;
    let aL = argLat;

    for (let i = 0; i < aDL.length; i++) {
        if ((aDL[i][1] === 1) || (aDL[i][1] === -1)) {
            sigL += (aDL[i][4] * argE)
                * mF.s(
                    (aDL[i][0] * argD)
                    + (aDL[i][1] * argMs)
                    + (aDL[i][2] * argMm)
                    + (aDL[i][3] * argF)
                );

            sigR += (aDL[i][5] * argE)
                * (mF.c(
                        (aDL[i][0] * argD)
                        + (aDL[i][1] * argMs)
                        + (aDL[i][2] * argMm)
                        + (aDL[i][3] * argF)
                    )
                );
        }
        else if ((aDL[i][1] === 2) || (aDL[i][1] === -2)) {
            sigL += (aDL[i][4] * mF.p(argE, 2))
                * (mF.s(
                        (aDL[i][0] * argD)
                        + (aDL[i][1] * argMs)
                        + (aDL[i][2] * argMm)
                        + (aDL[i][3] * argF))
                );

            sigR += (aDL[i][5] * mF.p(argE, 2))
                * (mF.c(
                        (aDL[i][0] * argD)
                        + (aDL[i][1] * argMs)
                        + (aDL[i][2] * argMm)
                        + (aDL[i][3] * argF))
                );
        }
        else {
            sigL += aDL[i][4]
                * (mF.s(
                        (aDL[i][0] * argD)
                        + (aDL[i][1] * argMs)
                        + (aDL[i][2] * argMm)
                        + (aDL[i][3] * argF))
                );

            sigR += aDL[i][5]
                * (mF.c(
                        (aDL[i][0] * argD)
                        + (aDL[i][1] * argMs)
                        + (aDL[i][2] * argMm)
                        + (aDL[i][3] * argF))
                );
        }
    }

    for (let i = 0; i < aL.length; i++) {
        if ((aL[i][1] === 1) || (aL[i][1] === -1)) {
            sigB += (aL[i][4] * argE)
                * (mF.s(
                        (aL[i][0] * argD)
                        + (aL[i][1] * argMs)
                        + (aL[i][2] * argMm)
                        + (aL[i][3] * argF))
                );
        }
        else if ((aL[i][1] === 2) || (aL[i][1] === -2)) {
            sigB += (aL[i][4] * mF.p(argE, 2))
                * (mF.s(
                    (aL[i][0] * argD)
                    + (aL[i][1] * argMs)
                    + (aL[i][2] * argMm)
                    + (aL[i][3] * argF)));
        }
        else {
            sigB += aL[i][4]
                * (mF.s(
                        (aL[i][0] * argD)
                        + (aL[i][1] * argMs)
                        + (aL[i][2] * argMm)
                        + (aL[i][3] * argF))
                );
        }
    }

    sigL += (3958 * mF.s(arg1))
        + (1962 * mF.s(argL - argF))
        + (318 * mF.s(arg2));

    sigB += (-2235 * mF.s(argL))
        + (382 * mF.s(arg3))
        + (175 * mF.s(arg1 - argF))
        + (175 * mF.s(arg1 + argF))
        + (127 * mF.s(argL - argMm))
        - (115 * mF.s(argL + argMm));

    let moonGeoLong = argL + (sigL / 1000000);
    let moonGeoLat = sigB / 1000000;
    let moonEarthDist = 385000.56 + (sigR / 1000);

    let moonGeoElg = mF.ac(mF.c(argF) * mF.c(argL - sunLong));

    let sunDist = (1.000001018 * (1 - mF.p(orbEccnt, 2))) / (1 + (orbEccnt * mF.c(sunAnom)));

    let moonPhsAng = mF.at(
        (sunDist * mF.s(moonGeoElg))
        / (moonEarthDist - (sunDist * mF.c(moonGeoElg)))
    );

    return [((1 + mF.c(moonPhsAng)) / 2),];
}

function update() {
    let today = serverTime();
    let mi = today.getMinutes();
    let h = today.getHours();
    let d = today.getDate();
    let mo = today.getMonth();
    let y = today.getFullYear();
    let tblRobust = document.getElementById('robust_growing');
    let tblDecent = document.getElementById('decent_growing');
    let tblBoxes = document.getElementById('box_effects');
    let phaser = document.getElementById('phases');
    let boxer = document.getElementById('boxes');
    let untilNext = document.getElementById('until_next');
    let row;
    let icon;
    let name;
    let grwTime;
    let highSubs;
    let lowSubs;
    let phasePick;
    let phaseNum = phaser.selectedIndex;
    let boxType = boxer.selectedIndex;
    let rob = 0;
    let dec = 0;
    let bx = 0;
    let boxMod = boxes[boxType][1][0][0];
    let headerR;
    let bodyR;
    let bodyD;
    let bodyB;

    tblRobust.innerHTML = '';
    tblDecent.innerHTML = '';
    tblBoxes.innerHTML = '';
    untilNext.innerHTML = '';

    headerR = tblRobust.createTHead();
    row = headerR.insertRow(rob);
    icon = row.insertCell(0);
    name = row.insertCell(1);
    grwTime = row.insertCell(2);
    highSubs = row.insertCell(3);
    lowSubs = row.insertCell(4);
    phasePick = row.insertCell(5);

    icon.appendChild(icon.ownerDocument.createTextNode('Icon'));
    name.appendChild(name.ownerDocument.createTextNode('Mushroom'));
    grwTime.appendChild(grwTime.ownerDocument.createTextNode('Time'));
    highSubs.appendChild(highSubs.ownerDocument.createTextNode('High Substrate'));
    lowSubs.appendChild(lowSubs.ownerDocument.createTextNode('Low Substrate'));
    phasePick.appendChild(phasePick.ownerDocument.createTextNode('Phase Ready'));

    bodyR = tblRobust.createTBody();
    bodyD = tblDecent.createTBody();
    bodyB = tblBoxes.createTBody();

    for (let mod in boxes[boxType][1]) {
        row = bodyB.insertRow(bx);
        let cell = row.insertCell(0);
        cell.appendChild(cell.ownerDocument.createTextNode(boxes[boxType][1][bx][1]));
        bx += 1;
    }

    for (let shroom in mus) {
        let isRobust = (phaseNum === mus[shroom][5][0]) || (phaseNum === mus[shroom][5][1]);
        let isPoor = (phaseNum === mus[shroom][6][0]) || (phaseNum === mus[shroom][6][1]);
        let isDecent = (!isRobust && !isPoor);

        if (isRobust) {
            row = bodyR.insertRow(rob);
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
            grwTime.appendChild(grwTime.ownerDocument.createTextNode((mus[shroom][1] * boxMod.valueOf()).toPrecision(2) + ' hours'));
            highSubs.appendChild(highSubs.ownerDocument.createTextNode(mus[shroom][2]));
            lowSubs.appendChild(lowSubs.ownerDocument.createTextNode(mus[shroom][3]));


            let rdyHour = h + (mus[shroom][1] * boxMod.valueOf());
            let rdyDay = d;
            if (rdyHour >= 24) {
                rdyHour -= 24;
                rdyDay += 1;
            }
            let rdyDate = new Date(y, mo, rdyDay, rdyHour, 0, 0, 0);
            let rdyPhase = fixPhase(curMoonFrac(rdyDate.getFullYear(), rdyDate.getMonth(), rdyDate.getDate()));
            let rdyText = moonPhasesTxt[rdyPhase];
            phasePick.appendChild(phasePick.ownerDocument.createTextNode(rdyText));
            rob += 1;
        }
        else if (isDecent) {
            row = bodyD.insertRow(dec);
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
            grwTime.appendChild(grwTime.ownerDocument.createTextNode((mus[shroom][1] * boxMod.valueOf()).toPrecision(2) + ' hours'));
            highSubs.appendChild(highSubs.ownerDocument.createTextNode(mus[shroom][2]));
            lowSubs.appendChild(lowSubs.ownerDocument.createTextNode(mus[shroom][3]));

            let rdyHour = h + (mus[shroom][1] * boxMod.valueOf());
            let rdyDay = d;
            if (rdyHour >= 24) {
                rdyHour -= 24;
                rdyDay += 1;
            }
            let rdyDate = new Date(y, mo, rdyDay, rdyHour, mi, 0, 0);
            let rdyPhase = fixPhase(curMoonFrac(rdyDate.getFullYear(), rdyDate.getMonth(), rdyDate.getDate()));
            let rdyText = moonPhasesTxt[rdyPhase];
            phasePick.appendChild(phasePick.ownerDocument.createTextNode(rdyText));
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
    let today = serverTime();
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
    let boxIndexTxt = document.getElementById('box_index_txt');
    let currPhaseElem = document.getElementById('curr_phase');
    let nextPhaseElem = document.getElementById('next_phase');

    console.log(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi))));
    console.log(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi))) + 1);
    let phaseNow = phaseName(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi))));
    let phaseNext = phaseName(fixPhase(curMoonFrac(julianDay(y, mo, d, h, mi))) + 1);
    currPhaseElem.appendChild(currPhaseElem.ownerDocument.createTextNode(phaseNow.toString()));
    nextPhaseElem.appendChild(nextPhaseElem.ownerDocument.createTextNode(phaseNext.toString()));

    for (let i = 0; i < 12; i++) {
        let option = document.createElement('option');
        option.text = 'Box #' + (i + 1).toString();
        boxNums.add(option);
    }
    boxIndexTxt.innerText = 'Box #1';
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

    boxNums.addEventListener('change', (event) => {
        updateTimer();
    });
    phaser.addEventListener('change', (event) => {
        update();
    });
    boxer.addEventListener('change', (event) => {
        update();
    });

    let eventPhase = new Event('change');
    let eventBox = new Event('change');
    phaser.dispatchEvent(eventPhase);
    boxer.dispatchEvent(eventBox);
}

setupApp();
