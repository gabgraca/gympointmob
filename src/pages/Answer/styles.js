import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background: #f2f2f2;
  padding: 25px;
`;

export const AnswerBlock = styled.View`
  background: #fff;
  padding: 15px;
  margin-top: 10px;
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;
export const AnswerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Text = styled.Text`
  font-weight: bold;
  color: #444444;
`;
export const Date = styled.Text`
  color: #666666;
`;
export const Question = styled.Text`
  margin-top: 15px;
  margin-bottom: 35px;
  color: #666666;
  line-height: 26px;
`;
export const AnswerText = styled.Text`
  margin-top: 15px;
  color: #666666;
  line-height: 26px;
`;
