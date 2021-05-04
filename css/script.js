	// Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    
    
            function getapidata() {
                const img = document.getElementById('movieimg');
                const title = document.getElementById('title');
                const art = document.getElementById("art");
                const s = document.getElementById("addmovie").value;
                console.log(s);
                var api_url =
                    "http://www.omdbapi.com/?s="+s+"&apikey=e0620bd4";
                const xhr = new XMLHttpRequest();
    
                xhr.open("GET", api_url, true);
    
    
                xhr.onload = function () {
                    if (this.status === 200) {
                        obj = JSON.parse(this.responseText);
                        console.log(obj);
                        art.style.display = "unset";
                    title.innerHTML = obj.Search[0].Title;
    img.src=obj.Search[0].Poster;
                        list.innerHTML = JSON.stringify(obj);
                    }
                    else {
                        console.log("File not found");
                    }
                }
                xhr.send();
            }
    
    
    
    