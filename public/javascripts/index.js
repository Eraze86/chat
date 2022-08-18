const socket = io();

let user = {
    username: "",
    room: ""
};



    form = document.getElementById("form")
    input= document.getElementById("input")
    nameInput = document.getElementById("name")
    form.addEventListener("submit", function(e){
        e.preventDefault();
        if(input.value && user.username){
            socket.emit("chat message", {text: input.value, user: user.username, room: user.room })
            input.value="";
        }
    })
   
    socket.on("chat message", function(msg){
      
        console.log("socket Id", user.id);
        console.log("msg", msg)
        chat = document.getElementById("chat");
        console.log("vilken användare",msg.user)
        console.log("vilket rum",msg.room)
     
        if (msg.room == user.room) {
         
            if (msg.user == user.username) {
      
            chat.insertAdjacentHTML("beforeEnd"," <li id='purple'><h4>" + msg.user+ "</h4><br/><div>" + msg.text + "</div></li>")
        }else{
            chat.insertAdjacentHTML("beforeEnd","<li id='green'><h4>" + msg.user+ "</h4><br/><div>" + msg.text + "</div></li>") 
        }
    } 
    })

    function SaveName(){
      user.username = username.value;
      console.log("användarnamn", user.username)
       
       }

   
function Game(){
    console.log("spela")
    user.room = "gameroom"
    chat.innerHTML = "<p>Välkommen till spel rummet  " + user.username +" </p>";
   
}
function Garden(){
    console.log("odla")
    user.room = "gardenroom" 
    chat.innerHTML = "<p>Välkommen till odlings rummet  " + user.username +"</p>"; 
}


