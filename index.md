---
title: 'Phase Pharmer'
description: 'An app to assist mushroom farmers in the MMORPG Project: Gorgon, developed by SausageJavelins'
---

<link rel="stylesheet" href="PhasePharmer/static/phase_src/phase.css" media="screen">
<link rel="shortcut icon" href="PhasePharmer/static/phase_img/icon.ico">
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
            <button id="timer_toggle" class="input_style">Box Timers</button>
        </div>
        <div id="box_info">
            <table id="box_effects_pos">
            </table>
            <table id="box_effects_neg">
            </table>
        </div>
    </div>
</div>
<div id="shroom_farming">
    <table id="robust_growing">
    </table>
    <table id="decent_growing">
    </table>
</div>
<div id="box_timers">
    <div id="box_mush_sel">
        <div id="box_nums_area">
        </div>
    </div>
    <div id="placed_info">
        <ul id="box_timer_txt">
            <li id="box_index"><p id="box_index_txt" class="text_style"></p></li>
            <li id="placed_mush"><p id="box_mush_txt" class="text_style"></p></li>
            <li id="time_on_box">
                <p id="box_hours_txt" class="text_style">0</p>
                <p> hrs</p>
                <p id="box_mins_txt" class="text_style">0</p>
                <p> mins</p>
                <p id="box_secs_text" class="text_style">0</p>
                <p> secs</p>
            </li>
        </ul>
        <button id="set_timer" class="input_style" onclick="setTimer()">Set Timer</button>
        <button id="reset_box" class="input_style" onclick="resetBox()">Clear Box</button>
    </div>
    <div id="box_ctrl">
        <select id="box_nums" class="input_style">
        </select>
        <select id="box_shrooms" class="input_style">
        </select>
        <form id="box_timer_form">
            <label for="input_timer">Enter a timer</label>
            <input type="text" id="input_timer" class="input_style" placeholder="hours:mins:secs">
        </form>
    </div>
    <div id="box_display_area">
        <table id="box_display">
            <thead>
                <tr>
                    <th><p class="tbl_text">Box #</p></th>
                    <th><p class="tbl_text">Time Left</p></th>
                    <th><p class="tbl_text">Mushroom</p></th>
                    <th><p class="tbl_text">Box Type</p></th>
                </tr>
            </thead>
        </table>
    </div>
</div>
<div id="copy">
    <p class="copy_text">Copyright &copy; 2020 Umbra Aeterna Labs</p>
    <form id="donate" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_donations"/>
        <input type="hidden" name="business" value="LBM5CNC4R2X3N"/>
        <input type="hidden" name="item_name" value="open-source software development"/>
        <input type="hidden" name="currency_code" value="USD"/>
        <input type="image" src="PhasePharmer/static/phase_img/btn_donateCC_LG.gif"
               name="submit" title="PayPal - The safer, easier way to pay online!"
               alt="Donate with PayPal button"/>
        <img alt="" src="PhasePharmer/static/phase_img/pixel.gif" width="1" height="1"/>
    </form>
</div>
<script src="PhasePharmer/static/phase_src/phase.js"></script>