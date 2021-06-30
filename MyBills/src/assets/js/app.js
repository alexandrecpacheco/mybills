$(document).ready(function(){
    
    //fnChangeButtonBehaviour();
});

function fnChangeButtonBehaviour(){

    $("#btn-delete").click(function(){
        fnDeleteBtn();
        fnChangeDeleteIcon();
    });
}

// **-- Change Delete Button Behaviour --**
function fnDeleteBtn() {

    var btnStatus = $(".btn-status");
    var iGroup = $(".i-group");

    //Adding Icon
    if (iGroup.hasClass("fa-check")) {
        
        iGroup.removeClass("fa-check");
        btnStatus.removeClass("btn-success");
        
        //Adding Buttons Class
        iGroup.addClass("fa-trash-alt");
        btnStatus.addClass("btn-danger");
    }
    else {
        iGroup.removeClass("fa-trash-alt");
        btnStatus.removeClass("btn-danger");
        
        //Adding Buttons Class
        iGroup.addClass("fa-check");
        btnStatus.addClass("btn-success");
    }
}

function fnChangeDeleteIcon(){

    var btnDelete = $("#btn-delete");
    var iconDelete = $(".i-delete");

    if ((iconDelete).hasClass("fa-trash-alt")){
        //Change Icon
        iconDelete.removeClass("fa-trash-alt");
        iconDelete.addClass("fa-check");
        //Change Color
        btnDelete.removeClass("btn-outline-danger");
        btnDelete.addClass("btn-outline-success");
    }
    else{
        //Change Icon
        iconDelete.removeClass("fa-check");
        iconDelete.addClass("fa-trash-alt");
        //Change Color
        btnDelete.removeClass("btn-outline-success");
        btnDelete.addClass("btn-outline-danger");
    }
}