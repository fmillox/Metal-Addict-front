// == Npm import
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import { convertToHTML, convertFromHTML } from 'draft-convert';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// == Import
import './draftEditor.scss';

// == Component
const DraftEditor = ({ htmlContent, setHtmlContent }) => {
  const [editor, setEditor] = useState(
    () => EditorState.createWithContent(convertFromHTML(htmlContent)),
  );

  const handleEditorStateChange = (state) => {
    setEditor(state);
    setHtmlContent(convertToHTML(state.getCurrentContent()));
  };

  return (
    <div className="draftEditor">
      <Editor
        editorState={editor}
        onEditorStateChange={handleEditorStateChange}
        toolbar={{
          options: ['inline'], // , 'emoji', 'link'
          inline: {
            options: ['bold', 'italic', 'underline'],
          },
        }}
        wrapperClassName="draftEditor-wrapper"
        editorClassName="draftEditor-editor"
        toolbarClassName="draftEditor-toolbar"
      />
    </div>
  );
};

DraftEditor.propTypes = {
  /** html text used as value for the editor */
  htmlContent: PropTypes.string.isRequired,
  /** called when onEditorStateChange event is received by the editor component, one parameter :
   * - new value
   */
  setHtmlContent: PropTypes.func.isRequired,
};

// == Export
export default DraftEditor;
