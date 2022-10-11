function myFunction() {
    const x = document.getElementById("Gdiv");
        if (x.className === "flex container OFF") {
            x.className += "flex container ON";
          } else {
            x.className = "flex container OFF";
          }
  }
 