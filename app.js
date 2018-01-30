/*
|--------------------------------------------------------------------------
| Init UI & Github
|--------------------------------------------------------------------------
*/

const github = new Github;
const ui = new UI();

/*
|--------------------------------------------------------------------------
| Search users
|--------------------------------------------------------------------------
*/

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                //show alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                ui.showProfile(data.profile);
            }
        })
    } else {
        //clear profile
        ui.clearProfile();
    }

});


