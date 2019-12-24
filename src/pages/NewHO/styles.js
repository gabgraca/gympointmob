import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background: #f2f2f2;
  padding: 20px;
`;

export const SendOrderButton = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
  height: 50px;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  border: 1px solid #999999;
  border-radius: 4px;
  height: 335px;
  width: 100%;
  padding: 0 20px;
  padding: 10px;
  background: #fff;
`;
