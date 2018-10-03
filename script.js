$(document).ready(function(){
    $('#button1').click(function(){
         //get file object
    var file = document.getElementById('file').files[0];
    if (file) {
        // create reader
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(e) {
            // browser completed reading file - display it
            var fileText = e.target.result;
            
           var tabContent = fileText.split('\n');
           var tableContFinal = tabContent.map(obj=>{
                var trCont = obj.split(',');
                console.log(trCont);
                trContDom = trCont.map(inObj=>{
                    return "<td>"+inObj+"</td>";
                }).join('');
                return `<tr>${trContDom}<td><input class=\'trData\' value=\'${obj}\' /><button onclick="renderData(this)" >Show</button></td></tr>`;
            }).join('');
            $("#abcd").html(tableContFinal);
        };
    }
 


        // var reader = new FileReader();
        // if ( ! window.FileReader ) {
		// 	return alert( 'FileReader API is not supported by your browser.' );
		// }
		// var $i = $( '#file' ), // Put file input ID here
		// 	input = $i[0]; // Getting the element from jQuery
		// if ( input.files && input.files[0] ) {
		// 	file = input.files[0]; // The file
		// 	fr = new FileReader(); // FileReader instance
		// 	fr.onload = function () {
		// 		// Do stuff on onload, use fr.result for contents of file
		// 		console.log( file) ;
		// 	};
		// var fileText = fr.readAsText( file );
			
		// } else {
		// 	// Handle errors here
		// 	alert( "File not selected or browser incompatible." )
		// }
    //   var  myfile = input.files[0];
    //     var myfileContent = fr.readAsText(file);
    //     console.log(myFile);
    });
    
});

var renderData = (element)=>{
    var dataString = $(element).parent('td').find('.trData').val();
    var dataStringArray = dataString.split(',');
    $("#frnachiseNameSpan").html(dataStringArray[0]);
    $("#invoiceDateSpan").html(dataStringArray[1]);
    $("#InvoiceNumberSpan").html(dataStringArray[2]);
    $("#InvoicePANSpan").html(dataStringArray[3]);
    $("#ContactNumberSpan").html(dataStringArray[4]);
    $("#EmailSpan").html(dataStringArray[5]);
    var valueNew = dataStringArray[6];
    $('#totalCommission').html(valueNew);    
    console.log(dataStringArray);

function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'one';
    words[2] = 'two';
    words[3] = 'three';
    words[4] = 'four';
    words[5] = 'five';
    words[6] = 'six';
    words[7] = 'seven';
    words[8] = 'eight';
    words[9] = 'nine';
    words[10] = 'ten';
    words[11] = 'eleven';
    words[12] = 'twelve';
    words[13] = 'thirteen';
    words[14] = 'fourteen';
    words[15] = 'fifteen';
    words[16] = 'sixteen';
    words[17] = 'seventeen';
    words[18] = 'eighteen';
    words[19] = 'nineteen';
    words[20] = 'twenty';
    words[30] = 'thirty';
    words[40] = 'forty';
    words[50] = 'fifty';
    words[60] = 'sixty';
    words[70] = 'seventy';
    words[80] = 'eighty';
    words[90] = 'ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
}
return  words_string.charAt(0).toUpperCase() + words_string.slice(1);

}
var finalWord =  convertNumberToWords(valueNew);
console.log(finalWord);
$('#totalCommissionInWords').html(finalWord);
    
};