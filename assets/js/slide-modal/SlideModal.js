(function () {
    function SlideModal(params) {
        console.log(params);

        this.trigger = params.trigger;
        this.isOpen = params.isOpen;

        $(this.trigger).on('click', function (click) {
            this.open();
        })

    }

    SlideModal.prototype.open = function () {
        console.log('open');
        this.isOpen = true;
        return this;
    }
    SlideModal.prototype.close = function () {
        console.log('close');
        this.isOpen = false;
        return this;
    }
    SlideModal.prototype.toggle = function () {
        console.log('toggle');
        this.isOpen = !this.isOpen;
        return this;
    }
})
