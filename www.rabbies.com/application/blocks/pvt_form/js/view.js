//The datepicker code for the retuning from and until to
//Requires the jquery ui as a dependency
var dateFormat = "dd/mm/yy";
var fromDate = $("#leaving-on").datepicker({
    defaultDate: "+1w",
    dateFormat: dateFormat,
    changeMonth: true,
    numberOfMonths: 1,
    minDate: new Date(),
    onSelect: function(selectedDate) {
        var instance = $(this).data("datepicker");
        var date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
        date.setDate(date.getDate());
        toDate.datepicker("option", "minDate", date);
    }
});

var toDate = $("#returning-on").datepicker({
    defaultDate: "+1w",
    dateFormat: dateFormat,
    changeMonth: true,
    numberOfMonths: 1
});
