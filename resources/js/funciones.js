
//ESCONDER EL BRAND AL HACER SCROLL

$(window).scroll(function () {
    var $this = $(this);
    if ($this.scrollTop() >= 150) {
        $(".navScrolled").addClass("scrolled");
    } else {
        $(".navScrolled").removeClass("scrolled");
    };
});

//FOTO DE FORMULARIO

$(".imgAdd").click(function () {
    $(this).closest(".row").find('.imgAdd').before('<div class="col-12 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
});
$(document).on("click", "i.del", function () {
    $(this).parent().remove();
});
$(function () {
    $(document).on("change", ".uploadFile", function () {
        var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test(files[0].type)) { // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function () { // set image data as background of div
                //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
            }
        }

    });
});

//CORAZON RETAGERS

function changeColor(x)
{
    if(x.style.color=="rgb(253, 200, 255)")
    {
        x.style.color="rgb(249, 87, 255)";
    }else{
        x.style.color="rgb(253, 200, 255)";
    }
    return false;
}