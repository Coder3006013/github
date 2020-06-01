$(document).ready(function(){
    $("input[type=submit]").click(function(event){
        event.preventDefault();
    });

    $(".admin-form-select").change(function(event){    
        if($(this).val() !== "") {
            $(this).parents(".form-group").find(".admin-form-narx").val($(this).val());
            
            $(this).parents(".form-group").find(".admin-form-count").val("");
            
            $(this).parents(".form-group").find(".admin-form-resualt").val("");
            
            $(this).parents(".form-group").find(".admin-form-count").removeAttr("readonly");
        }
        else {
            $(this).parents(".form-group").find(".admin-form-narx").val("");
            
            $(this).parents(".form-group").find(".admin-form-count").attr("readonly", "readonly");
        }
    });
    
    $(".admin-form-count").keyup(function(){
        let adminFormCount = $(this).val();
        if(adminFormCount >= 0) {
            let adminFormSelectForAdminFormCount = $(this).parents(".form-group").find(".admin-form-select").val();
            $(this).parents(".form-group").find(".admin-form-resualt").val(adminFormCount * adminFormSelectForAdminFormCount);
            resualt();
        }
        else {
            $(this).val("0")
        }
    });

    $(".admin-form-resualt").keyup(resualt);

    $(".btn-remove").click(function(e) {
        e.preventDefault();
        $(this).parents(".form-group").remove();
            resualt();
        });

        
    function resualt() {
        let resualt = document.querySelectorAll(".admin-form-resualt");
        let summResualt = 0;
        for(let i = 0; i < resualt.length; i++) {
            summResualt += Number(resualt[i].value);
        }
        $(".admin-form__cart").val(summResualt);
        $(".admin-form__buy").val($(".admin-form__cart").val());   
    }



    $(".btn-add").click(function(e){
        e.preventDefault();
        $(".admin-form__main").append(`
            <div class="row form-group">
                <div class="col-12 col-sm">
                    <select class="admin-form-select form-control">
                        <option></option>
                        <option value="100">olma</option>
                        <option value="200">olma2</option>
                        <option value="300">olma3</option>
                        <option value="400">olma4</option>
                    </select>
                </div>
                <div class="col-12 col-sm">
                    <input type="text" class="admin-form-narx form-control" readonly>
                </div>
                <div class="col-12 col-sm">
                    <input type="number" class="admin-form-count form-control" readonly>
                </div>
                <div class="col-12 col-sm">
                    <input type="text" class="admin-form-resualt form-control">
                </div>
                <div class="col-12 col-sm">
                    <button type="button" class="btn-remove btn btn-danger form-control">x</button>
                </div>
            </div>
        `);

        $(".admin-form-select").change(function(event){    
            if($(this).val() !== "") {
                $(this).parents(".form-group").find(".admin-form-narx").val($(this).val());
                
                $(this).parents(".form-group").find(".admin-form-count").val("");
                
                $(this).parents(".form-group").find(".admin-form-count").removeAttr("readonly");
                
                $(this).parents(".form-group").find(".admin-form-resualt").val("");
            }
            else {
                $(this).parents(".form-group").find(".admin-form-narx").val("");
                
                $(this).parents(".form-group").find(".admin-form-count").attr("readonly", "readonly");
            }
        });
        
        $(".admin-form-resualt").keyup(resualt);

        $(".admin-form-count").keyup(function(){
            let adminFormCount = $(this).val();
            if(adminFormCount >= 0) {
                let adminFormSelectForAdminFormCount = $(this).parents(".form-group").find(".admin-form-select").val();
                $(this).parents(".form-group").find(".admin-form-resualt").val(adminFormCount * adminFormSelectForAdminFormCount);
                resualt();
            }
            else {
                $(this).val("0")
            }
        });


        $(".btn-remove").click(function(e) {
            e.preventDefault();
            $(this).parents(".form-group").remove();
            resualt();
        });
    });

})
