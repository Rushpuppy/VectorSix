
/*
* v6.ui.bootstrap.Container Class
* This Class generates a Container Bootstrap Element
* http://getbootstrap.com/css/#grid
* @author Rushpuppy - Severin Holm   
*/   
v6.ui.bootstrap.Container = function Container() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
    
  this.prop = {
    id: 'Container', 
    type: 'v6.ui.bootstrap.Container',
    parent: null,
    children: []
  };
  
  
  //****************************************************************************
  // Constructor 
  //****************************************************************************
  /*
  * Constructor Method
  * @constructor  
  * @param void      
  */     
  this.init = function() { 
    // Set the prop.info.id
    var objGuid = new v6.fn.Guid(); 
    $this.prop.id = objGuid.generate();
    
    // Create Ui Builder & Set Fields
    $this.uiBuilder = new v6.ui.UiBuilder();
    $this.uiBuilder.form = ''; 
    $this.uiBuilder.prop = '';  
    $this.uiBuilder.allow = ''; // Nothing 
  }
  
  //****************************************************************************
  // Methods
  //****************************************************************************    
  /*
  * Renders and returns the HTML code this element 
  * @return {string} The rendered HTML Code of the element
  */    
  this.render = function() {
    // Generate the HTML Template
    var strTpl = '';
    strTpl += '<div data-id="{id}" data-container="{id}" class="v6-bootstrap container">';
    strTpl += '</div>';

    // Set Values into Template
    strTpl = strTpl.replace(/{id}/g, $this.prop.id);
     
    // Return Template
    return strTpl;
  } 
  
  /*
  * Loads the Object
  * @param {object} objProp Object String 
  */ 
  this.load = function(objProp) {
    $this.prop = objProp;
    $this.uiBuilder.id = objProp.id;
  }
  
  /*
  * Returns the prop Object
  * @return {object} the $this.prop
  */ 
  this.save = function() {
    return $this.prop;
  }  

  //****************************************************************************
  $this.init();
}