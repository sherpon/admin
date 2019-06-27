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
  }

  componentDidMount() {
    const editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: '100%',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: {
        id: 'gjs-',             // Prefix identifier that will be used inside storing and loading
        type: 'local',          // Type of the storage
        autosave: true,         // Store data automatically
        autoload: true,         // Autoload stored data on init
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
        storeComponents: true,  // Enable/Disable storing of components in JSON format
        storeStyles: true,      // Enable/Disable storing of rules in JSON format
        storeHtml: true,        // Enable/Disable storing of components as HTML string
        storeCss: true,         // Enable/Disable storing of rules as CSS string
      },
      // Avoid any default panel
      panels: { defaults: [] },
      plugins: ['gjs-preset-webpage'],
    });
  }

  render() {
    return(
      <div className="editor-grapes-js">
        <div id="gjs">
          <h1>Hello World Component!</h1>
        </div>
      </div>
    );
  }
}

EditorGrapesJs.propTypes = {};

export default EditorGrapesJs;