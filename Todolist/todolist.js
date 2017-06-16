;(function (global, document){
    'use strict';

    var todolist_wrapper = document.querySelector('.wrapper');
    var form = document.createElement('form');
    var fieldset = document.createElement('fieldset');
    var legend = document.createElement('legend');
    var label = document.createElement('label');
    var input = document.createElement('input');
    var input_sub = document.createElement('input');
    var input_clr = document.createElement('input');
    var input_each = document.createElement('input');
    var ul = document.createElement('ul');
    // var li = document.createElement('li');



    fieldset.setAttribute('class','todo')
    legend.textContent='To Do List'    
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Plz add something to do..');
    
    input_sub.setAttribute('type', 'button');
    input_clr.setAttribute('type', 'button');
    input_each.setAttribute('type', 'button');
    
    todolist_wrapper.appendChild(fieldset);
    fieldset.appendChild(legend);
    fieldset.appendChild(label);
    label.appendChild(input);
    label.appendChild(input_sub);
    label.appendChild(input_clr);
    label.appendChild(input_each);
    fieldset.appendChild(ul);

    input_sub.onclick = addtodolist;
    input_clr.onclick = clrtodolist;
    input_each.onclick = deltodolist;

    function addtodolist(){
        if (input.value === ''){
            return false;
        }
        var li = document.createElement('li');
        var checkbox = document.createElement('label');
        var lastinput = document.createElement('input');
        checkbox.setAttribute('for', 'box')
        lastinput.setAttribute('id', 'box')
        lastinput.setAttribute('type', 'checkbox');
        lastinput.setAttribute('class', 'lastinput');
        checkbox.textContent = input.value;
        ul.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(lastinput);
        
        input.value = '';
        return false;

    }
    
    function clrtodolist(){
        var removeall = document.querySelectorAll('li');
        for (var i=0, l=removeall.length; i<l ; ++i){
            ul.removeChild(removeall[i]);   
            }
        }

    function deltodolist(){
        var removeeach = document.querySelectorAll('li>input');
        for (var i=0, l=removeeach.length; i<l ; ++i){
            if(removeeach[i].checked === true){
                ul.removeChild(removeeach[i].parentElement);
            }
        }
    }

    

    

 
})(window, window.document);