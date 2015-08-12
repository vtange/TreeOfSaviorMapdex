
function showSkillVideo(file) {
    
    var string;
    string = '<div style="background-color: white; text-align: center; padding: 20px; border-radius: 5px;"';
    string += ' onclick="function(event) { alert(5); }"';
    string += '>';
    string += '<video width="854" height="480" controls muted loop preload="none" autoplay>';
    string += '<source src="content/video/skills/' + file + '.mp4" type="video/mp4">';
    string += '<source src="content/video/skills/' + file + '.webm" type="video/webm">';
    string += "Sorry but your browser doesn't support the HTML5 video element.";
    string += '</video>';
    string += '</div>';
    
    $("#top_layer_content").css("margin-top", "50px");
    $("#top_layer_content").css("width", "894px");
    $("#top_layer_content").html(string);
    
    $("#top_layer").css("display", "block");
}


function showSkillVideo2(file) {
    
    var string;
    string = '<div style="background-color: white; text-align: center; padding: 20px; border-radius: 5px;"';
    string += ' onclick="function(event) { alert(5); }"';
    string += '>';
    string += '<video width="800" height="492" controls muted loop preload="none" autoplay>';
    string += '<source src="content/video/skills/' + file + '.mp4" type="video/mp4">';
    //string += '<source src="content/video/skills/' + file + '.webm" type="video/webm">';
    string += "Sorry but your browser doesn't support the HTML5 video element.";
    string += '</video>';
    string += '</div>';
    
    $("#top_layer_content").css("margin-top", "50px");
    $("#top_layer_content").css("width", "850px");
    $("#top_layer_content").html(string);
    
    $("#top_layer").css("display", "block");
}


function showBossVideo(file) {
    
    var string;
    string = '<div id="top_layer_boss_video" style="background-color: white; text-align: center; padding: 20px; border-radius: 5px;">';
    string += '<video width="100%" poster="content/img/bosses/' + file + '_screen.jpg" controls muted loop preload="auto" style="max-height: 100%;">';
    string += '<source src="content/video/bosses/' + file + '.mp4" type="video/mp4">';
    string += '<source src="content/video/bosses/' + file + '.webm" type="video/webm">';
    string += "Sorry but your browser doesn't support the HTML5 video element.";
    string += '</video>';
    string += '</div>';
    
    $("#top_layer_content").css("margin-top", "100px");
    $("#top_layer_content").css("max-width", "1200px");
    //$("#top_layer_content").css("height", "100px");
    //$("#top_layer_content").css("border", "1px solid red");
    $("#top_layer_content").html(string);
    
    //$("#top_layer_boss_video").css("max-height", $(window).height() + "px");
    
    $("#top_layer").css("display", "block");
}