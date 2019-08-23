$(function () {
    $("#datepicker").datepicker();
});
$(function () {
    $("#validates").validate({
        rules: {
            Email: "required",
            First_Name: "required",
            Last_Name: "required",
            address: "required",
            dob: "required"
        }
    });
});

