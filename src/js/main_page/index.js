'use strict';
import users_sign_up from './users.js';
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";


export let log_in_sign_up = () => {
    const log_in_btn = document.querySelector('.log_in_wrapper button.log_in') ,
    log_in_wrapper = document.querySelector('.log_in_wrapper') ,
    email_sign_in = log_in_wrapper.querySelector('#item_1 input[type="email"]') ,
    password = document.querySelectorAll('#item_2 input[type="password"]') ;

    function bnt_disabled_log_in() {
        if(email_sign_in.value.length && password[0].value.length) {
            log_in_btn.disabled = false;
        } else {
            log_in_btn.disabled = true;
        }
    }

    bnt_disabled_log_in()

    log_in_wrapper.addEventListener('input' , () => {
      bnt_disabled_log_in()
    })

    log_in_wrapper.addEventListener('submit' , (e) => {
        e.preventDefault();
        let user_mail = email_sign_in.value;
        let user_password = password[0].value;

        log_in_wrapper.innerHTML+=
        `<div class="loader">
        <?xml version="1.0" encoding="utf-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="32" stroke-width="8" stroke="gray" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
        </circle>
        </svg>
    </div>`

        signInWithEmailAndPassword(auth, user_mail, user_password)
        .then((userCredential) => {
            log_in_wrapper.querySelector('.loader').remove()
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            document.querySelector('.reg_wrapper').classList.remove('active_reg')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            log_in_wrapper.querySelector('.loader').remove()
        });
    })


    users_sign_up();

    const auth = getAuth();


}



