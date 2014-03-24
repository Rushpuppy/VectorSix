
<?php

abstract class BaseController {
  // Requestdata $_GET, $_POST, $_SESSION etc.
  public function request() {
  }
  
  // Translations (ClientSide)
  public function translate() {
  }
  
  // Add File CSS, Javascript
  abstract function addFile() {
  }   
  
  // Add a View to Template Scope
  abstract function addView() {
  }
  
  // Add a Model to Model Scope
  abstract function addModel() {
  }
  
  // Priviledges Stuff
  function priviledges() {
  }
  
  // Run Controller
  public display() {
  }
}