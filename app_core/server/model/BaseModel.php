
<?php

abstract  class BaseModel {
  private $strTable;

  // CRUD Create
  public function create($arrRow) {
  }
  
  // CRUD Read
  public function read($arrWhere) {
  }
  
  // CRUD Update
  public function update($arrSetValue, $arrWhere) {
  }
  
  // CRUD Delete
  public function delete($arrKey) {
  }
  
  // Register Field
  abstract  function registerField($strName, $strType, $boolIsPrimary) {
  }
  
  // Register Relationship
  abstract  function registerRelation($strToTable, $strOnField, $strRule){
  }
  
  // Add Field Validation
  abstract  function registerValidation($strField, $strErrorMessage, $strValidationName, $arrValidationParams){
  } 
  
  // Get Table
  abstract function getTable(){
    return this->$strTable;
  }
  
  abstract function setTable($strTable){
    this->$strTable = $strTable;
  }
}