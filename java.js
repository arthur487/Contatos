$(document).ready(function(){
    $('#form-numero').on('submit', function(e) {
    e.preventDefault();
    const NomeDeTarefa = $('#Nome').val()
    const NewItem = $('<li></li>');
    $(`<ul>${NomeDeTarefa}</ul>`).appendTo(NewItem);
    $(NewItem).appendTo('#Tbody')
    $('#Nome').val('')
    $(NewItem).click(function(){
        $(NewItem).css("text-decoration","line-through")
    })
    $(NewItem).dblclick(function(){
        $(NewItem).css("text-decoration","none");
    })
    })
    $('ul').one("click",function(){
        alert(`Double click to remove line through`)
    })
})
