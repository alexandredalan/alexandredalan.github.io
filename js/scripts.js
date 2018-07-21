/* esconder placeholder em onfocus */
$(':input').on('focus', function() {
        this.dataset.placeholder = this.placeholder;
        this.placeholder = ' ';
    }).on('blur', function(){
        this.placeholder = this.dataset.placeholder;
    });

    /* bloqueando enter no textarea */
    document.getElementById("textarea").onkeypress = function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    };