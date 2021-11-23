import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import MyContext from "../MyContext";
import { Container, Title, ResultArea } from "../AllStyle.js";

export function MarkdownOutput(props) {
  const { markdownText } = useContext(MyContext);

  return (
    <Container>
      <Title>Converted TextArea</Title>
      <ResultArea>
        <ReactMarkdown children={markdownText} />
      </ResultArea>
    </Container>
  );
}
