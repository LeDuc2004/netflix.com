function Blur() {
    if ( document.getElementById("input1").value == '') {
  
    document.getElementById("diachi").setAttribute("style" , "transform: translateY(0%);")
    document.getElementById("input1").setAttribute("style" , "padding-top:0px")
    }

    
}
function Clic() {

    document.getElementById("diachi").setAttribute("style" , "transform: translateY(-60%);font-size: 14px;")
    document.getElementById("input1").setAttribute("style" , "padding-top:15px")
}
function dfhdshf() {

    document.getElementById("input1").click()

}

function Blur1() {
    if (document.getElementById("input11").value == '') {
            document.getElementById("diachi1").setAttribute("style" , "transform: translateY(0%);")
    document.getElementById("input11").setAttribute("style" , "padding-top:0px")
    }

    
}
function Clic1() {

    document.getElementById("diachi1").setAttribute("style" , "transform: translateY(-60%);font-size: 14px;")
    document.getElementById("input11").setAttribute("style" , "padding-top:15px")
}
function dfhdshf1() {

    document.getElementById("input11").click()

}
function tagclass(i,w) {
  let icon = document.getElementById(`icon${i}`)

    if (w == 1 ) {

          
            icon.classList.add("open")
            icon.classList.remove("close")
        document.getElementById(`close${i}`).setAttribute("style","transform: rotate(-45deg);display:;font-size:50px;margin-right:1px")
        document.getElementById(`open${i}`).setAttribute("style","display:none;")
        
    }

     if (w == -1) {
        
        icon.classList.remove("open")
        icon.classList.add("close")
        document.getElementById(`close${i}`).setAttribute("style","transform: rotate(-45deg);display:none;")
        document.getElementById(`open${i}`).setAttribute("style","display:;")
       
    }


    
}
function dk1() {

    if (document.getElementById("input11").value != "") {
    localStorage.setItem("email" , document.getElementById("input11").value )
    window.location.href = "http://localhost:3000/dangky"
    }else{
        document.getElementById("errdk").setAttribute("style" , "")
    }

}
function dk() {

    if (document.getElementById("input1").value != "") {
        let valueip = document.getElementById("input1").value 
        let re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (re.test(valueip)) {
     localStorage.setItem("email" , valueip)
    window.location.href = "http://localhost:3000/dangky"
            }else{
        document.getElementById("errdk").innerHTML = "Email sai định dạng"
        document.getElementById("input1").setAttribute("style", "border-bottom:2px solid #e87c03")


            }
 


    }else{
        document.getElementById("errdk").innerHTML = "Bạn cần nhập email"
    }

}
function dn() {

   

    window.location.href = "http://localhost:3000/dangnhap"
}

