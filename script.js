$ = (tag, mother = document) => mother.querySelector(tag)
$$ = (tag, mother = document) => mother.querySelectorAll(tag)
const { log } = console
fetch('https://reqres.in/api/users')
    .then(response => {
        response.json()
            .then(value => {
                // log(value)
                value.data.map(user => createUser(user))
            })
            // .catch(error => {
            //     main_div.innerHTML = "We have an error"
            // })
    }).catch(error => {
        main_div.innerHTML = "We have an error"
    })

function createUser(user) {
    let temp = $('#user').content.cloneNode(true),
        avatar = $('.avatar', temp),
        title = $('.card-title', temp),
        text = $('.card-text', temp)
        // log(temp, avatar, title, text)
    log(user, temp)
    temp.id = user.id
    avatar.src = user.avatar
    title.textContent = user.first_name
    text.innerHTML = user.email
    $('#main_div').appendChild(temp)
}