
/*
* v6.fn.Guid Class
* This Class generates Guid
* @author Rushpuppy - Severin Holm   
*/  
v6.fn.Guid = function Guid() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;

  
  //****************************************************************************
  // Constructor 
  //****************************************************************************
  /*
  * Constructor Method
  * @constructor  
  * @param void      
  */  
  this.init = function() {
  }
  
  //****************************************************************************
  // Methods
  //****************************************************************************
  /*
  * Generates and returns a Guid
  * @return {string} the new Guid    
  */    
  this.generate = function() {
    var strPos1 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    var strPos2 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    var strPos3 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    var strPos4 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    var strPos5 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    var strPos6 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    var strPos7 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    var strPos8 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    var strGuid = strPos1 + strPos2 + '-' + strPos3 + '-' + strPos4 + '-' + strPos5 + '-' + strPos6 + strPos7 + strPos8;

    return strGuid;
  }
  
  //****************************************************************************
  $this.init();
}