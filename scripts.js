const taskEnter=document.querySelector(".inputTask")
const plus=document.querySelector(".plusButton")
const ulTag=document.querySelector(".newItem")
console.log(ulTag)
plus.addEventListener("click",Emptycontrol)

function Emptycontrol(){
    if ((taskEnter.value)=="") {
        alert("Enter a task")
    }
    else{
        var newli=document.createElement("li")
        var att=document.createAttribute("class")
        att.value="list-group-item active bg-white border border-danger border-2 text-dark"
        newli.setAttributeNode(att)
        newli.textContent=taskEnter.value
    
        var atag=document.createElement("a")
        atag.setAttribute("href","#")
        const a_att=document.createAttribute("class")
        a_att.value="btn btn-outline-danger btn-sm delete-all float-end taskListItem"
        atag.textContent="+"
        atag.setAttributeNode(a_att);
        newli.appendChild(atag)
        ulTag.appendChild(newli)
        taskEnter.value=""

        var newItem=newli.atag
        console.log(ulTag)

    }
    
}

newItem.addEventListener("click",removeItem)

function removeItem(){
    console.log("item remove içindeyim")
    newItem.removeItem
}
