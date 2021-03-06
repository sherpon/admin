/** libs */
import React from 'react';
import PropTypes from 'prop-types';
import grapesjs from 'grapesjs';
// If you need plugins, put them below the main grapesjs script
// import 'grapesjs-some-plugin';
import beautify from'js-beautify';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
/** containers */
/** styles */
import './editorGrapesJs.scss';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage';
/** files */
/** strings */

class EditorGrapesJs extends React.Component {
  constructor(props) {
    super(props);
    this.editor = {};

    if ( process.env.NODE_ENV === 'development' ) {  //DEV
      window.editorGrapesJs = this;
    }
  }

  componentDidMount() {
    const {file, backToDashboard, handleOnClickSaveFile, handleOnClickPublishFile} = this.props;
    this.editor = grapesjs.init({
      // https://github.com/artf/grapesjs/blob/dev/src/editor/config/config.js
      //
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      components: file.sourceCode,
      //baseCss: '',
      protectedCss: '',
      allowScripts: true,
      // Size of the editor
      height: '100%',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: {
        id: 'gjs-',             // Prefix identifier that will be used inside storing and loading
        type: 'local',          // Type of the storage
        autosave: true,         // Store data automatically
        autoload: false,         // Autoload stored data on init
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
        storeComponents: true,  // Enable/Disable storing of components in JSON format
        storeStyles: true,      // Enable/Disable storing of rules in JSON format
        storeHtml: true,        // Enable/Disable storing of components as HTML string
        storeCss: true,         // Enable/Disable storing of rules as CSS string
      },
      // Avoid any default panel
      // panels: { defaults: [] },
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          modalImportTitle: 'Import Template',
          modalImportLabel: '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
          modalImportContent: function(editor) {
            return editor.getHtml() + '<style>'+editor.getCss()+'</style>'
          },
        },
      },
    });

    const commands = this.editor.Commands;
    commands.add('sherpon-back-to-dashboard', editor => {
      console.log('This is my command: ', 'sherpon-back-to-dashboard');
      backToDashboard();
    });

    commands.add('sherpon-save-design', editor => {
      const {file} = this.props;
      console.log('This is my command: ', 'sherpon-save-design');
      // const style = beautify.css(editor.getCss(), { indent_size: 2 });
      // const sourceCode = beautify.html(editor.getHtml(), { indent_size: 2 });
      const style = editor.getCss();
      const sourceCode = editor.getHtml();
      if (file.type==='template') {
        if (file.filename==='index.ejs' ||  // index template
            file.filename==='pages.ejs' ||  // page template
            file.filename==='product.ejs' ||// product template
            file.filename==='blog.ejs'      // blog template
          ) {
          //
          let newHtml = file.sourceCode;
          newHtml = newHtml.replace(/<style id="style-template">([\s\S]*?)<\/style>/i, `<style id="style-template">${style}</style>`);
          newHtml = newHtml.replace(/<body>([\s\S]*?)<\/body>/i, `<body>${sourceCode}</body>`);
          newHtml = beautify.html(newHtml, { indent_size: 2 });
          handleOnClickSaveFile('', newHtml);
        } else {
          // any template
          const newSourceCode = beautify.html(`${sourceCode}<style>${style}</style>`, { indent_size: 2 });
          handleOnClickSaveFile('', newSourceCode);
        }
      } else {
        // pages
        handleOnClickSaveFile(
          /* style */ beautify.css(style, { indent_size: 2 }), 
          /* sourceCode */ beautify.html(sourceCode, { indent_size: 2 })
        );
      }
      
      // console.log('js: ', editor.getJs());
      // console.log('getWrapper: ', editor.getWrapper());
      // const selected = editor.getSelected();
      // console.log('getSelected.toHTML(): ', selected.toHTML());
      // console.log('getSelected.getStyle(): ', selected.getStyle());
      // console.log('getSelected.getAttributes(): ', selected.getAttributes());
      // console.log('getSelected.getSelectedToStyle(): ', editor.getSelectedToStyle());
    });

    commands.add('sherpon-publish', editor => {
      const {file} = this.props;
      console.log('This is my command: ', 'sherpon-publish');
      handleOnClickPublishFile(file.filename);
    });

    const panelManager = this.editor.Panels;
    //panelManager.getPanels();
    //console.table(panelManager.getPanelsEl());
    const backToDashboardButton = panelManager.addButton('options',{
      id: 'sherpon-back-to-dashboard',
      className: 'fa fa-arrow-left',
      command: 'sherpon-back-to-dashboard',
      // attributes: { title: 'Some title'},
      // active: false,
      // label: 'Return to dashboard',
    });

    const saveDesignButton = panelManager.addButton('options',{
      id: 'sherpon-save-design',
      className: 'fa fa-floppy-o',
      command: 'sherpon-save-design',
      // attributes: { title: 'Some title'},
      // active: false,
      // label: 'Return to dashboard',
    });

    const publishButton = panelManager.addButton('options',{
      id: 'sherpon-publish',
      className: 'fa fa-cloud-upload',
      command: 'sherpon-publish',
      // attributes: { title: 'Some title'},
      // active: false,
      // label: 'Return to dashboard',
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.isFileLoaded===false && nextProps.isFileLoaded===true) {
      // console.log('file was loaded!');
      console.log('file source code: ', nextProps.file.sourceCode);
      const domComponents = this.editor.DomComponents;
      domComponents.load({ html: nextProps.file.sourceCode + `<style>${nextProps.file.style}</style>`});
    }
    return true;
  }

  render() {
    return(
      <div className="editor-grapes-js">
        <div id="gjs">
        </div>
      </div>
    );
  }
}

EditorGrapesJs.propTypes = {
  isFileLoaded: PropTypes.bool.isRequired,
  file: PropTypes.object.isRequired,
  backToDashboard: PropTypes.func.isRequired,
  handleOnClickSaveFile: PropTypes.func.isRequired,
  handleOnClickPublishFile: PropTypes.func.isRequired,
};

export default EditorGrapesJs;