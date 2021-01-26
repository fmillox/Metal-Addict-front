import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import { convertToHTML, convertFromHTML } from 'draft-convert';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './draftEditor.scss';

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
          options: ['inline', 'link', 'emoji'],
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
  htmlContent: PropTypes.string.isRequired,
  setHtmlContent: PropTypes.func.isRequired,
};

export default DraftEditor;
