import logo from './logo.svg';
import './App.css';
import Editor from "@monaco-editor/react";
import {useRef} from "react";

Editor.la
function App() {
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    function showValue() {
        alert(editorRef.current.getValue());
    }


    return (
        <>
            <button onClick={showValue}>Show value</button>
            <Editor
                height="90vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue="// some comment"
                onMount={handleEditorDidMount}
            />
        </>
    );
}

export default App;
