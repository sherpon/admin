/**
 *  https://stackoverflow.com/questions/24651222/misspelled-ace-editor-options
 */

/** libs */
import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
/** containers */
/** styles */
import 'brace/mode/css';
import 'brace/theme/dracula';
import './editorCss.scss';
/** files */
/** strings */

const EditorCss = ({code, handleOnChange}) => {
  return(
    <AceEditor
      placeholder='e.g. .my-class {}'
      mode="css"
      theme="dracula"
      onChange={handleOnChange}
      width={'100%'}
      height={'300px'}
      fontSize={12}
      style={{
        borderRadius: '3px',
        marginBottom: '15px',
      }}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}/>
  );
};

export default EditorCss;