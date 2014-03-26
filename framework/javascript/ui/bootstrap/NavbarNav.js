
/*
* v6.ui.bootstrap.NavbarNav Class
* This Class generates a NavbarNav Bootstrap Element
* http://getbootstrap.com/components/#navbar
* @author Rushpuppy - Severin Holm   
*/   
v6.ui.bootstrap.NavbarNav = function NavbarNav() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
    
  this.prop = {
    id: 'NavbarNav', 
    type: 'v6.ui.bootstrap.NavbarNav',
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
    $this.uiBuilder.allow = ''; // NavbarNavElement
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
    strTpl += '<ul data-id="{id}" data-container="{id}" class="v6-bootstrap nav navbar-nav navbar-{align}">';
    strTpl += '</ul>';
    
    // Set Values into Template
    strTpl = strTpl.replace(/{id}/g, $this.prop.id);
    strTpl = strTpl.replace(/{type}/g, $this.prop.containerType);
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