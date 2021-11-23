import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1em;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

export const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
`;

export const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 100vh;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;
