
/*
* v6.ui.UiBuilder Class
* This Class Generates Administration Panels for UI Elements
* This is not a standalone Class a UI Element has to implement this
* and Overwrite the properties. This Class Renders a Administration Panel
* with the Overwriten Properties. And then sets the variables in the Object
* and the HTML Element on the Page. 
* @author Rushpuppy - Severin Holm   
*/   
v6.ui.UiBuilder = function UiBuilder() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
  this.id = null;  
  this.form = new Array(); // This will be the Formular Generator Prop 
  this.prop = new Array(); // This will be positioning stuff for the Admin Panel
  this.allow = new Array(); // This will be a list with all accepted Types for Adding
  
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
  * EventManager Call from the DevMode Controllbars
  * @param {string} strEvent The event type (config, remove, order)  
  */    
  this.eventManager = function(strEvent) {
    alert($this.id + ' : ' + strEvent);
  };

  /*
  * Adds a new Element to childrens
  * @param {string} strId the new child Elements Id
  */    
  this.addElement = function(strId) {
  };
  
  /*
  * Removes a element from the childrens
  * @param {string} strId the Id of the specific child Element
  */    
  this.removeElementById = function(strId) {
  };

  /*
  * Reorders the Childrens by its id
  * @param {string} strIdFrom the container target
  * @param {string} strIdTo the reorder destination  
  */    
  this.orderElementById = function(strIdFrom, strIdTo) {
  };
  
  //****************************************************************************
  // Getter & Setter
  //****************************************************************************
  //empty

  //****************************************************************************
  $this.init();
}