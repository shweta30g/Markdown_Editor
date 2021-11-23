import React, { useState } from "react";
import MyContext from "../MyContext.js";
import { MarkdownInput } from "./MarkdownInput.jsx";
import { MarkdownOutput } from "./MarkdownOutput.jsx";
import { AppContainer, Title, EditorContainer } from "../AllStyle.js";

export function Result() {
  const [markdownText, setMarkdownText] = useState("");
  const contextValue = {
    markdownText,
    setMarkdownText,
  };
  return (
    <MyContext.Provider value={contextValue}>
      <AppContainer>
        <Title>MARKDOWN EDITIOR</Title>
        <EditorContainer>
          <MarkdownInput />
          <MarkdownOutput />
        </EditorContainer>
      </AppContainer>
    </MyContext.Provider>
  );
}
