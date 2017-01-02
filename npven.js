 
 /*  npven.js v 1.0
  *  Made by Victor Rijks
  *  Free to use and modify, just keep my name somewhere (;
  */


// CONFIGURATION

var LANG_ok = "OK";
var LANG_accept = "Accept";
var LANG_deny = "Deny";

// --> Use the npven_custom to create more specific alert


npven_create = function (type, title, content, choice, url, timer, timertype, frame, anim) {

if (typeof type == "number") {
if (typeof title == "string") {
if (typeof content == "string") {
if (typeof choice == "number") {
if (typeof url == "string") {
if (typeof timer == "number") {
if (typeof timertype == "number") {
if (typeof frame == "string") {

if (type == 1) {

if (url == "reload") {
    var url = window.location.href;
};

if (choice == 0) {
var finalAlertContent = 
"<div class='npven_box' id='npven_style_1'>" + 
"<div class='npven_title'>"
 + title + 
"</div>" +
"<div class='npven_content'>"
+ content + 
"</div>" +
"<div class='npven_action'>" +
"<a href='" 
+ url + 
"' id='npven_style_ok'>"+LANG_ok+"</a>" + 
"</div>" +
"</div>";
document.getElementById(frame).innerHTML = finalAlertContent;
};
if (choice == 1) {
var finalAlertContent = 
"<div class='npven_box' id='npven_style_1_choice'>" + 
"<div class='npven_title'>"
 + title + 
"</div>" +
"<div class='npven_content'>"
+ content + 
"</div>" +
"<div class='npven_action'>" +
"<a href='" 
+ url + 
"' id='npven_style_accept'>"+ LANG_accept +"</a>" +
"<a onClick='npven_clear()' href='"
+ "javascript:void(0);" + 
"' id='npven_style_deny'>"+LANG_deny+"</a>" +  
"</div>" +
"</div>";
document.getElementById(frame).innerHTML = finalAlertContent;
};

if (typeof anim == "string") {
    var frameID = document.getElementById(frame);

if (anim != "none") {
    if (anim == "fade") {
        frameID.style.opacity = '0';
        setTimeout(function(){ 
        frameID.style.transition = 'all 0.8s';
        frameID.style.opacity = '1';        
        }, 300);
    };
    if (anim == "slide") {
        frameID.style.top = '-100%';
        setTimeout(function(){ 
        frameID.style.transition = 'all 0.8s';
        frameID.style.top = '0';        
        }, 300);
    };

};

};



if (timer > 0) {
if (timertype == 1) {
var time = timer*1000;
    setTimeout(function(){ 
    npven_clear()
    }, time);
} else {
var time = timer*1000;
    setTimeout(function(){ 
    window.location.href = url;
    }, time);
}


}; // timer

var styles = [
    'background: #2c3e50'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c Npven alert loaded.', styles);
};//type 1


if (type == 2) {

if (choice == 0) {
var finalAlertContent = 
"<div class='npven_box' id='npven_style_2'>" + 
"<div class='npven_title'>"
 + title + 
"</div>" +
"<div class='npven_content'>"
+ content + 
"</div>" +
"<div class='npven_action'>" +
"<a href='javascript:void(0);' onClick='"+url+"' id='npven_style_ok'>"+LANG_ok+"</a>" + 
"</div>" +
"</div>";
document.getElementById(frame).innerHTML = finalAlertContent;
};
if (choice == 1) {
var urlAr = url.split(',');
var finalAlertContent = 
"<div class='npven_box' id='npven_style_2_choice'>" + 
"<div class='npven_title'>"
 + title + 
"</div>" +
"<div class='npven_content'>"
+ content + 
"</div>" +
"<div class='npven_action'>" +
"<a href='javascript:void(0);' onClick='"+urlAr[0]+"' id='npven_style_accept'>"+LANG_accept+"</a>" +
"<a  href='javascript:void(0);' onClick='"+urlAr[1]+"'" + 
"' id='npven_style_deny'>"+LANG_deny+"</a>" +  
"</div>" +
"</div>";
document.getElementById(frame).innerHTML = finalAlertContent;
};



if (typeof anim == "string") {
    var frameID = document.getElementById(frame);

if (anim != "none") {
    if (anim == "fade") {
        frameID.style.opacity = '0';
        setTimeout(function(){ 
        frameID.style.transition = 'all 0.8s';
        frameID.style.opacity = '1';        
        }, 300);
    };
    if (anim == "slide") {
        frameID.style.top = '-100%';
        setTimeout(function(){ 
        frameID.style.transition = 'all 0.8s';
        frameID.style.top = '0';        
        }, 300);
    };

};

};




if (timer > 0) {
if (timertype == 1) {
var time = timer*1000;
    setTimeout(function(){ 
    npven_clear()
    }, time);
} else {
var time = timer*1000;
    setTimeout(function(){ 
    window.location.href = url;
    }, time);
}

}; // timer

var styles = [
    'background: #2c3e50'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c Npven alert loaded.', styles);
};//type 2


} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "frame" is not defined correctly.', styles);
};
} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "timertype" is not defined correctly.', styles);
};
} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "timer" is not defined correctly.', styles);
};
} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "url" is not defined correctly.', styles);
};
} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "choice" is not defined correctly.', styles);
};
} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "content" is not defined correctly.', styles);
};
} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "title" is not defined correctly.', styles);
};
} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "type" is not defined correctly.', styles);
};

  this.npven_clear = function(){
     document.getElementById(frame).innerHTML = "<b id='npven_statut' style='display:none;'>nothing</b>";
  };


}
 
   function npven_clear_spec(frame){
     document.getElementById(frame).innerHTML = "<b id='npven_statut' style='display:none;'>nothing</b>";
  };


npven_custom = function (textline, buttons, actions, images, frame, anim) {
if (typeof textline == "string") {
if (typeof buttons == "string") {
if (typeof actions == "string") {
if (typeof images == "string") {
if (typeof frame == "string") {

var textline_array = textline.split(',');
var textline_number = textline_array.length;
var buttons_array = buttons.split(',');
var buttons_number = buttons_array.length;
var actions_array = actions.split(',');
var actions_number = actions_array.length;
var images_array = images.split(',');
var images_number = images_array.length;

var textline_final = [];
var i = 0;
while (i<textline_number) {
textline_final.push("<p id='textline_number_"+i+"'>"+textline_array[i]+"</p>");
i++;
}
var textline_final_str = textline_final.toString();
var textline_final_str = textline_final_str.split(",").join("");


var buttons_final = [];
var i = 0;
while (i<buttons_number) {
buttons_final.push("<button id='button_number_"+i+"' onClick="+actions_array[i]+">"+buttons_array[i]+"</button>");
i++;
}
var buttons_final_str = buttons_final.toString();
var buttons_final_str = buttons_final_str.split(",").join("");



var images_final = [];
var i = 0;
while (i<images_number) {
images_final.push("<img id='npven_image_"+i+"' src='"+images_array[i]+"'>");
i++;
}
var images_final_str = images_final.toString();
var images_final_str = images_final_str.split(",").join("");





var finalAlertContent = 
"<div class='npven_box' id='npven_custom'>"
+textline_final_str+
buttons_final_str+
images_final_str+
"</div>";
document.getElementById(frame).innerHTML = finalAlertContent;


if (typeof anim == "string") {
    var frameID = document.getElementById(frame);

if (anim != "none") {
    if (anim == "fade") {
        frameID.style.opacity = '0';
        setTimeout(function(){ 
        frameID.style.transition = 'all 0.8s';
        frameID.style.opacity = '1';        
        }, 300);
    };
    if (anim == "slide") {
        frameID.style.top = '-100%';
        setTimeout(function(){ 
        frameID.style.transition = 'all 0.8s';
        frameID.style.top = '0';        
        }, 300);
    };

};

};




} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "string" is not defined correctly.', styles);
};
} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "images" is not defined correctly.', styles);
};
} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "actions" is not defined correctly.', styles);
};
} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "buttons" is not defined correctly.', styles);
};
} else {
var styles = [
    'background: #c0392b'
    , 'color: white'
    , 'display: block'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'text-align: center'
].join(';');
console.log('%c the parameter "textline" is not defined correctly.', styles);
};
}