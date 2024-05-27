$(document).ready(function() {
    
    $('#task-form').submit(function(event) {
        event.preventDefault(); 
        var taskName = $('#task-name').val(); 
        if (taskName.trim() !== '') { 
            $('#task-list').append('<li>' + taskName + '</li>'); 
            $('#task-name').val(''); 
        }
    });

    
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed'); 
    });
});
