import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background: #f2f2f2;
  padding: 25px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
  height: 50px;
`;

export const CheckInsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const CheckInItem = styled.View`
  background: #fff;
  padding: 15px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
`;
export const Item = styled.Text`
  font-weight: bold;
  color: #444444;
`;
export const Description = styled.Text`
  color: #666666;
  font-size: 14px;
`;
