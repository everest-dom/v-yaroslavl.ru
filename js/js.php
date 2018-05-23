<?php
header("Cache-control: public");
header("Cache-control: max-age=2592000");
header('Content-type: text/css');
ob_start("compress");
function compress($buffer) {
  /* Удаляем комментарии */
  $buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);
  /* Удаляем табуляции, пробелы, переводы строки и так далее */
  $buffer = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $buffer);
  return $buffer;
}
/* Список JS файлов */

include('bootstrap.min.js');

include('formToWizard.js');

include('jquery.formstyler.min.js');

include('calc-main.js');

include('jquery.fancybox.pack.j');

include('house.js');

include('my.js');

include('main.js');

include('jquery.mousewheel.min.js');

include('jcarousellite.js');

ob_end_flush();

?>
