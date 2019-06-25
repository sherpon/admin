/**
 * https://stackoverflow.com/questions/24651222/misspelled-ace-editor-options
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
import 'brace/mode/ejs';
import 'brace/theme/tomorrow_night_eighties';
import './editorCode.scss';
/** files */
/** strings */

const EditorCode = ({code, handleOnChange, style}) => {
  return(
    <AceEditor
      placeholder='e.g. let myVar = "my value"'
      mode="ejs"
      theme="tomorrow_night_eighties"
      onChange={handleOnChange}
      width={'100%'}
      fontSize={12}
      style={style}
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

export default EditorCode;