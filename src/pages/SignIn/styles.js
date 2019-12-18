import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background: #fff;
  justify-content: center;
  padding: 25px;
`;

export const Form = styled.View`
  align-items: center;
`;

export const Logo = styled.Image``;

export const Input = styled.TextInput`
  margin-top: 20px;
  border: 1px solid #999999;
  border-radius: 4px;
  height: 45px;
  width: 100%;
  padding: 0 20px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  width: 100%;
`;

export const Text = styled.Text`
  color: #ee4d64;
  font-weight: bold;
  font-size: 24px;
`;
