
/*
* v6.fn.ObjectHelper Class
* This Class contains Helper Methods for working with JsObjects
* @author Rushpuppy - Severin Holm   
*/   
v6.fn.ObjectHelper = function ObjectHelper() {
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
  * renders the HeadBar to objElement Context
  * @param {object} objDefault The main object that is used as base.
  * @param {object} objNew The filter object that overwrites the base object.
  * @return {object} The finished merged object        
  */   
  this.merge = function(objDefault, objNew) {
    // Loop trought properties of the base object
    for (var strPropBase in objDefault) {
      // Search the strPropBase in the new object
      for (var strPropNew in objNew) {
        if(strPropBase == strPropNew) {
          // Overwrite base property
          objDefault[strPropBase] = objNew[strPropNew];
        }
      }
    }
    
    // Return the merged object
    return objDefault;
  }

  //****************************************************************************
  $this.init();
}