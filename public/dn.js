
function passwordp() {
    if (document.getElementById("crpassword").value == "") {
        document.getElementById("errpassword").innerHTML = "Vui lòng nhập mật khẩu !"
        document.getElementById("crpassword").setAttribute("style", "border-bottom:2px solid #e87c03")
    } else {
        if (document.getElementById("crpassword").value.split("").length >= 4) {
            document.getElementById("errpassword").innerHTML = ""
            document.getElementById("crpassword").setAttribute("style", "border-bottom:0px solid #e87c03")
        } else {
            document.getElementById("errpassword").innerHTML = "Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự."
            document.getElementById("crpassword").setAttribute("style", "border-bottom:2px solid #e87c03")
        }

    }
}

function home() {
    window.location.href = "http://localhost:3000/"
}
function emailp() {
 
    if (document.getElementById("email").value == "") {
        document.getElementById("erremail").innerHTML = "Vui lòng nhập email hợp lệ."
        document.getElementById("email").setAttribute("style", "border-bottom:2px solid #e87c03")

    }else{
        let valueip = document.getElementById("email").value 
        let re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (re.test(valueip)) {
                document.getElementById("erremail").innerHTML = ""

            }else{
        document.getElementById("erremail").innerHTML = "Email sai định dạng"
        document.getElementById("email").setAttribute("style", "border-bottom:2px solid #e87c03")


            }
    }
    
}


let form =  document.getElementById("khungdn-content")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("crpassword").value
    
    let re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    password.trim().split("").length
    if (re.test(email) && password.trim().split("").length >=4 ) {
        document.getElementById("errpassword").innerHTML = ""
        document.getElementById("crpassword").setAttribute("style", "border-bottom:0px solid #e87c03")

        fetch("http://127.0.1:3000/ttuser")
        .then((rep) => rep.json())
        .then((data) => arr(data));
         function arr(data) {
            
        let doituong = {
            email:form.email.value,
            password:form.crpassword.value
        }
        
        if (password == "") {
            document.getElementById("errpassword").innerHTML = "Vui lòng nhập mật khẩu !"
            document.getElementById("crpassword").setAttribute("style", "border-bottom:2px solid #e87c03")
        }
        
        let flag = 0

        for (let i = 0; i < data.length; i++) {
            
            if (data[i].email == doituong.email ) {
                
                document.getElementById("erremail").innerHTML = ""
                document.getElementById("email").setAttribute("style", "border-bottom:0px solid #e87c03")
                flag = true
                  
            } 
            


        }
    
        if (flag) {
            
            
            fetch("http://127.0.1:3000/ttuser/dn", { 
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(doituong),
              
            })                  
            .then((res) => res.json())
            .then((data) => {

                console.log(data);
              if( data.status == undefined){               
                 document.getElementById("errpassword").innerHTML = "Mật khẩu không chính xác !"
                document.getElementById("crpassword").setAttribute("style", "border-bottom:2px solid #e87c03")
                 
              }else if (re.test(data.status) ){
                localStorage.setItem("id" , data.status)
                  window.location.href = "http://127.0.1:3000/home"
                  
              }
            })



              
        }else{
            document.getElementById("erremail").innerHTML = "Email chưa được đăng ký!"
            document.getElementById("email").setAttribute("style", "border-bottom:2px solid #e87c03")
        }
        
        }
        
        

    }
    

})
function load111() {
    for (let i = 0; i < 72; i++) {
        data = [{ 
            id:i,
            name:"cc",
            img:`./imgtest/proxy (${i}).jpg`,
            url:'https://firebasestorage.googleapis.com/v0/b/video-6c7eb.appspot.com/o/test%2FTrailer.mp4?alt=media&token=8d1fa7c7-541c-4ce1-bbe1-fd01440d2659'

        }]
            fetch("http://127.0.1:3000/ttuser/upload", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      
    })                  
    .then((res) => res.json())
    .then((data) => {

    })
        
    }
    

}