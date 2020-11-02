$(document).ready(function () {
    $('.card-img-top').on('click', function () {
        var imgurl = $(this).attr('src');
        var $modal = $('#img-modal');
        $modal.find('.modal-body img').attr('src', imgurl);
        $('#img-modal').modal('show');
    });



});