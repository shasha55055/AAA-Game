function show(slide) {
    document.getElementById('container').innerHTML = document.getElementById(slide).innerHTML;
    
  }

function redirect(){
    location.href = "./instructions.html";
}

function main_redirect(){
    location.href = "./main_game.html";
}

function home_redirect(){
    location.href = "./index.html";
}


function slap_sound(){
    document.getElementById("slap_sound").play();
}

function border_color_change(){
    document.getElementsByClassName("buttons").style.color = "grey";
}



window.onload = function (){
    const A_selected = document.getElementById("A");
    A_selected.addEventListener("click", function(){main("A")});
    const B_selected = document.getElementById("B");
    B_selected.addEventListener("click", function(){main("B")});
    const C_selected = document.getElementById("C");
    C_selected.addEventListener("click", function(){main("C")});
    const D_selected = document.getElementById("D");
    D_selected.addEventListener("click", function(){main("D")});
}
let neg_user_health_size = 100;
let user_health_size = 100;
let counter = 1;
function main(user_choice){

    const choices = ["A", "B", "C", "D"];
    const random_num = (Math.floor(Math.random()*4));
    let X = choices[random_num];
    setTimeout(function(){document.getElementById(`display_r${choices[random_num]}`).style.display = "block"},1500);
    undisplay_hand(X);
        
    

    if (counter > 0){
        document.getElementById(`${user_choice}_sound`).play();
        display_hand(user_choice);
        let my_ascii = ((user_choice.codePointAt(0)) - 64);
        if (user_choice == X){
            user_health_size = user_health_size - (10 * my_ascii);
            if (user_health_size > 0) {
                setTimeout(function(){document.getElementById("robot_bar").style.width = `${user_health_size}%`},2000);
            }
            else{
                setTimeout(function(){document.getElementById("robot_bar").style.width = "0"},2000);
                setTimeout(function(){document.getElementById("turn").style.textAlign  = ("center")},2500);
                setTimeout(function(){document.getElementById("turn").innerHTML = ("YOU WON :)")},2500);
                timed_home();
            }
            game_slap_sound(user_choice);   
           

            if (my_ascii > 0) {
                let random_right = (Math.floor(Math.random()*31));
                let random_top = ((Math.floor(Math.random()*41))+20);
                setTimeout(function(){document.getElementById("ouch_1").style.display = "block"},2000);
                document.getElementById("ouch_1").style.top = `${random_top}%`;
                document.getElementById("ouch_1").style.right = `${random_right}%`;
    
                setTimeout(function(){document.getElementById("ouch_1").style.display = "none"}, 2400);

            }
            if (my_ascii > 1) {
                let random_right = (Math.floor(Math.random()*31));
                let random_top = ((Math.floor(Math.random()*41))+20);
                setTimeout(function(){document.getElementById("ouch_2").style.display = "block"},2400);
                document.getElementById("ouch_2").style.top = `${random_top}%`;
                document.getElementById("ouch_2").style.right = `${random_right}%`;
    
                setTimeout(function(){document.getElementById("ouch_2").style.display = "none"}, 2800);

            }
            if (my_ascii > 2) {
                let random_right = (Math.floor(Math.random()*31));
                let random_top = ((Math.floor(Math.random()*41))+20);
                setTimeout(function(){document.getElementById("ouch_3").style.display = "block"},2800);
                document.getElementById("ouch_3").style.top = `${random_top}%`;
                document.getElementById("ouch_3").style.right = `${random_right}%`;
    
                setTimeout(function(){document.getElementById("ouch_3").style.display = "none"}, 3200);

            }
            if (my_ascii > 3) {
                let random_right = (Math.floor(Math.random()*31));
                let random_top = ((Math.floor(Math.random()*41))+20);
                setTimeout(function(){document.getElementById("ouch_4").style.display = "block"},3200);
                document.getElementById("ouch_4").style.top = `${random_top}%`;
                document.getElementById("ouch_4").style.right = `${random_right}%`;
    
                setTimeout(function(){document.getElementById("ouch_4").style.display = "none"}, 3600);

            }
           
        }
    
        else { 
            counter = counter - 1;
            play_buzz();
            switch_turn();
        }
        display_reset(user_choice);
    }

    else if (counter == 0){
        document.getElementById(`R${X}_sound`).play();
        display_hand(user_choice);
        let robo_ascii = ((X.codePointAt(0)) - 64);
        if (user_choice == X){
            neg_user_health_size = neg_user_health_size - (10 * robo_ascii);
            if (neg_user_health_size > 0) {
                setTimeout(function(){document.getElementById("my_bar").style.width = `${neg_user_health_size}%`},2000);
            }
            else{
                setTimeout(function(){document.getElementById("my_bar").style.width = "0"},2000);
                setTimeout(function(){document.getElementById("turn").innerHTML = ("YOU LOST :(")},2500);
                setTimeout(function(){document.getElementById("turn").style.textAlign  = ("center")},2500);
                timed_home();
            }
            game_slap_sound(X);
            

            if (robo_ascii > 0) { 
                let random_right = (Math.floor(Math.random()*41)+50);
                let random_top = (Math.floor(Math.random()*61));
                setTimeout(function(){document.getElementById("ouch_1").style.display = "block"},2000);
                document.getElementById("ouch_1").style.top = `${random_top}%`;
                document.getElementById("ouch_1").style.right = `${random_right}%`;
    
                setTimeout(function(){document.getElementById("ouch_1").style.display = "none"}, 2400);

            }
            if (robo_ascii > 1) {
                let random_right = (Math.floor(Math.random()*41)+50);
                let random_top = (Math.floor(Math.random()*61));
                setTimeout(function(){document.getElementById("ouch_2").style.display = "block"},2400);
                document.getElementById("ouch_2").style.top = `${random_top}%`;
                document.getElementById("ouch_2").style.right = `${random_right}%`;
    
                setTimeout(function(){document.getElementById("ouch_2").style.display = "none"}, 2800);

            }
            if (robo_ascii > 2) {
                let random_right = (Math.floor(Math.random()*41)+50);
                let random_top = (Math.floor(Math.random()*61));
                setTimeout(function(){document.getElementById("ouch_3").style.display = "block"},2800);
                document.getElementById("ouch_3").style.top = `${random_top}%`;
                document.getElementById("ouch_3").style.right = `${random_right}%`;
    
                setTimeout(function(){document.getElementById("ouch_3").style.display = "none"}, 3200);

            }
            if (robo_ascii > 3) {
                let random_right = (Math.floor(Math.random()*41)+50);
                let random_top = (Math.floor(Math.random()*61));
                setTimeout(function(){document.getElementById("ouch_4").style.display = "block"},3200);
                document.getElementById("ouch_4").style.top = `${random_top}%`;
                document.getElementById("ouch_4").style.right = `${random_right}%`;
    
                setTimeout(function(){document.getElementById("ouch_4").style.display = "none"}, 3600);

            }


        }
        else { 
            counter = counter + 1;
            play_buzz();
            switch_turn_2();
        }
        display_reset(user_choice);
    }  
    console.log(user_choice);
    console.log(X);
    console.log(counter);   
}

function play_buzz(){
    setTimeout(function(){document.getElementById("buzz_sound").play()},2000);
}

function game_slap_sound(sound_decider){

    setTimeout(function(){document.getElementById(`slap_${sound_decider}`).play()},2000);
}


function switch_turn_2(){
    setTimeout(function(){document.getElementById("turn").innerHTML = ("Your turn")},2300);
    setTimeout(function(){document.getElementById("turn").style.textAlign  = ("left")},2300);
}

function switch_turn(){
    setTimeout(function(){document.getElementById("turn").innerHTML = ("Tobor's turn")}, 2300);  
    setTimeout(function(){document.getElementById("turn").style.textAlign  = ("right")},2300);  
}
 

function timed_home(){
    setTimeout(function(){location.href = "./index.html"}, 6000);
}

function display_hand(user_choice){
    setTimeout(function(){document.getElementById(`display_${user_choice}`).style.display = "block"},1500);
}

function display_reset(user_choice){
    setTimeout(function(){document.getElementById(`display_${user_choice}`).style.display = "none";}, 3600);
}

function undisplay_hand(X){
    setTimeout(function(){document.getElementById(`display_r${X}`).style.display = "none"}, 3600);
}













