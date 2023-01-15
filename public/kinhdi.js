function rederMovie() {
    fetch("http://127.0.1:3000/ttuser/upload")
    .then((rep) => rep.json())
    .then((data) => arr(data));
    function arr(data) {
    
      let result = ''
    
        for (let i = 0; i < data.length; i++) {
            if (data[i].theloai == "kinhdi") {
                        result = result + `
            
    
        
        
 
            <div class="list3">
              <div class="item small">
                                <span class="label">HD-Vietsub</span>
                <div class="thea" onclick="xemVideo('${data[i].url}')">
                    <img width="100%" height="134px" src="./imgtest/proxy (${i}).jpg" alt="">
                    <p>${data[i].name}</p>
                    <i class="icon-play"></i>
                </div>
              </div>
        
          </div>
          
    
    
    
        
            
            `
            }
    
            
        }
        document.getElementById("rendercon").innerHTML = result
    }
    
    }
    rederMovie()
    function xemVideo(url) {
      localStorage.setItem("url" , url)
      window.location.href = `xemPhim/?name=${url}`
  }