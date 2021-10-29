var num_output = "", operator_output = "", output_td = "";

 $(function() {

   $('.content_Button').mouseout(function() {
     $(this).css('background', '#e6e6e6');
   }),

   $('.content_Button, .clear_E_Button, .clear_Button, .back_space_Button, .operator_Button, .tri_Button, .square_root_Button, .factorial_Button, .pi_Button, .ppm_Button, .point_Button, .abs_Button, .exp_Button, .trunc_Button, .sum_Button').mouseover(function() {
     $(this).css('background', '#c9c9c9');
   }),

   $('.clear_E_Button, .clear_Button, .back_space_Button, .operator_Button, .tri_Button, .square_root_Button, .factorial_Button, .pi_Button, .ppm_Button, .point_Button, .abs_Button, .exp_Button, .trunc_Button, .sum_Button').mouseout(function() {
     $(this).css('background', '#d7d7d7');
   }),

   $('.content_Button, .clear_E_Button, .clear_Button, .back_space_Button, .operator_Button, .tri_Button, .square_root_Button, .factorial_Button, .pi_Button, .ppm_Button, .point_Button, .abs_Button, .exp_Button, .trunc_Button, .sum_Button').mousedown(function() {
     $(this).css('background', '#afafaf');
   }),

   $('.content_Button, .clear_E_Button, .clear_Button, .back_space_Button, .operator_Button, .tri_Button, .square_root_Button, .factorial_Button, .pi_Button, .ppm_Button, .point_Button, .abs_Button, .exp_Button, .trunc_Button, .sum_Button').mouseup(function() {
     $(this).css('background', '#c9c9c9');
   }),

   $('.content_Button').click(function() {
     var num = $(this).text();
     if(num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     if(num_output == '0'){
       num_output = num;
       $('.number_div').html(num_output);
       return;
     }
     num_output = num_output + num;
     $('.number_div').html(num_output);
   }),

   $('.operator_Button').click(function() {
     var operator = $(this).text();

     if(num_output == '' && operator_output.substr(operator_output.length - 1) != operator) {
      if(operator_output == '') {
        return;
      }
      operator_output = operator_output.substring(0, operator_output.length - 1) + operator;
      $('.operator_div').html(operator_output);
      return;
     }
     if(num_output == '' || num_output.substr(num_output.length - 1) == '.' || num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     operator_output = operator_output + ' ' + num_output + ' ' + operator;
     $('.operator_div').html(operator_output);
     num_output = '';
     $('.number_div').html('　');
   }),

   $('.tri_Button').click(function() {
     if(num_output == '' || num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     var tri = $(this).text();
     var tri_num = 0;
     if(tri == 'sin') {
       tri_num = Math.sin(num_output);
     } else if(tri == 'cos') {
       tri_num = Math.cos(num_output);
     } else if(tri == 'tan') {
       tri_num = Math.tan(num_output);
     } else {
       return;
     }
     var tmp = tri_num.toString();
     if(tmp.indexOf('.') != -1) {
       tri_num = tri_num.toFixed(12);
       tri_num = tri_num.replace(/(0+$)/, "");
     }
     num_output = tri_num.toString();
     $('.number_div').html(num_output);
   }),

   $('.square_root_Button').click(function() {
    if(num_output == '' || num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
      return;
    }
    var square_root = $(this).text();
    var square_root_num = 0;
    if(square_root == 'x²'){
      square_root_num = Math.pow(num_output, 2);
    } else if(square_root == 'x³') {
      square_root_num = Math.pow(num_output, 3);
    } else if(square_root == '√' && num_output > 0) {
      square_root_num = Math.sqrt(num_output);
    } else if(square_root == '³√' && num_output > 0) {
      square_root_num = Math.cbrt(num_output);
    } else if(square_root == 'log' && num_output > 0) {
      square_root_num = Math.log10(num_output);
    } else if(square_root == 'log₂' && num_output > 0) {
      square_root_num = Math.log2(num_output);
    } else if(square_root == 'ln' && num_output > 0) {
      square_root_num = Math.log(num_output);
    } else {
      return;
    }
    var tmp = square_root_num.toString();
    if(tmp.indexOf('.') != -1) {
      square_root_num = square_root_num.toFixed(12);
      square_root_num = square_root_num.replace(/(0+$)/, "");
    }
    num_output = square_root_num.toString();
    $('.number_div').html(num_output);
  }),

   $('.point_Button').click(function() {
     if(num_output.indexOf('.') != -1 || num_output == '' || num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     var point = $(this).text();
     num_output = num_output + point;
     $('.number_div').html(num_output);
   }),

   $('.abs_Button').click(function() {
     if(num_output == 0 || num_output == '' || num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     var abs_num = 0;
     if(num_output > 0) {
       abs_num = num_output * -1;
     } else if(num_output < 0) {
       abs_num = Math.abs(num_output);
     }
     num_output = abs_num.toString();
     $('.number_div').html(num_output);
   }),

   $('.factorial_Button').click(function() {
     var factorial_num = 1;
     if(num_output == 0 || num_output == '' || num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     for(var i = 1; i <= num_output; i++){
       factorial_num *= i;
     }
     num_output = factorial_num.toString();
     $('.number_div').html(num_output);
   }),

   $('.pi_Button').click(function() {
     if(num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     var pi_num = 0;
     if(num_output == '') {
       pi_num = Math.PI;
       var tmp = pi_num.toString();
       if(tmp.indexOf('.') != -1) {
         pi_num = pi_num.toFixed(12);
         pi_num = pi_num.replace(/(0+$)/, "");
       }
       num_output = pi_num.toString();
       $('.number_div').html(num_output);
       return;
     }
     pi_num = num_output * Math.PI;
     var tmp = pi_num.toString();
     if(tmp.indexOf('.') != -1) {
       pi_num = pi_num.toFixed(12);
       pi_num = pi_num.replace(/(0+$)/, "");
     }
     num_output = pi_num.toString();
     $('.number_div').html(num_output);
   }),

   $('.ppm_Button').click(function() {
     if(num_output == 0 || num_output == '' || num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     var ppm_num = 0.000001;
     var ppm_result = num_output * ppm_num;
     num_output = ppm_result.toString();
     $('.number_div').html(num_output);
   }),

   $('.exp_Button').click(function() {
     if(num_output == 0 || num_output == '' || num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     var exp_num = Math.exp(num_output);
     num_output = exp_num.toString();
     $('.number_div').html(num_output);
   }),

   $('.trunc_Button').click(function() {
     if(num_output == 0 || num_output == '' || num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     var trunc_num = Math.trunc(num_output);
     num_output = trunc_num.toString();
     $('.number_div').html(num_output);
   }),

   $('.sum_Button').click(function() {
     var sum_text = '';
     var sum = 0;
     if(num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     if($('.operator_div').text() == "　"){
       sum_text = $('.number_div').text();
     } else {
       sum_text = $('.operator_div').text() + ' ' + $('.number_div').text();
     }
     sum = eval(sum_text);
     if(Boolean(sum) == false && sum != 0) {
       return;
     }
     var tmp = sum.toString();
     if(tmp.indexOf('.') != -1) {
       sum = sum.toFixed(12);
       sum = sum.replace(/(0+$)/, "");
     }
     output_td += '<div class="sum_result_operator">' + sum_text + ' =' + '</div><div class="sum_result_sum">' + sum + '<hr></div>'
     $('.result_table_div').html(output_td);
     num_output = sum.toString();
     operator_output = '';
     $('.operator_div').html('　');
     $('.number_div').html(num_output);
   }),

   $('.clear_E_Button').click(function() {
     num_output = '';
     $('.number_div').html('　');
   }),

   $('.clear_Button').click(function() {
     num_output = '';
     operator_output = '';
     $('.operator_div').html('　');
     $('.number_div').html('　');
   }),

   $('.back_space_Button').click(function() {
     if(num_output == 'Infinity' || num_output == '-Infinity' || num_output == 'NaN') {
       return;
     }
     num_output = num_output.slice(0, -1);
     if(num_output == '' || num_output == '-') {
       num_output = '';
       $('.number_div').html('　');
       return;
     }
     $('.number_div').html(num_output);
   }),

   $('.delete_result').click(function() {
     $('.sum_result_operator').remove();
     $('.sum_result_sum').remove();
     output_td='';
   });
 });
