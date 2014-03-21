
/*
* v6.controller.DeveloperPageController Class
* This Class generates a DeveloperPageController Object Container
* This Class will be Loadet directly to the Page (Globalspace) there
* can only be one Controller and this one will be loadet in Developer Modus
* @author Rushpuppy - Severin Holm   
*/   
v6.controller.DeveloperPageController = function DeveloperPageController() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
  
  this.arrElements = new Array();
  
  //****************************************************************************
  // Constructor 
  //****************************************************************************
  /*
  * Constructor Method
  * @constructor  
  * @param void      
  */     
  this.init = function() { 
    // Call Event Manager
    $this.eventManager();
  }
  
  //****************************************************************************
  // Methods
  //****************************************************************************  
  /*
  * Register Events to specific Elements
  */  
  this.eventManager = function() {
    // Click Event for all Bootstrap Elements
    $('body').on('click', '.v6-bootstrap' , function(){$this.onClickElement(this)});
  };

  this.onClickElement = function(objCaller) {
    // TODO: Add DevClass (for border), Opens DevMenu
  }
  
  /*
  * Renders the UI to the Body Tag
  * @param {arrJsonObjects} The UI Json Array
  */    
  this.renderUi = function(arrJsonObjects) {
    // Loop Array
    for(var i in arrJsonObjects) {
      // Create an Object and Initialize it
      eval('var obj = new ' + arrJsonObjects[i].type + '();');
      obj.load(arrJsonObjects[i]);          
      
      // Push new Object to the Global Page Stack
      $this.arrElements.push(obj);

      // Render HTML
      var strParent = obj.prop.parent;
      var strHtml = obj.render();
      if(strParent != null){
        $('[data-container=' + strParent + ']').append(strHtml);
      } else {
        $('body').append(strHtml);
      }
      
    }    
  } 
  
  /*
  * Generates the UI Json Code and returns it
  * @return {array} The UI Json Array
  */    
  this.saveUi = function() {
    // Create Return Array
    var $arrReturn = new Array();

    // Loop G_DEV_PAGE
    for(var i in $this.arrElements) {
      var obj = $this.arrElements[i];
      var objSave = obj.save();
      $arrReturn.push(objSave);
    }
    
    return $arrReturn;
  }

  //****************************************************************************
  $this.init();
}