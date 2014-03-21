
/*
* v6.ui.bootstrap.NavbarContainer Class
* This Class generates a NavbarContainer Bootstrap Element
* http://getbootstrap.com/components/#navbar
* @author Rushpuppy - Severin Holm   
*/   
v6.ui.bootstrap.NavbarContainer = function NavbarContainer() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
    
  this.prop = {
    id: 'container', 
    type: 'v6.ui.bootstrap.NavbarContainer',
    parent: null,
    children: [],    
    align: 'left', // left, right
    containerType: 'nav' // nav, form, btn, text
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
    $this.uiBuilder.allow = ''; // NavbarNav, NavbarForm, NavbarButton, NavbarText Elements
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
    strTpl += '<{element} data-id="{id}" data-container="{id}" class="v6-bootstrap nav navbar-{type} navbar-{align}">';
    strTpl += '</{element}>';
    
    // Set Values into Template
    strTpl = strTpl.replace(/{id}/g, $this.prop.id);
    strTpl = strTpl.replace(/{type}/g, $this.prop.containerType);
    strTpl = strTpl.replace(/{align}/g, $this.prop.align);
    
    // Set Element Value into Template
    var strElement = '';
    switch($this.prop.containerType){
      case 'nav':
        strElement = 'ul';
        break;
      case 'btn':
        strElement = 'button';
        break;
      case 'text':
        strElement = 'p';
        break;     
      case 'form':
        strElement = 'form';
        break;     
    }    
    strTpl = strTpl.replace(/{element}/g, strElement);
    
    // Return Template
    return strTpl;
  } 
  
  /*
  * Loads the Object
  * @param {object} objProp Object String 
  */ 
  this.load = function(objProp) {
    $this.prop = objProp;
    if($this.prop.hasOwnProperty('elements')){
      delete $this.prop['elements'];
    } 
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