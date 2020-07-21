'use strict'

$.get('data/page-1.json').then(data => {
    data.forEach(element => {
        
        let photo = new Image(element.image_url, element.title, element.description, element.keyword, element.horns);

        photo.render();
        
       
    });
    createOptions(optionsArr);

})

// constructor
var imageArr = [];
var optionsArr = []; 
function Image(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    imageArr.push(this);
    optionsArr.push(keyword);
    
}
// prototype function for rendering

Image.prototype.render = function () {
    let itemClone = $('#photo-template').clone();
    itemClone.removeAttr('id');
    itemClone.attr('class', this.keyword);
    itemClone.find('h2').text(this.keyword);
    itemClone.find('img').attr('src', this.image_url);
    itemClone.find('p').text(this.title);
    itemClone.appendTo('main');
}
var forbiddenArry = [];
function createOptions(arr){
  arr.forEach(element => {
      if (!(forbiddenArry.includes(element)))
      $('select').append(`<option value ="${element}">${element}</option>`);
      forbiddenArry.push(element)
  });
}

function show (){
    $('select').change(function () {
        let selectedElement = $(this).val();
        $('section').hide();
        $(`.${selectedElement}`).show();
      });
}
show();


