document.getElementById("viewtb").addEventListener("click", function () {
  fetch('/getdata')
    .then(response => response.json())
    .then(data => {
      data.forEach(row => {
        var Stime = row.stime
        var Time = row.time
        var Venue = row.venue
        var Course = row.course
        var Ccolor = row.c_color
        var Whichday = row.whichday
        var Faculty = row.faculty

        var idmanager ={
          "Monday":0,
          "Tuesday":0,
          "Wednesday":0,
          "Thrusday":0,
          "Friday":0
        
        }

        var div = document.createElement("span");
        div.style.padding = "10px"

        var node = document.createElement("span");
        var textnode = document.createTextNode(Course);
        node.appendChild(textnode);
        node.style.fontSize = "22px"
        div.appendChild(node);


        var node1 = document.createElement("span");
        var textnode1 = document.createTextNode(" " + Venue);
        node1.appendChild(textnode1);
        node1.style.fontSize = "19px"
        div.appendChild(node1);

        let node2 = document.createElement("p");
        let textnode2 = document.createTextNode(Faculty);
        node2.appendChild(textnode2);
        node2.style.fontSize = "15px"
        div.appendChild(node2);
        stime = Number(Stime)
        time = Number(Time)
        i = Number(idmanager[Whichday])

        div.id = day[0] + i
        div.style.position = "absolute";
        div.className += Whichday
        div.style.background = Ccolor;
        div.style.marginTop = Stime * 75 + "px";
        div.style.height = Time * 75 + "px";
        document.getElementById(Whichday).appendChild(div);
        document.getElementById("iclose").click();

      });
    });
});