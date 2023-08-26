function tra_code() {
    var get_code = document.querySelector(".input-box #code-input").value
    var get_frame_screen = document.querySelector(".body #code-screen")
    get_frame_screen.setAttribute("src", `https://nhentai.to/g/${get_code}`)
}

function remove() {
    var get_code = document.querySelector(".input-box #code-input").value
    var get_code_input = document.querySelector(".input-box #code-input")
    var get_frame_screen = document.querySelector(".body #code-screen")
    get_frame_screen.setAttribute("src", ``)
    get_code_input.value=""
}

function mo_code() {
    var get_code = document.querySelector(".input-box #code-input").value
    window.open(`https://nhentai.net/g/${get_code}`)
}