'use strict'

$.get('data/page-1.json').then(data => {
    data.forEach(element => {
        // console.log(element);
        //create object
        let photo = new Image(element.image_url, element.title, element.description, element.keyword, element.horns);

        photo.render();
        photo.renderOption();
        // photo.show();
    });
})
function show (){
    $('select').on("click" , "option" ,function(){
        $('#container').hide();
        
    })
}

show();



// constructor 
function Image(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    
}
// prototype function for rendering

Image.prototype.render = function () {
    let itemClone = $('#photo-template').clone();
    itemClone.removeAttr('id');
    const img = $("#photo-template img");
    img.attr("src", this.image_url);
    const h2 = $("#photo-template h2");
    h2.text(this.title);
    const p = $("#photo-template p");
    p.text(this.description);
    $('#container').append(itemClone);
}

var arr = [];
Image.prototype.renderOption = function () {
    var option = $('#option').clone();
    option.removeAttr('id');
    // const option = $("#select option");
    option.text(this.keyword);
    option.attr("value",this.keyword )
    option.attr("class" , "options")
    arr.push(this.keyword);
    for (var i = 0; i < arr.length; i++) {
        if (!(this.keyword == arr[i])) {
            $('#select').append(option);
        }
    }

}

// Image.prototype.show = function (){
//     $('#select').on('click',option{
//         let values = $(this).val()
//         $('#container').hide();
//         $(`.${values}`).fadeIn();
//         // if (!(option.value == this.keyword)){
//         //     photo.render();
//         // }
//         // photo.render();
//     })
// }

