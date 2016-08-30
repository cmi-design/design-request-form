$(document).ready(function() {
    var max_fields      = 4; //maximum input boxes allowed
    var wrapper         = $(".stakeholders"); //Fields wrapper
    var add_button      = $(".add-field"); //Add button ID

    var x = 1; //initial text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="row added-stakeholder"><div class="column small-11"><input type="text" name="extra-name[]" placeholder="name"/><input type="text" name="extra-email[]" placeholder="email"/></div><div class="column small-1"><a href="#" class="remove-field alert button ">&minus;</a></div></div>'); //add input box
        }
    });

    $(wrapper).on("click",".remove-field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parents('div.added-stakeholder').remove(); x--;
    });
});

$(document).ready(function() {
    var max_dates = 3; //maximum input boxes allowed
    var wrapper_milestones = $(".milestones"); //Fields wrapper
    var add_date = $(".add-date"); //Add button ID

    var y = 1; //initial text box count
    $(add_date).click(function(e){ //on add input button click
        e.preventDefault();
        if(y < max_dates){ //max input box allowed
            y++; //text box increment
            $(wrapper_milestones).append('<div class="row added-date"><div class="column small-11"><input type="text" name="extra-milestone[]" placeholder="description"/><input type="date" name="extra-date[]" placeholder="date"/></div><div class="column small-1"><a href="#" class="remove-field alert button ">&minus;</a></div></div>'); //add input box
        }
    });

    $(wrapper_milestones).on("click",".remove-field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parents('div.added-date').remove(); y--;
    });
});
