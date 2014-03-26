
/*
* v6.ui.bootstrap.NavbarForm Class
* This Class generates a NavbarForm Bootstrap Element
* http://getbootstrap.com/components/#navbar
* @author Rushpuppy - Severin Holm   
*/   
v6.ui.bootstrap.NavbarForm = function NavbarForm() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
    
  this.prop = {
    id: 'NavbarForm', 
    type: 'v6.ui.bootstrap.NavbarForm',
    parent: null,
    children: [],    
    align: 'left', // left, right
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
    $this.uiBuilder.allow = ''; // FormGroup
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
    strTpl += '<form data-id="{id}" data-container="{id}" class="v6-bootstrap navbar-form navbar-{align}">';
    strTpl += '</form>';
    
    // Set Values into Template
    strTpl = strTpl.replace(/{id}/g, $this.prop.id);
    strTpl = strTpl.replace(/{align}/g, $this.prop.align);
    
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