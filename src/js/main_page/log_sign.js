
export const log_sign = () => {
    let toggle_btns = document.querySelectorAll('.toggle_btn_wrapper .btn') ,
    sign_up_wrapper = document.querySelector('.sign_up_wrapper') ,
    log_in_wrapper = document.querySelector('.log_in_wrapper') ,
    exit_btn = document.querySelector('.ext_btn') ,
    sign_up_menu_btn = document.querySelector('.nav_item .sign_in_btn')

    toggle_btns.forEach((item , index) => {
        item.addEventListener('click' ,  () => {
            if(!item.classList.contains('active')) {
                toggle_btns.forEach(item => item.classList.remove('active'))
                item.classList.add('active')
                if(item.classList.contains('btn_2')) {
                    log_in_wrapper.classList.add('active')
                    sign_up_wrapper.classList.remove('active')
                }
                else if(item.classList.contains('btn_1')) {
                   sign_up_wrapper.classList.add('active')
                   log_in_wrapper.classList.remove('active')
                }
            }
        })
    })

    exit_btn.addEventListener('click' , () => {
        document.querySelector('.reg_wrapper').classList.remove('active_reg')
        document.querySelector('.log_in_form').reset()
        document.querySelector('.sign_up_form').reset()
    })

    sign_up_menu_btn.addEventListener('click' , () => {
        document.querySelector('.reg_wrapper').classList.add('active_reg')
        import('./index').then(res => res.log_in_sign_up())
    })
}