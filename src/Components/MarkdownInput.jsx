import React, { useContext } from "react";
import MyContext from "../MyContext";
import { Container, Title, TextArea } from "../AllStyle.js";

export function MarkdownInput(props) {
  const { setMarkdownText } = useContext(MyContext);
  const onInputChange = (e) => {
    const newValue = e.target.value;
    setMarkdownText(newValue);
  };

  return (
    <Container>
      <Title>Markdown TextArea</Title>
      <TextArea onChange={onInputChange} />
    </Container>
  );
}
