'use strict'

function file1() {
    $.get('data/page-1.json').then(data1 => {
        data1.forEach(element => {
            let photo = new Image(element.image_url, element.title, element.description, element.keyword, element.horns);
            photo.render();
        });
        createOptions(optionsArr);
        
    })
}
function file2() {
    $.get('data/page-2.json').then(data2 => {
        data2.forEach(element => {
            let photo = new Image(element.image_url, element.title, element.description, element.keyword, element.horns);
            photo.render();
        });
        createOptions(optionsArr);
        
    })
}

file1();
file2();
showS();

// adding event to first button and display imgs from first json file 
$("#page1").click(function () {
    imageArr.length = 0;
    $('main').empty();
    $.get('data/page-1.json').then(data1 => {
        data1.forEach(element => {
            let photo = new Image(element.image_url, element.title, element.description, element.keyword, element.horns);
            photo.render();
        });
        createOptions(optionsArr);
    })
    showS();
    sortImgByHorns();
    console.log(imageArr);
    

});
// adding event to sec button and display imgs from sec json file 
$("#page2").click(function () {
    imageArr.length = 0;
    $('main').empty();
    $.get('data/page-2.json').then(data2 => {
        data2.forEach(element => {
            let photo = new Image(element.image_url, element.title, element.description, element.keyword, element.horns);
            photo.render();
        });
        createOptions(optionsArr);
    })
    showS();
    console.log(imageArr);
});

// constructor
var imageArr = [];
var optionsArr = [];
var hornsArr = [];
function Image(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    imageArr.push(this);
    optionsArr.push(keyword);
    hornsArr.push(horns);
}
// adding event to button and sort the objects by its horns(no)
console.log(imageArr);

    $("#sortByHorns").click(function () {
        imageArr.sort(sortByHorns);
        $('main').empty();
        imageArr.forEach(element => {
            element.render();
        });
        console.log(imageArr)
    });
    function sortByHorns(obj1, obj2) {
        return (obj1.horns - obj2.horns);
    }



// adding event to button and sort the objects by its title(string)
console.log(imageArr);
$("#sortByTitle").click(function () {
    imageArr.sort(sortByTitle);
    $('main').empty();
    imageArr.forEach(element => {
        element.render();
    });
    console.log(imageArr)
});
function sortByTitle(obj1, obj2) {
    return (obj1.title.localeCompare(obj2.title));
}

// render by mustache
Image.prototype.render = function () {
    // get template from html
    let mustacheTemplate = $('#template').html();
    // map the object data to the template 
    let newObject = Mustache.render(mustacheTemplate, this);
    // append the object to the main
    $('main').append(newObject);
}

// function to create option by keyword
var forbiddenArry = [];
function createOptions(arr) {
    arr.forEach(element => {
        if (!(forbiddenArry.includes(element)))
            $('select').append(`<option value ="${element}">${element}</option>`);
        forbiddenArry.push(element)
    });
}
// function to display only the img which conatin selected keyword
function showS() {
    $('select').change(function () {
        let selectedElement = $(this).val();
        $('section').hide();
        $(`.${selectedElement}`).show(800);
    });
}


