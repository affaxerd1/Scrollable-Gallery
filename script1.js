const container=document.querySelector(".container");
const panels=document.querySelectorAll(".panel");

panels.forEach(function(panel) {
    panel.addEventListener("click", function(e){
        remove();
        panel.classList.add("active");
    });

    function remove(){
        panels.forEach( function (panel){
            panel.classList.remove("active");
        });
    }
    
});