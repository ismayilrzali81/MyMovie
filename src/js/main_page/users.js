'use strict';

import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup , FacebookAuthProvider, onAuthStateChanged , sendEmailVerification} from "firebase/auth";



async function signInWithProvider(provider__auth , auth , provider) {
   await signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = provider__auth.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log(user);


    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = provider__auth.credentialFromError(error);
        alert(errorMessage);
        // ...
    });
}
function users_sign_up() {
    let sign_up_btn = document.querySelector('.sign_up_wrapper button.sign_up') ,
    sign_up_wrapper = document.querySelector('.sign_up_wrapper'),
    user_mail = sign_up_wrapper.querySelector('#item_3 input[type="email') ,
    password_1 = sign_up_wrapper.querySelector('#item_4 input[type="password') ,
    password_2 = sign_up_wrapper.querySelector('#item_5 input[type="password') ,
    google_sign_in = document.querySelectorAll('.social_btn.auth_google'), 
    facebook_sign_in = document.querySelectorAll('.social_btn.auth_facebook'),
    sign_up_form = sign_up_wrapper.querySelector('.sign_up_form') ;
    


    const auth = getAuth();

    function btn_disable_sign_up () {
        if(user_mail.value.length  && password_1.value.length && password_2.value.length) {
            sign_up_wrapper.querySelector('button.sign_up').disabled = false
        } else {
            sign_up_wrapper.querySelector('button.sign_up').disabled = true
        }
    }

    btn_disable_sign_up()

    sign_up_form.addEventListener('input' , () => {
        btn_disable_sign_up()
    })


    sign_up_form.addEventListener('submit' , (e) => {
        e.preventDefault();
        let current_user_mail = user_mail.value;
        let current_user_password = password_1.value;
        if((user_mail.value && password_1.value && password_2.value) != '') {
            if(password_1.value != password_2.value) {
                alert('your password is not identical.');
            } else {
                let user_info = {
                    user_mail:current_user_mail,
                    password:current_user_password
                };
                sign_up_wrapper.innerHTML+=
                `<div class="loader">
                    <?xml version="1.0" encoding="utf-8"?>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="32" stroke-width="8" stroke="gray" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                    </circle>
                    </svg>
                </div>`

                createUserWithEmailAndPassword(auth, user_info.user_mail, user_info.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const emailVerified =user.emailVerified;
                    console.log(user);
                    sign_up_wrapper.querySelector('.loader').remove()
               
                    document.querySelector('.reg_wrapper').classList.remove('active_reg')
                    // if(emailVerified) {
                    //     document.querySelector('.login__cart__content').style="display:block";
                    //     document.querySelector('.sign_up').style="display:none";
                    // } else {
                    //     alert('verificate your email');
                    //     return false
                    // }
                    
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                    sign_up_wrapper.querySelector('.loader').remove()
                });
            }
        }
    })

    const provider_google = new GoogleAuthProvider();
    const provider_facebook = new FacebookAuthProvider();

    google_sign_in.forEach((item) => {
        item.addEventListener('click' , () => {
            signInWithProvider(GoogleAuthProvider , auth , provider_google);

            document.querySelector('.reg_wrapper').classList.remove('active_reg')
         });
    })

    facebook_sign_in.forEach((item) => {
        item.addEventListener('click' , () => {
            signInWithProvider(FacebookAuthProvider , auth , provider_facebook);
            document.querySelector('.reg_wrapper').classList.remove('active_reg')
        });
    })

    onAuthStateChanged(auth, (user) => {
        let name = document.querySelector('.menu .name') ,
        sign_in_btn = document.querySelector('.menu .sign_in_btn') ,
        menu_list = document.querySelector('.menu ul')
        
        if (user) {
            sign_in_btn.style.cssText = "display:none"
            name.style.cssText = "display:block"
            name.textContent = user.displayName ? user.displayName : user.email
            menu_list.innerHTML+= ' <li class="log_out">Log out</li>'        } 
            else {
            sign_in_btn.style.cssText = "display:block"
            name.textContent = ""
            name.style.cssText = "display:none"
            if(menu_list.querySelector('.log_out')) menu_list.querySelector('.log_out').remove()
        }
      });
    
}

export default users_sign_up;













