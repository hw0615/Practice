(function (global, document){
    'use strict';
     
    var wrapper          = document.querySelector('.wrapper');
    var input            = wrapper.querySelector('#input');
    var add_button       = wrapper.querySelector('.add');
    var delete_button    = wrapper.querySelector('.delete');
    var deleteall_button = wrapper.querySelector('.delete-all');
    var make_ul          = document.querySelector('ul');

    add_button.addEventListener('click', addlist)
    delete_button.addEventListener('click', dellist)
    deleteall_button.addEventListener('click', delall)

    function addlist() {
        if(input.value === '') {
            return false
        }
        make_ul.innerHTML += 
        '<li class="todo">'+
            // '<label for="list"></label>'+
            '<input class="todo-list" type="checkbox">'+
            '<span>'+input.value+'</span>'+
            '</li>';
        input.value = '';
    }
    function dellist() {
        var delete_list = document.querySelectorAll('.todo-list') 
        for ( var i = 0; i < delete_list.length; i++ ) {
            if( delete_list[i].checked === true ){
                make_ul.removeChild(delete_list[i].parentElement); 
            }
        }  
    }
    function delall() {
        var delete_all = document.querySelectorAll('.todo')
        for ( var i = 0; i < delete_all.length; i++ ) {
            make_ul.removeChild(delete_all[i]);
        }
    }





})(window, window.document);