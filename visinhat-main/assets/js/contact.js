          
                    
function checkName() {
    var name = document.getElementById("txt_name").value;
    var check_error_name = document.getElementById("error_name") ;

    if (name == null || name == "") {
        check_error_name.innerHTML = " Họ và tên không được để trống !" ;
    } else if (!isNaN(name)) {
        check_error_name.innerHTML = " Kí tự không hợp lệ !" ;
    } else {
        check_error_name.innerHTML = "" ;
        return name;
    }
}

function checkPhone() {
    var phone = document.getElementById("txt_phone").value;
    var check_error_phone = document.getElementById("error_phone") ;
    var regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

    if (phone == null || phone == "") {
        check_error_phone.innerHTML = " Số điện thoại không được để trống !" ;
    } else if(!regexPhone.test(phone)) {
        check_error_phone.innerHTML = " Kí tự không hợp lệ !" ;
    } else {
        check_error_phone.innerHTML = "" ;
        return phone;
    } 
}

function checkEmail() {
    var email = document.getElementById("txt_email").value;
    var check_error_email = document.getElementById("error_email") ;
    var regexEmail = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;

    if (email == null || email == "") {
        check_error_email.innerHTML = " Email không được để trống !" ;
    } else if (!regexEmail.test(email)) {
        check_error_email.innerHTML = " Kí tự không hợp lệ !" ;
    } else {
        check_error_email.innerHTML = "" ;
        return email;
    }
}

function checkMessage() { 
    var message = document.getElementById("txt_comment").value;
    var check_error_message = document.getElementById("error_comment") ;
   

    if (message == "" || message.length < 5){
        check_error_message.innerHTML = " Vui lòng nhập tối thiểu 20 kí tự !" ;
    } else {
        check_error_message.innerHTML = "" ;
        return message;
    }
}

                            let guest = {
                                                data: [
                                                    {
                                                        name : 'Tên khách hàng',
                                                        phone : 'SĐT',
                                                        email : 'Email',
                                                        comments  : 'Phản hồi',
                                                    },
                                                
                                                ],
                                        };                    
                            var form = document.getElementById('contactForm');
                            var inputName = document.getElementById('txt_name');
                            var inputPhone = document.getElementById('txt_phone');
                            var inputEmail = document.getElementById('txt_email');
                            var inputComments = document.getElementById('txt_comment');
                            contactForm.addEventListener('submit', runCode);
                        
                            function runCode(e){
                            e.preventDefault();
                            let myInput1 = inputName.value;
                            let myInput2 = inputPhone.value;
                            let myInput3 = inputEmail.value;
                            let myInput4 = inputComments.value;
                            
                                                let item={
                                                        name : myInput1,
                                                        phone : myInput2,
                                                        email : myInput3,
                                                        comments : myInput4
                                                }
                            if (localStorage.getItem('guest') == null){
                                data = [];
                            }else {
                                data = JSON.parse(localStorage.getItem('guest'));
                            };
                            console.log(data);
                            data.push(item);
                            localStorage.setItem('guest', JSON.stringify(data));
                            }