// console.log('Hello');

    const password = document.querySelector("#password");
    
    const confirm = document.querySelector("#confirm-password");
    
    const submit = document.querySelector("#submitBtn");
    
    submit.addEventListener("click", () => {
    if (password.value === confirm.value) {
    confirm.setCustomValidity("");
} else {
    confirm.setCustomValidity("Passwords do not match");
};

});