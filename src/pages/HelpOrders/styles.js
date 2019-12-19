import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background: #f2f2f2;
  padding: 25px;
`;

export const NewHOButton = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
  height: 50px;
`;

export const HelpOrdersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const HelpOrderBlock = styled.TouchableOpacity`
  background: #fff;
  margin-top: 10px;
  border-radius: 4px;
  padding: 10px;
  border: 1px solid #dddddd;
`;
export const HelpOrderHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 10px;
`;
export const AnswerStatus = styled.Text`
  font-weight: bold;
  color: #999999;
`;
export const AnswerDate = styled.Text`
  color: #999999;
`;
export const Question = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: #999999;
  line-height: 26px;
`;
