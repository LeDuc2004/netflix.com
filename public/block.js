function rederMovie() {
fetch("http://127.0.1:3000/ttuser/upload")
.then((rep) => rep.json())
.then((data) => arr(data));
function arr(data) {

  let result = ''

    for (let i = 0; i < data.length; i++) {
        if (i == 0 || i == 12 || i == 24) {
                    result = result + `
        <div class="block">

    <div><h2>${data[i].nam}</h2></div>
    <div class="list-movie">
        <div class="list1">
          <div style="width: 100%;" class="item large">
            <span style="font-size: 15px;" class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+0].url}')">
                <img width="100%" height="273px" src="./imgtest/proxy (${i+0}).jpg" alt="">
                <p>${data[i+0].name}</p>
                <i class="icon-play"></i>
            </div>
            
          </div>
          <div class="item small">
            <span class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+1].url}')">
                <img width="100%" height="134px" src="./imgtest/proxy (${i+1}).jpg" alt="">
                <p>${data[i+1].name}</p>
                <i class="icon-play"></i>
            </div>

          </div>
          <div class="item small">
            <span class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+2].url}')">
                <img width="100%" height="134px" src="./imgtest/proxy (${i+2}).jpg" alt="">
                <p>${data[i+2].name}</p>
                <i class="icon-play"></i>
            </div>

          </div>
        </div>
        <div class="list2">
          <div class="item small">
                            <span class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+3].url}')">
                <img width="100%" height="134px" src="./imgtest/proxy (${i+3}).jpg" alt="">
                <p>${data[i+3].name}</p>
                <i class="icon-play"></i>
            </div>
          </div>
          <div class="item small">
                            <span class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+4].url}')">
                <img width="100%" height="134px" src="./imgtest/proxy (${i+4}).jpg" alt="">
                <p>${data[i+4].name}</p>
                <i class="icon-play"></i>
            </div>
          </div>
          <div class="item small">
                            <span class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+5].url}')">
                <img width="100%" height="134px" src="./imgtest/proxy (${i+5}).jpg" alt="">
                <p>${data[i+5].name}</p>
                <i class="icon-play"></i>
            </div>
          </div>
          <div class="item small">
                            <span class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+6].url}')">
                <img width="100%" height="134px" src="./imgtest/proxy (${i+6}).jpg" alt="">
                <p>${data[i+6].name}</p>
                <i class="icon-play"></i>
            </div>
          </div>
          <div class="item small">
                            <span class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+7].url}')">
                <img width="100%" height="134px" src="./imgtest/proxy (${i+7}).jpg" alt="">
                <p>${data[i+7].name}</p>
                <i class="icon-play"></i>
            </div>
          </div>
          <div class="item small">
                            <span class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+8].url}')">
                <img width="100%" height="134px" src="./imgtest/proxy (${i+8}).jpg" alt="">
                <p>${data[i+8].name}</p>
                <i class="icon-play"></i>
            </div>
          </div>
          <div class="item small">
                            <span class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+9].url}')">
                <img width="100%" height="134px" src="./imgtest/proxy (${i+9}).jpg" alt="">
                <p>${data[i+9].name}</p>
                <i class="icon-play"></i>
            </div>
          </div>
          <div class="item small">
                            <span class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+10].url}')">
                <img width="100%" height="134px" src="./imgtest/proxy (${i+10}).jpg" alt="">
                <p>${data[i+10].name}</p>
                <i class="icon-play"></i>
            </div>
          </div>
          <div class="item small">
                            <span class="label">HD-Vietsub</span>
            <div class="thea" onclick="xemVideo('${data[i+11].url}')">
                <img width="100%" height="134px" src="./imgtest/proxy (${i+11}).jpg" alt="">
                <p>${data[i+11].name}</p>
                <i class="icon-play"></i>
            </div>
          </div>
      </div>
      </div>



    </div>
        
        `
        }

        
    }
    document.getElementById("list-block").innerHTML = result
}

}
rederMovie()

