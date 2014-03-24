
/*
* v6.ui.bootstrap.Panel Class
* This Class generates a Panel Bootstrap Element
* http://getbootstrap.com/components/#panels
* @author Rushpuppy - Severin Holm   
*/   
v6.ui.bootstrap.Panel = function Panel() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
    
  this.prop = {
    id: 'Panel', 
    type: 'v6.ui.bootstrap.Panel',
    parent: null,
    children: [],
    title: 'Panel',
    style: 'default' // success, info, warning, danger, default
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
    strTpl += '<div data-id="{id}" class="v6-bootstrap panel panel-{style}">';
    
    // Add title
    if($this.prop.title != '') {
       strTpl += '   <div class="panel-heading">';
       strTpl += '      <h3 class="panel-title">{title}</h3>';
       strTpl += '   </div>';
    }
    
    strTpl += '   <div data-container="{id}" class="panel-body">';
    strTpl += '   </div>';
    strTpl += '</div>';

    // Set Values into Template
    strTpl = strTpl.replace(/{id}/g, $this.prop.id);
    strTpl = strTpl.replace(/{title}/g, $this.prop.title);
    strTpl = strTpl.replace(/{style}/g, $this.prop.style);
     
    // Return Template
    return strTpl;
  } 
  
  /*
  * Loads the Object
  * @param {object} objProp Object String 
  */ 
  this.load = function(objProp) {
    $this.prop = objProp;
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