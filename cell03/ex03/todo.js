let cooky = document.cookie;
let list = document.getElementById("ft_list");
console.log(cooky);
if (cooky.length > 0) {
    let presentCooky = cooky.split(";")
    presentCooky.forEach((element) => {
        const newThing = document.createElement("div");
        newThing.classList.add("todo");
        newThing.innerHTML = element.split("=")[1];
        newThing.onclick = () => {
            let remove = confirm("Do you want to remove this to do? Really??!!??!!");
            if (remove) {
              newThing.remove();
              console.log(element.split("=")[0]);
              document.cookie = element.split("=")[0] + "=; expires=Thu, 14 Feb 1990 00:00:00 UTC;";
            }
        };
        list.prepend(newThing);
    })
}
let newTodo = () => {
   let newList = prompt("Create new todo")
    if (newList != null && newList != ""){
        let key = new Date().getTime();
        document.cookie = key + "=" + newList;
        const newThing = document.createElement("div");
        newThing.classList.add("todo");
        newThing.innerHTML = newList;
        newThing.onclick = () => {
            let remove = confirm("Do you want to remove this to do? Really??!!??!!");
            if (remove) {
              newThing.remove();
              document.cookie = key + "=; expires=Thu, 14 Feb 1990 00:00:00 UTC;";
            }
        }
        list.prepend(newThing);
    }
}
