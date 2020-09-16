---
title: 'Phase Pharmer'
description: 'An app to assist mushroom farmers in the MMORPG Project: Gorgon, developed by Umbra Aeterna Labs'
---

<link rel="stylesheet" href="../PhasePharmer/assets/phase_src/phase.css" media="screen">
<link rel="shortcut icon" href="../PhasePharmer/assets/phase_img/icon.ico">
<div id="top_section">
    <div id="phase_info">
        <div id="phase_sec_today">
            <p class="phase_text">Today's Phase</p>
            <p id="curr_phase_txt"></p>
        </div>
        <div id="phase_sec_next">
            <p class="phase_text">Next Phase</p>
            <p id="next_phase_txt"></p>
        </div>
    </div>
    <div id="tool_options">
        <div id="phase_select">
            <p class="phase_text">Moon Phase</p>
            <select id="phases" class="input_style">
            </select>
        </div>
        <div id="box_select">
            <p class="phase_text">Box Type</p>
            <select id="boxes" class="input_style">
            </select>
        </div>
    </div>
    <div id="box_info_area">
        <div id="toggle_area">
            <button id="timer_toggle" class="input_style">Show Box Timers!</button>
        </div>
        <div id="box_info">
            <div id="box_effects_title">
                <p id="box_effects_txt">Box Effects</p>
            </div>
            <div id="box_effects_area">
                <table id="box_effects_pos">
                </table>
                <table id="box_effects_neg">
                </table>
            </div>
        </div>
    </div>
</div>
<div id="mid_section">
    <div id="shroom_farming">
        <table id="robust_growing">
        </table>
        <table id="decent_growing">
        </table>
    </div>
    <div id="timer_area">
        <div id="timer_ctrl">
            <select id="timer_nums" class="input_style">
            </select>
            <select id="timer_shrooms" class="input_style">
            </select>
            <form id="box_timer_form">
                <input type="text" id="input_timer" class="input_style" placeholder="Day Hrs Min Sec">
            </form>
            <button id="start_timer" class="input_style" onclick="startTimer()">Start Timer</button>
            <button id="reset_timer" class="input_style" onclick="resetTimer()">Reset Timer</button>
            <button id="set_timer" class="input_style" onclick="customTimer()">Custom Timer</button>
        </div>
        <div id="box_display_area">
            <table id="box_display">
            </table>
        </div>
    </div>
    <div id="copy">
        <p class="copy_text">Copyright &copy; 2020 Umbra Aeterna Labs</p>
        <form id="donate" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations"/>
            <input type="hidden" name="business" value="HMYBNUCMTRAT4"/>
            <input type="hidden" name="item_name" value="Support me and my app development! &lt;3"/>
            <input type="hidden" name="currency_code" value="USD"/>
            <input type="image" src="../PhasePharmer/assets/phase_img/twitch-donate-btn.png"
                   name="submit" title="PayPal - The safer, easier way to pay online!"
                   alt="Donate with PayPal button"/>
            <img alt="" src="../PhasePharmer/assets/phase_img/pixel.gif" width="1" height="1"/>
        </form>
    </div>
</div>
<script src="../PhasePharmer/assets/phase_src/phase.js"></script>