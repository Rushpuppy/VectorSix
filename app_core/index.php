
<!-- 
  At The Moment this is my Testclass for the Developement of the V6 Javascript Framework
  But soon this will be something like a Router This Index is the Standard index that will
  be deliveret with every VectorSix build Application. This one has no Generated content.
  
  Because it will work Totaly generic

  1.) Include all Global PHP Classes
  - config.php
  - global.php
  - start SESSION
  - Autoloader Implementation
  
  2.) Get Request Informations
  TODO: $_POST, $_GET, $_SESSION, REQUEST HEADER
  
  3.) Set Globals
  TODO: Set absolute Global Variables such as Absolute Path (can be diferent for the dev or Core app)
  
  4.) Get the Controller from the Request
  TODO: Create an instance of the Requested Controller and play the main Method of the Controller
  If there is no specific Controller in the Request just get the Standard Controller from the Config 
  File (default value should be index.php).  

-->

<html>
  <head>
    <script src="../vendor/jquery-1.11.0/jquery-1.11.0.min.js"></script>
    <script src="../vendor/bootstrap-3.1.1/js/bootstrap.min.js"></script>
    <link href="../vendor/bootstrap-3.1.1/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
    <link href="../vendor/bootstrap-3.1.1/css/bootstrap-theme.min.css" type="text/css" rel="stylesheet" />
    <script src="../framework/javascript/global.php"></script>
    
    <script>
      $(function() {
      
        // Generate The Object that comes from Database
        var arrBootstrap = [{
          id: '1', 
          type: 'v6.ui.bootstrap.Navbar',
          parent: null,
          children: [{id:'2'},{id:'7'},{id:'8'},{id:'9'}],          
          text: 'SEVERIN', 
          href: '#',
          position: 'static',
          inverted: true
        },
        {
          id: '2', 
          type: 'v6.ui.bootstrap.NavbarNav',
          parent: '1',
          children: [{id:'3'}],     
          align: 'left',
        },        
        {
          id: '3', 
          type: 'v6.ui.bootstrap.NavbarNavElement',
          parent: '2',
          children: [{id:'6'}],
          active: false,
          text: 'Link',    
          href: '#',
          isDropdown: true,
        },        
        {
          id: '4', 
          type: 'v6.ui.bootstrap.Dropdown',
          parent: '13',
          children: [{id:'5'}],
          isButton: true,
          text: 'DropDown',
          btnStyle: 'success',
          isRight: true
        },
        {
          id: '5', 
          type: 'v6.ui.bootstrap.DropdownElement',
          parent: '4',
          children: [],
          text: 'Dropdown Element',
          href: '#',
          elementType: 'li',
          isDisabled: false
        },
        {
          id: '6', 
          type: 'v6.ui.bootstrap.DropdownElement',
          parent: '3',
          children: [],
          text: 'Test Element',
          href: '#',
          elementType: 'li',
          isDisabled: true
        },
        {
          id: '7', 
          type: 'v6.ui.bootstrap.NavbarButton',
          parent: '1',
          children: [],
          text: 'Title', 
          href: '#',
          style: 'success',
          align: 'right'
        },
        {
          id: '8', 
          type: 'v6.ui.bootstrap.NavbarText',
          parent: '1',
          children: [],
          text: 'This is a normal Text', 
          align: 'left' // left, right
        },
        {
          id: '9', 
          type: 'v6.ui.bootstrap.NavbarForm',
          parent: '1',
          children: [],    
          align: 'left', // left, right
        },
        {
          id: '10', 
          type: 'v6.ui.bootstrap.Container',
          parent: null,
          children: [{id:'11'}]
        },
        {
          id: '11', 
          type: 'v6.ui.bootstrap.GridRow',
          parent: '10',
          children: [{id:'12'}]
        },
        {
          id: '12', 
          type: 'v6.ui.bootstrap.GridCol',
          parent: '11',
          children: [{id:'13'}],
          size: 6,
          offset: 3
        },
        {
          id: '13', 
          type: 'v6.ui.bootstrap.Panel',
          parent: '12',
          children: [{id:'4'}],
          title: 'Test Panel',
          style: 'default' // success, info, warning, danger, default
        }                                                                                        
        ];
        
        // Render Page
        var pageController = new v6.controller.DeveloperPageController()
        pageController.renderUi(arrBootstrap);
        
        // Log Save Page
        console.log(pageController.saveUi());
        
      });      
    </script>
  </head>
  <body>

      

  </body>
</html>