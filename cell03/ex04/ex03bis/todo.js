$(document).ready(function() {
    let cooky = document.cookie;
    let list = $("#ft_list");
    console.log(cooky);
    if (cooky.length > 0) {
        let presentCooky = cooky.split(";");
        $.each(presentCooky, (key,value) => {
            let cookieValue = value.split("=")[1];
            let decodeValue = decodeURIComponent(cookieValue);
            let newThing = $("<div></div>").addClass("todo").text(decodeValue);
            newThing.click(function() {
                let remove = confirm("Do you want to remove this to do? Really??!!??!!");
                if (remove) {
                    newThing.remove();
                    // console.log(element.split("=")[0]);
                    document.cookie = value.split("=")[0] + "=; expires=Thu, 14 Feb 1990 00:00:00 UTC;";
                }
            });
            list.prepend(newThing);
        });
    }
    $(".btn").click(function() {
        let newList = prompt("Create new to do");
        if (newList != null && newList !== "") {
            let key = new Date().getTime();
            let encodeValue = encodeURIComponent(newList);
            document.cookie = `${key}=${encodeValue}`;
            let newThing = $("<div></div>").addClass("todo").text(newList);
            newThing.on("click", function() {
                let remove = confirm("Do you want to remove this to do? Really??!!??!!");
                if (remove) {
                    newThing.remove();
                    document.cookie = key + "=; expires=Thu, 14 Feb 1990 00:00:00 UTC;";
                }
            });
            list.prepend(newThing);
        }
    });
});






