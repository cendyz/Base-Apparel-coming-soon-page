const form = document.querySelector(".main__input-wrapper");
const input = document.querySelector("#input");
const errorIcon = document.querySelector(".main__input-wrapper-icon-error");
const errorText = document.querySelector(".main__input-wrapper-text");
const iconBtn = document.querySelector(".main__input-wrapper-icon");
const email = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

const checkInput = () => {
    event.preventDefault();
	if (email.test(input.value)) {
        errorIcon.style.display = "none";
        errorText.style.display = "none";
        input.style.border = "1px solid hsl(0, 36%, 70%)";
        form.submit()
	} else {
        input.style.border = '1px solid red'
        errorIcon.style.display = 'block'
        errorText.style.display = 'block'
    }
    
};

iconBtn.addEventListener("click", checkInput);
