let container = document.getElementsByClassName("container")[0];

// EVENT LISTENER :CLICK ######################################################

container.addEventListener("click", function (event) {

    // CHECK IF ANY TAB IS CLICKED ############################################

    if (event.target.className == "tab") {

        let dataName = event.target.getAttribute('data-name');

        if (dataName == 'pomodoro') {
            document.body.style.background = "#ff6347";
            document.body.style.color = "#ff6347";
        } else if (dataName == 'break') {
            document.body.style.background = "#008080";
            document.body.style.color = "#008080";
        }


        // REMOVE ACTIVE CLASS FROM ALL #######################################
        container.querySelectorAll('button.tab[data-id], div.tabs-content[data-id]').forEach(element => {
            element.classList.remove('active');
        });;

        // SPECIFY DATA ID OF TAB & TABS-CONTENT ELEMENTS #####################
        let dataId = event.target.getAttribute('data-id');
        // ADD ACTIVE CLASS TO ALL OF THE SAME DATA ID ########################
        container.querySelector('div.tabs-content[data-id=' + dataId + ']').classList.add('active')
        container.querySelector('button.tab[data-id=' + dataId + ']').classList.add('active')
    };
});