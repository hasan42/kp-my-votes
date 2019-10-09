<?php
  $json = $_POST['json'];
  
  if (json_decode($json) != null){
    echo "save";
    $file = fopen('films-list.json','w');
    fwrite($file, $json);
    fclose($file);
  }else{
    echo "error";
  }
?>