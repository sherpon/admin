/** libs */
import React from 'react';
import PropTypes from 'prop-types';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
// If you need plugins, put them below the main grapesjs script
// import 'grapesjs-some-plugin';
import 'grapesjs-preset-webpage';
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
/** files */
/** strings */

class EditorGrapesJs extends React.Component {
  constructor(props) {
    super(props);
    this.editor = {};
  }

  componentDidMount() {
    const {file, backToDashboard} = this.props;
    this.editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      components: file.sourceCode,
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
    });

    const commands = this.editor.Commands;
    commands.add('sherpon-back-to-dashboard', editor => {
      console.log('This is my command: ', 'sherpon-back-to-dashboard');
      backToDashboard();
    });

    commands.add('sherpon-save-source-code', editor => {
      console.log('This is my command: ', 'sherpon-save-source-code');
      console.log('html: ', editor.getHtml());
      console.log('css: ', editor.getCss());
      console.log('js: ', editor.getJs());
    });

    commands.add('sherpon-publish', editor => {
      console.log('This is my command: ', 'sherpon-publish');
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

    const saveSourceCodeButton = panelManager.addButton('options',{
      id: 'sherpon-save-source-code',
      className: 'fa fa-floppy-o',
      command: 'sherpon-save-source-code',
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
      console.log('file was loaded!');
      console.log('file source code: ', nextProps.file.sourceCode);
      const domComponents = this.editor.DomComponents;
      domComponents.load({ html: nextProps.file.sourceCode});
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
};

export default EditorGrapesJs;