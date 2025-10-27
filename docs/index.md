---
---

<link rel="stylesheet" href="assets/css/style.css" media="screen">
<link rel="shortcut icon" href="assets/img/icon.ico">
<div id="bkgrd">
<div id="wrapper">
    <img alt="PhasePharmer current version" src="https://img.shields.io/badge/dynamic/json?color=https://img.shields.io/badge/-brightgreen-brightgreen&label=version&prefix=v&query=$.version&url=https://raw.githubusercontent.com/Umbra-Aeterna-Labs/PhasePharmer/master/package.json" />
        <div class="page-section">
            <div id="phase-info">
                <div id="phase-section-curr">
                    <p class="phase-txt">Today's Phase</p>
                    <p id="curr-phase-txt"></p>
                </div>
                <div id="phase-section-next">
                    <p class="phase-txt">Next Phase</p>
                    <p id="next-phase-txt"></p>
                </div>
            </div>
            <div id="tool-options">
                <div id="phase-select">
                    <p class="phase-txt">Moon Phase</p>
                    <select id="phases" class="input-style">
                    </select>
                </div>
                <div id="box-select">
                    <p class="phase-txt">Box Type</p>
                    <select id="boxes" class="input-style">
                    </select>
                </div>
            </div>
            <div id="box-toolbar">
                <div id="toggle-area">
                    <button id="timer-toggle" class="input-style">Show Box Timers!</button>
                </div>
                <div id="box-info">
                    <div id="box-fx-title">
                        <p id="box-fx-txt">Box Effects</p>
                    </div>
                    <div id="box-fx-area">
                        <table id="box-fx-pos">
                        </table>
                        <table id="box-fx-neg">
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-section">
            <div id="shroom-farm">
                <table id="robust-grow">
                </table>
                <table id="decent-grow">
                </table>
            </div>
            <div id="timer-area">
                <div class="info-area">
                    <p class="descript-txt">Be sure to select the correct box type *BEFORE* adding a timer!</p>
                </div>
                <div id="timer-ctrl">
                    <select id="timer-nums" class="input-style">
                    </select>
                    <select id="timer-shrooms" class="input-style">
                    </select>
                    <form id="box-timer-form">
                        <input type="text" id="input-timer" class="input-style" placeholder="Day Hrs Min Sec">
                    </form>
                    <button id="start-timer" class="input-style" onclick="startTimer()">START</button>
                    <button id="reset-timer" class="input-style" onclick="resetTimer()">RESET</button>
                    <button id="set-timer" class="input-style" onclick="customTimer()">CUSTOM</button>
                </div>
                <div id="timer-display-area">
                    <table id="timer_display">
                    </table>
                </div>
            </div>
        </div>
        <div class="page-section">
            <div id="donate">
                <p class="copy-txt">Copyright &copy; 2022 Umbra Aeterna Labs</p>
                <form class="center" action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="business" value="HMYBNUCMTRAT4" />
                    <input type="hidden" name="item_name" value="Express your enthusiasm for apps like this by Sausage Javelins with a small donation!" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" class="paypal-img" src="assets/img/twitch-donate-btn.png" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </div>
    </div>
</div>
<script src="assets/src/phase.js"></script>
