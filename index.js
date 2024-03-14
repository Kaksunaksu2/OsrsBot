var robot = require('robotjs');

function main() {

    console.log("Starting agility bot...")
    sleep(4000);
    
    while (true) {

        
    
        
        

        var banklady_x = getRandomInt(136,162);
        var banklady_y = getRandomInt(474, 532);

        //var magic_x = getRandomInt(620, 633);
        //var magic_y = getRandomInt(171, 181);

        var magicbow_x = getRandomInt(369, 380);
        var magicbow_y = getRandomInt(278,288);

        var closeb_x = getRandomInt(477, 489);
        var closeb_y = getRandomInt(95, 107);

        var knife_x = getRandomInt(574, 581);
        var knife_y = getRandomInt(799,806);
 
        var magicp_x = getRandomInt(658, 668);
        var magicp_y = getRandomInt(904, 915);

        var magiclong_x = getRandomInt(220, 295);
        var magiclong_y = getRandomInt(974,1024);

        var bankdeposit_x = getRandomInt(426, 451);
        var bankdeposit_y = getRandomInt(846,872);

        var bowstring_x = getRandomInt(411, 425);
        var bowstring_y = getRandomInt(279,291);

        var iron_1x = getRandomInt(31, 174);
        var iron_1y = getRandomInt(574, 677);

        var iron_2x = getRandomInt(277, 424);
        var iron_2y = getRandomInt(327, 438);
        
        var iron_3x = getRandomInt(531, 663);
        var iron_3y = getRandomInt(566, 632);

        confirmLogIn();
        
        
        
    }

    


}

function logOut() {

robot.moveMouseSmooth(1515, 1058);
sleep(250);
robot.mouseClick();
sleep(1000);
robot.moveMouseSmooth(1600, 1025);
sleep(250);
robot.mouseClick();
sleep(1000);
robot.moveMouseSmooth(1508, 1007);
sleep(250);
robot.mouseClick();
sleep(4000);
i = 0;


}




function confirmFirstClick() {
    var a = 770;
    var b = 470;

    var first_x = getRandomInt(363,367);
    var first_y = getRandomInt(554, 557);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "ff8a00") {
        console.log("Next obstacle found!");
        sleep(250);
        robot.moveMouseSmooth(first_x, first_y);
        sleep(250);
        robot.mouseClick();
        sleep(12000);
    }
}
var totalMarks = 0;

function confirmMarkOfGraceOne() {
    var a = 776; // Check to see if there is mark fo grace
    var b = 580;

    var second_x = getRandomInt(784,787); // walk to the mark of grace
    var second_y = getRandomInt(578, 580);

    var second_xx = getRandomInt(768, 811); // keep doing agility
    var second_yy = getRandomInt(633, 671);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "796905") {
        console.log("Mark of Grace found!");
        totalMarks++;
        console.log("Total Marks of Grace found so far: " + totalMarks);
        sleep(250);
        robot.moveMouseSmooth(second_x, second_y);
        sleep(250);
        robot.mouseClick();
        sleep(2500);
        robot.moveMouseSmooth(second_xx, second_yy);
        sleep(250);
        robot.mouseClick()
        sleep(4000);
        
    }  
}

function confirmMarkOfGraceOneOne() {
    var a = 862; // Check to see if there is mark fo grace
    var b = 621;

    var second_x = getRandomInt(862,867); // walk to the mark of grace
    var second_y = getRandomInt(613, 620);

    var second_xx = getRandomInt(851, 871); // keep doing agility
    var second_yy = getRandomInt(498, 512);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "796a05") {
        console.log("Mark of Grace found!");
        totalMarks++;
        console.log("Total Marks of Grace found so far: " + totalMarks);
        sleep(250);
        robot.moveMouseSmooth(second_x, second_y);
        sleep(250);
        robot.mouseClick();
        sleep(2500);
        robot.moveMouseSmooth(second_xx, second_yy);
        sleep(250);
        robot.mouseClick()
        sleep(4000);
        
    }  
}



function confirmMarkOfGraceSecondTwo() {
    var a = 858; // Check to see if there is mark fo grace
    var b = 585;

    var second_x = getRandomInt(856,864); // walk to the mark of grace
    var second_y = getRandomInt(581, 587);

    var second_xx = getRandomInt(817, 835); // keep doing agility
    var second_yy = getRandomInt(506, 528);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "796905") {
        console.log("Mark of Grace found!");
        totalMarks++;
        console.log("Total Marks of Grace found so far: " + totalMarks);
        sleep(250);
        robot.moveMouseSmooth(second_x, second_y);
        sleep(250);
        robot.mouseClick();
        sleep(2500);
        robot.moveMouseSmooth(second_xx, second_yy);
        sleep(250);
        robot.mouseClick()
        sleep(4000);
        
    }  
}


function confirmMarkOfGraceSecond() {
    var a = 853; // Check to see if there is mark fo grace
    var b = 623;

    var second_x = getRandomInt(880,889); // walk to the mark of grace
    var second_y = getRandomInt(592, 601);

    var second_xx = getRandomInt(839, 851); // keep doing agility
    var second_yy = getRandomInt(511, 532);

    var second_xxx = getRandomInt(816, 839);
    var second_yyy = getRandomInt(634, 647);

    var second_xxxx = getRandomInt(674, 691);
    var second_yyyy = getRandomInt(614, 626);

    var p = 989; // conditions to know if you fall
    var k = 789;

    var fourth_xx = getRandomInt(1129, 1132); // restart from fallin
    var fourth_yy = getRandomInt(489, 492);

    var pixell_colour = robot.getPixelColor(p, k) // if you fall, get pixel to know
    var g = 444;
    var t = 846;

    var pixelll_colour = robot.getPixelColor(g, t);
    
    var pixel_colour = robot.getPixelColor(a, b)

    if (pixel_colour == "02e701") {
        console.log("Mark of Grace found!");
        totalMarks++;
        console.log("Total Marks of Grace found so far: " + totalMarks);
        sleep(250);
        robot.moveMouseSmooth(second_x, second_y);
        sleep(250);
        robot.mouseClick();
        sleep(2000);
        robot.moveMouseSmooth(second_xx, second_yy);
        sleep(250);
        robot.mouseClick()
        sleep(4000);

    }
      
}

function confirmMarkOfGraceSecondD() {
    var a = 840; // Check to see if there is mark fo grace
    var b = 603;

    var second_x = getRandomInt(838, 844); // walk to the mark of grace
    var second_y = getRandomInt(598, 607);

    var second_xx = getRandomInt(838, 861); // keep doing agility
    var second_yy = getRandomInt(492, 511);

    var second_xxx = getRandomInt(816, 839);
    var second_yyy = getRandomInt(634, 647);

    var second_xxxx = getRandomInt(674, 691);
    var second_yyyy = getRandomInt(614, 626);

    var p = 989; // conditions to know if you fall
    var k = 789;

    var fourth_xx = getRandomInt(1129, 1132); // restart from fallin
    var fourth_yy = getRandomInt(489, 492);

    var pixell_colour = robot.getPixelColor(p, k) // if you fall, get pixel to know
    var g = 444;
    var t = 846;

    var pixelll_colour = robot.getPixelColor(g, t);
    
    var pixel_colour = robot.getPixelColor(a, b)

    if (pixel_colour == "796905") {
        console.log("Mark of Grace found!");
        totalMarks++;
        console.log("Total Marks of Grace found so far: " + totalMarks);
        sleep(250);
        robot.moveMouseSmooth(second_x, second_y);
        sleep(250);
        robot.mouseClick();
        sleep(3500);
        robot.moveMouseSmooth(second_xx, second_yy);
        sleep(250);
        robot.mouseClick()
        sleep(12500);
        
    }
      
}





function confirmMarkOfGraceThird() {
    var a = 882; // Check to see if there is mark fo grace
    var b = 596;

    var second_x = getRandomInt(881,892); // walk to the mark of grace
    var second_y = getRandomInt(593, 596);

    var second_xx = getRandomInt(837, 844); // keep doing agility
    var second_yy = getRandomInt(511, 523);

    var second_xxx = getRandomInt(637, 652);
    var second_yyy = getRandomInt(612, 623);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "796905") {
        console.log("Mark of Grace found!");
        totalMarks++;
        console.log("Total Marks of Grace found so far: " + totalMarks);
        sleep(250);
        robot.moveMouseSmooth(second_x, second_y);
        sleep(250);
        robot.mouseClick();
        sleep(2000);
        robot.moveMouseSmooth(second_xx, second_yy);
        sleep(250);
        robot.mouseClick()
        sleep(3000);

        
    }  
}

function confirmMarkOfGraceThirdThird() {
    var a = 856; // Check to see if there is mark fo grace
    var b = 615;

    var second_x = getRandomInt(861,872); // walk to the mark of grace
    var second_y = getRandomInt(612, 621);

    var second_xx = getRandomInt(852, 871); // keep doing agility
    var second_yy = getRandomInt(498, 516);

    var second_xxx = getRandomInt(637, 652);
    var second_yyy = getRandomInt(612, 623);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "2db820") {
        console.log("Mark of Grace found!");
        totalMarks++;
        console.log("Total Marks of Grace found so far: " + totalMarks);
        sleep(250);
        robot.moveMouseSmooth(second_x, second_y);
        sleep(250);
        robot.mouseClick();
        sleep(2000);
        robot.moveMouseSmooth(second_xx, second_yy);
        sleep(250);
        robot.mouseClick()
        sleep(3000);

        
    }  
}

function confirmMarkOfGraceThirdThirdThird() {
    var a = 882; // Check to see if there is mark fo grace
    var b = 597;

    var second_x = getRandomInt(880,889); // walk to the mark of grace
    var second_y = getRandomInt(591, 602);

    var second_xx = getRandomInt(832, 851); // keep doing agility
    var second_yy = getRandomInt(512, 536);

    var second_xxx = getRandomInt(637, 652);
    var second_yyy = getRandomInt(612, 623);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "36bb02") {
        console.log("Mark of Grace found!");
        totalMarks++;
        console.log("Total Marks of Grace found so far: " + totalMarks);
        sleep(250);
        robot.moveMouseSmooth(second_x, second_y);
        sleep(250);
        robot.mouseClick();
        sleep(2000);
        robot.moveMouseSmooth(second_xx, second_yy);
        sleep(250);
        robot.mouseClick()
        sleep(3000);

        
    }  
}





function confirmMarkOfGraceLast() {
    var a = 832; // Check to see if there is mark fo grace
    var b = 601;
// Toisen pienen talon vasemman alapuolela oleva markki
    var second_x = getRandomInt(835,846); // walk to the mark of grace
    var second_y = getRandomInt(598, 604);

    var second_xx = getRandomInt(838, 867); // keep doing agility
    var second_yy = getRandomInt(494, 511);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "00e800") {
        console.log("Mark of Grace found!");
        totalMarks++;
        console.log("Total Marks of Grace found so far: " + totalMarks);
        sleep(250);
        robot.moveMouseSmooth(second_x, second_y);
        sleep(250);
        robot.mouseClick();
        sleep(2000);
        robot.moveMouseSmooth(second_xx, second_yy);
        sleep(250);
        robot.mouseClick()
        sleep(7000);
        
    }  
}






function confirmSecondClick() {
    var a = 773;
    var b = 606;

    var second_x = getRandomInt(728,755);
    var second_y = getRandomInt(659, 691);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "ff61ff") {
        
        sleep(250);
        robot.moveMouseSmooth(second_x, second_y);
        sleep(250);
        robot.mouseClick();
        sleep(4000);
    }  
}

/*
function confirmThirdClick() {
    var a = 746; // Mark of grace position
    var b = 584;
q2
    var d = 772; // Keep doing agility, if there is no mark of grace
    var c = 522

    var third_x = getRandomInt(666,677); // keep on doing agility cordinations
    var third_y = getRandomInt(521, 535);

    var third_xx = getRandomInt(744, 751); // walk and get the mark of grace cordinations
    var third_yy = getRandomInt(578, 584);

    var third_xxx = getRandomInt(834, 841); // keep doing agility after picking up mark of grace
    var third_yyy = getRandomInt(639, 646);


    var pixel_color = robot.getPixelColor(d, c) // Get color for keep doing agility
    var pixel_colour = robot.getPixelColor(a, b) // Get color of mark of grace

    if (pixel_colour == "908906") { // Searching if mark of grace is on the floor
        robot.moveMouseSmooth(third_xx, third_yy);
        sleep(250);
        robot.mouseClick();
        sleep(500);
        robot.moveMouseSmooth(third_xxx, third_yyy);
        sleep(250);
        robot.mouseClick();
        sleep(8000);
        console.log("FOUND A MARK OF GRACE!");
    
    }else if(pixel_color == "636d6f") 
        sleep(250);
        robot.moveMouseSmooth(third_x, third_y);
        sleep(250);
        robot.mouseClick();
        sleep(8000);
        console.log("Keep going!")
    }
*/



function confirmThirdClick() {
    var a = 703;
    var b = 572;

    var third_x = getRandomInt(836,849);
    var third_y = getRandomInt(774, 793);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "3061ff") {
        sleep(250);
        robot.moveMouseSmooth(third_x, third_y);
        sleep(250);
        robot.mouseClick();
        sleep(8500);
    }
}

/*
function confirmFourthClick() {
    var a = 746; // Mark of grace position
    var b = 584;

    var d = 671; // Keep doing agility, if there is no mark of grace
    var c = 1008;

    var third_x = getRandomInt(755,763); // keep on doing agility cordinations
    var third_y = getRandomInt(657, 663);

    var third_xx = getRandomInt(744, 751); // walk and get the mark of grace cordinations
    var third_yy = getRandomInt(578, 584);

    var third_xxx = getRandomInt(834, 841); // keep doing agility after picking up mark of grace
    var third_yyy = getRandomInt(639, 646);


    var pixel_color = robot.getPixelColor(d, c) // Get color for keep doing agility
    var pixel_colour = robot.getPixelColor(a, b) // Get color of mark of grace

    if (pixel_colour == "908906") { // Searching if mark of grace is on the floor
        robot.moveMouseSmooth(third_xx, third_yy);
        sleep(250);
        robot.mouseClick();
        sleep(500);
        robot.moveMouseSmooth(third_xxx, third_yyy);
        sleep(250);
        robot.mouseClick();
        sleep(9500);
        console.log("FOUND A MARK OF GRACE!");
        
    
    }else if(pixel_color == "8c99b5") 
        sleep(250);
        robot.moveMouseSmooth(third_x, third_y);
        sleep(250);
        robot.mouseClick();
        sleep(9500);
        console.log("Keep going!")
    }

*/



function confirmFourthClick() {
    var a = 817;
    var b = 624;

    var fourth_x = getRandomInt(855,892);
    var fourth_y = getRandomInt(524, 539);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "b02e8a") {
        sleep(250);
        robot.moveMouseSmooth(fourth_x, fourth_y);
        sleep(250);
        robot.mouseClick();
        sleep(12500);
        
    } 

    
}



function confirmAgilityTwo() {

    var a = 649;
    var b = 731;

    var fourth_xxx = getRandomInt(1107, 1112);
    var fourth_yyy = getRandomInt(656, 657);

    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "b79a0a") {

        robot.moveMouseSmooth(fourth_xxx, fourth_yyy);
        sleep(250);
        robot.mouseClick();
        sleep(10500);  
        confirmThirdClick();
        sleep(500);
        confirmHealthOne();
        console.log("Ouch!");
    }



}




function confirmAgility() {

    var a = 989;
    var b = 789;

    var fourth_xx = getRandomInt(1129, 1132);
    var fourth_yy = getRandomInt(489, 492);

    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "0878ff") {

        robot.moveMouseSmooth(fourth_xx, fourth_yy);
        sleep(250);
        robot.mouseClick();
        sleep(11000);
        confirmThirdClick();
        confirmFourthClick();
        console.log("Ouch!");
    }



}







function confirmFifthClick() {
    var a = 935;
    var b = 644;

    var fifth_x = getRandomInt(889,917);
    var fifth_y = getRandomInt(535, 553);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "c6423e") {
       
        sleep(250);
        robot.moveMouseSmooth(fifth_x, fifth_y);
        sleep(250);
        robot.mouseClick();
        sleep(4000);

    }
}

function confirmSixClick() {
    var a = 963;
    var b = 558;

    var six_x = getRandomInt(882, 891);
    var six_y = getRandomInt(471, 483);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "0b423e") {
    
        sleep(250);
        robot.moveMouseSmooth(six_x, six_y);
        sleep(250);
        robot.mouseClick();
        sleep(5000);
    }
}


var totalLap = 0;
function confirmFinalClick() {
    var a = 977;
    var b = 653;
    

    var final_x = getRandomInt(789,823);
    var final_y = getRandomInt(457, 489);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "0b423e") {
      
        sleep(250);
        robot.moveMouseSmooth(final_x, final_y);
        sleep(250);
        robot.mouseClick();
        totalLap++;
        console.log("Lap counter: " + totalLap);
        sleep(3000);

        

    }else if(totalLap >= 280) {
        logOut();
        sleep(4000);
        return;
    }
}
/*
function confirmHealthOne() {
    var a = 1463;
    var b = 116;
    var mouse_x = getRandomInt(1452, 1455);
    var mouse_y = getRandomInt(801, 808);

    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour != "860603") {
        robot.moveMouseSmooth(mouse_x, mouse_y);
        sleep(200);
        robot.mouseClick();
        sleep(500);
        console.log("Eating");
    }
}

function confirmHealthTwo() {
    var a = 1463;
    var b = 116;
    var mouse_xx = getRandomInt(1494, 1497);
    var mouse_yy = getRandomInt(801, 808);

    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour != "860603") {
        robot.moveMouseSmooth(mouse_xx, mouse_yy);
        sleep(200);
        robot.mouseClick();
        sleep(500);
    }
}

*/



function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function getRandomInt(min, max) {
    // inclusive of min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function confirmLogIn() {
    var a = 435;
    var b = 318;
    robot.setKeyboardDelay(1)
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour == "ffffff") {
        console.log("Logging in, please wait...");
        sleep(500);
        robot.moveMouse(429, 313);
        sleep(1000);
        robot.mouseClick();
        sleep(1000);
        robot.typeString("MoikkaHe05Ka10");
        sleep(500);
        robot.moveMouseSmooth(308,344);
        sleep(250);
        robot.mouseClick();
        sleep(18000);
        robot.moveMouseSmooth(775,372);
        sleep(250);
        robot.mouseClick();
        sleep(3000);
        totalLap = 0;
    }
}

function confirmBankOpen() {
    var a = 250;
    var b = 497;

    var banklady_x = getRandomInt(136,162);
    var banklady_y = getRandomInt(474, 532);

    
    var pixel_colour = robot.getPixelColor(a, b)
    if (pixel_colour != "494034") {
        sleep(250);
        robot.moveMouseSmooth(banklady_x, banklady_y);
        sleep(250);
        robot.mouseClick();
        sleep(250);
    }
    
    
    
    }






function getRandomInt(min, max) {
    // inclusive of min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}







function bankSearch() {
    // take a screenshot from just the middle of our screen.
    // I have the upper left corner of the image starting at x = 300, y = 300, and size of
    // the image at width = 1300, height = 400.
    // you should adjust this to your own screen size. you might also try reducing the size
    // if this is running slow for you.
    var x = 390, y = 450, width = 30, height = 40;
    var img = robot.screen.capture(x, y, width, height);

    // make an array that contains colors of the trees we want to click on.
    // I'm targeting the brown colors of the trunks.
    //var tree_colors = ["1a0b07", "37160d", "30130c","461b11", "532013", "572214","414a1d", "565e30", "303619", "5f672e", "707e37", "4d5e18", "", ""];
    //var tree_colors = ["3a1400", "2d1000", "662f00","491900", "431700", "612d00", "481d00", "392500", "532c00", "502600", "925d00", "552a00", "672f00", "492700", "302204", "6a3100"];
    var tree_colors = ["342a10", "2a220d", "352b10", "27200c", "261f0c", "2a220d", "29220d"];
    // sample up to 500 random pixels inside our screenshot until we find one that matches
    // a tree color.
    for (var i = 0; i < 1500; i++) {
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (tree_colors.includes(sample_color)) {
            // because we took a cropped screenshot, and we want to return the pixel position
            // on the entire screen, we can account for that by adding the relative crop x and y
            // to the pixel position found in the screenshot;
            var screen_x = random_x + x;
            var screen_y = random_y + y;
            
            console.log("Found next banker at: " + screen_x + ", " + screen_y + " color " + sample_color);
            return {x: screen_x, y: screen_y};
            
        }else {
            console.log("Could not find banker step at: " + screen_x + ", " + screen_y + " color " + sample_color);
            
        }
    }
    return false;
}


function getColor() {
    sleep(3000);
    var mouse = robot.getMousePos();
    var hex = robot.getPixelColor(mouse.x, mouse.y);
    console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);

}

function bankSearch() {
    // take a screenshot from just the middle of our screen.
    // I have the upper left corner of the image starting at x = 300, y = 300, and size of
    // the image at width = 1300, height = 400.
    // you should adjust this to your own screen size. you might also try reducing the size
    // if this is running slow for you.
    var x = 390, y = 450, width = 30, height = 40;
    var img = robot.screen.capture(x, y, width, height);

    // make an array that contains colors of the trees we want to click on.
    // I'm targeting the brown colors of the trunks.
    //var tree_colors = ["1a0b07", "37160d", "30130c","461b11", "532013", "572214","414a1d", "565e30", "303619", "5f672e", "707e37"
    //var tree_colors = ["3a1400", "2d1000", "662f00","491900", "431700", "612d00", "481d00", "392500", "532c00", "502600", "925d00
    var tree_colors = ["342a10", "2a220d", "352b10", "27200c", "261f0c", "2a220d", "29220d"];
    // sample up to 500 random pixels inside our screenshot until we find one that matches
    // a tree color.
    for (var i = 0; i < 1500; i++) {
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (tree_colors.includes(sample_color)) {
            // because we took a cropped screenshot, and we want to return the pixel position
            // on the entire screen, we can account for that by adding the relative crop x and y
            // to the pixel position found in the screenshot;
            var screen_x = random_x + x;
            var screen_y = random_y + y;
            
            console.log("Found next banker at: " + screen_x + ", " + screen_y + " color " + sample_color);
            return {x: screen_x, y: screen_y};
            
        }else {
            console.log("Could not find banker step at: " + screen_x + ", " + screen_y + " color " + sample_color);
            
        }
    }
    return false;
}

function dropLogs() {
    var inventory_slot_1_x = 579;
    var inventory_slot_1_y = 804;
    var inventory_slot_2_x = 623;
    var inventory_slot_2_y = 804;
    var inventory_slot_3_x = 665;
    var inventory_slot_3_y = 804;
    var inventory_slot_4_x = 707;
    var inventory_slot_4_y = 804;
    var inventory_slot_5_x = 582;
    var inventory_slot_5_y = 843;
    var inventory_slot_6_x = 625;
    var inventory_slot_6_y = 845;
    var inventory_slot_7_x = 667;
    var inventory_slot_7_y = 847;
    var inventory_slot_8_x = 707;
    var inventory_slot_8_y = 844;
    var inventory_slot_9_x = 579;
    var inventory_slot_9_y = 873;
    var inventory_slot_10_x = 623;
    var inventory_slot_10_y = 875;
    var inventory_slot_11_x = 665;
    var inventory_slot_11_y = 876;
    var inventory_slot_12_x = 706;
    var inventory_slot_12_y = 873;
    var inventory_slot_13_x = 578;
    var inventory_slot_13_y = 912;
    var inventory_slot_14_x = 624;
    var inventory_slot_14_y = 911;
    var inventory_slot_15_x = 666;
    var inventory_slot_15_y = 914;
    var inventory_slot_16_x = 706;
    var inventory_slot_16_y = 915;
    var inventory_slot_17_x = 580;
    var inventory_slot_17_y = 947;
    var inventory_slot_18_x = 621;
    var inventory_slot_18_y = 948;
    var inventory_slot_19_x = 667;
    var inventory_slot_19_y = 950;
    var inventory_slot_20_x = 707;
    var inventory_slot_20_y = 951;
    var inventory_slot_21_x = 579;
    var inventory_slot_21_y = 982;
    var inventory_slot_22_x = 621;
    var inventory_slot_22_y = 981;
    var inventory_slot_23_x = 664;
    var inventory_slot_23_y = 984;
    var inventory_slot_24_x = 705;
    var inventory_slot_24_y = 985;
    var inventory_slot_25_x = 579;
    var inventory_slot_25_y = 1020;
    var inventory_slot_26_x = 620;
    var inventory_slot_26_y = 1016;
    var inventory_slot_27_x = 708;
    var inventory_slot_27_y = 1023;
    


    var rock_color = "3e3529";
    //var background = ["c7a76f", "cdac72", "c1a26c", "c9a96f", "c7a76f","be9f6a","bb9c67"];
    
    var pixel_color = robot.getPixelColor(inventory_slot_27_x, inventory_slot_27_y);
    //console.log(pixel_color);'

    var wait_cycle = 0;
    var max_wait_cycle = 9;
    // Pixel_color is not equal to rock_color and ...
    while (pixel_color == rock_color && wait_cycle < max_wait_cycle) {
        sleep(350);
        pixel_color = robot.getPixelColor(inventory_slot_27_x, inventory_slot_27_y);
        wait_cycle++;

    }


    // drop logs from the inventory
    if (pixel_color != rock_color) {
    //robot.moveMouseSmooth(inventory_slot_1_x, inventory_slot_1_y);
    //sleep(300);
    //robot.mouseClick('right');
    //sleep(150);
    //robot.moveMouseSmooth(inventory_slot_1_x, inventory_slot_1_y + 40);
    //sleep(300);
    //robot.mouseClick();
    //sleep(150);

    robot.moveMouseSmooth(inventory_slot_2_x, inventory_slot_2_y);
    sleep(250);
    //robot.keyToggle(String.fromCharCode(16), 'down', 'shift')
    //sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_3_x, inventory_slot_3_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);

    robot.moveMouseSmooth(inventory_slot_4_x, inventory_slot_4_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_5_x, inventory_slot_5_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_6_x, inventory_slot_6_y);
    sleep(250);
    robot.mouseClick();
    sleep(150);



    robot.moveMouseSmooth(inventory_slot_7_x, inventory_slot_7_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_8_x, inventory_slot_8_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);



    robot.moveMouseSmooth(inventory_slot_9_x, inventory_slot_9_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);

    robot.moveMouseSmooth(inventory_slot_10_x, inventory_slot_10_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_11_x, inventory_slot_11_y);
    sleep(250);
    robot.mouseClick();
    sleep(150);

    robot.moveMouseSmooth(inventory_slot_12_x, inventory_slot_12_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_13_x, inventory_slot_13_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_14_x, inventory_slot_14_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_15_x, inventory_slot_15_y);
    sleep(250);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_16_x, inventory_slot_16_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_17_x, inventory_slot_17_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_18_x, inventory_slot_18_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_19_x, inventory_slot_19_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);



    robot.moveMouseSmooth(inventory_slot_20_x, inventory_slot_20_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_21_x, inventory_slot_21_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_22_x, inventory_slot_22_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_23_x, inventory_slot_23_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_24_x, inventory_slot_24_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_25_x, inventory_slot_25_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_26_x, inventory_slot_26_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    robot.moveMouseSmooth(inventory_slot_27_x, inventory_slot_27_y);
    sleep(300);
    robot.mouseClick();
    sleep(150);


    
    }
}

 
 
 
 
 
 

 
 
main();
