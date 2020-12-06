<!--
 Copyright (C) 2020 Umbra Aeterna Labs
 This file is part of PhasePharmer <https://github.com/Umbra-Aeterna-Labs/PhasePharmer>.

 PhasePharmer is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 PhasePharmer is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with PhasePharmer.  If not, see <http://www.gnu.org/licenses/>.
-->

<link rel="stylesheet" href="assets/phase_src/phase.css" media="screen">
<link rel="shortcut icon" href="assets/phase_img/icon.ico">
<div id="trans_bkgrd">
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
            <p class="descript_txt">Be sure to select the correct box type *BEFORE* adding a timer!</p>
            <div id="timer_ctrl">
                <select id="timer_nums" class="input_style">
                </select>
                <select id="timer_shrooms" class="input_style">
                </select>
                <form id="box_timer_form">
                    <input type="text" id="input_timer" class="input_style" placeholder="# Days Hrs Mins Sec">
                </form>
                <button id="start_timer" class="input_style" onclick="startTimer()">Start Now</button>
                <button id="reset_timer" class="input_style" onclick="resetTimer()">Reset Timer</button>
                <button id="set_timer" class="input_style" onclick="customTimer()">Set Custom</button>
            </div>
            <div id="timer_display_area">
                <table id="timer_display">
                </table>
            </div>
        </div>
    </div>
    <div id="copy">
        <p class="copy_text">Copyright &copy; 2020 Umbra Aeterna Labs</p>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="HMYBNUCMTRAT4" />
            <input type="hidden" name="item_name" value="Express your enthusiasm for apps like this by Sausage Javelins with a small donation!" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" class="paypal-img" src="https://i.imgur.com/WaS36su.png" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
    </div>
</div>
<script src="assets/phase_src/phase.js"></script>