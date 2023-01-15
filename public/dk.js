function home() {
    window.location.href = "http://localhost:3000/"
}
function takedk() {
    document.getElementById("email").value = localStorage.getItem("email")
}
takedk()
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
function passwordp() {
    if (document.getElementById("password").value == "") {
        document.getElementById("errpassword").innerHTML = "Vui lòng nhập mật khẩu !"
        document.getElementById("password").setAttribute("style", "border-bottom:2px solid #e87c03")
    } else {
        if (document.getElementById("password").value.split("").length >= 4) {
            document.getElementById("errpassword").innerHTML = ""
            document.getElementById("password").setAttribute("style", "border-bottom:0px solid #e87c03")
        } else {
            document.getElementById("errpassword").innerHTML = "Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự."
            document.getElementById("password").setAttribute("style", "border-bottom:2px solid #e87c03")
        }

    }
}
function cfpasswordp() {
    if (document.getElementById("cfpassword").value == "") {
        document.getElementById("errcfpassword").innerHTML = "Vui lòng xác nhận mật khẩu !"
        document.getElementById("cfpassword").setAttribute("style", "border-bottom:2px solid #e87c03")
    } else {
        if (document.getElementById("cfpassword").value.split("").length >= 4) {
            document.getElementById("errcfpassword").innerHTML = ""
            document.getElementById("cfpassword").setAttribute("style", "border-bottom:0px solid #e87c03")
            if (document.getElementById("password").value == document.getElementById("cfpassword").value) {
                
            } else {
                document.getElementById("errcfpassword").innerHTML = "Mật khẩu nhập lại không chính xác"
                document.getElementById("cfpassword").setAttribute("style", "border-bottom:2px solid #e87c03")
            }
        } else {
            document.getElementById("errcfpassword").innerHTML = "Mật khẩu nhập lại của bạn phải chứa từ 4 đến 60 ký tự."
            document.getElementById("cfpassword").setAttribute("style", "border-bottom:2px solid #e87c03")
        }

    }
}
let form =  document.getElementById("khungdn-content")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let cfpassword = document.getElementById("cfpassword").value
    let re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    password.trim().split("").length
    if (re.test(email) && password.trim().split("").length >=4 && password == cfpassword) {
        document.getElementById("errcfpassword").innerHTML = ""
        document.getElementById("cfpassword").setAttribute("style", "border-bottom:0px solid #e87c03")

        fetch("http://127.0.1:3000/ttuser")
        .then((rep) => rep.json())
        .then((data) => arr(data));
        function arr(data) {
            
        let doituong = {
            email:form.email.value,
            password:form.password.value
        }
        let flag = 0
        for (let i = 0; i < data.length; i++) {
            if (data[i].email != doituong.email) {
                  flag = true
                
            }else{
                document.getElementById("erremail").innerHTML = "Email đã được đăng ký trước đây !"
                document.getElementById("email").setAttribute("style", "border-bottom:2px solid #e87c03")
                flag = false
                
            }
            


        }
            if (flag) {
                data.unshift(doituong);
                fetch("http://127.0.1:3000/ttuser", { 
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                  
                })
                  .then((res) => res.json())
                  .then((data) => {
                    res.send(data)
                  })
                  .catch((err) => console.log(err));
                  window.location.href = "http://localhost:3000/dangnhap"
            }
          
          
              
        }
        
        

    }
    

})