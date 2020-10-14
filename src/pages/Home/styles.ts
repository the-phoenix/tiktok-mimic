import styled from 'styled-components/native';

interface Props {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #000;
`;

export const Separator = styled.Text`
  color: #fff;
  font-size: 15px;
  opacity: 0.2;
`;

export const Header = styled.View`
  height: 10%;
  flex-direction: row;
  position: absolute;
  align-self: center;
  z-index: 10;
  align-items: center;
  margin-top: 5%;
`;
export const Text = styled.Text`
  color: #fff;
  font-size: ${(props: Props) => (props.active ? '20px' : '18px')};
  padding: 5px;
  font-weight: bold;
  opacity: ${(props: Props) => (props.active ? '1' : '0.5')};
`;

export const Tab = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;

export const Feed = styled.View`
  flex: 1;
  z-index: -1;
  position: absolute;
`;

export const Actions = styled.View`
  flex-direction: column;
  position: absolute;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  bottom: 0;
  right: 10px;
  z-index: 10;
`;

export const BoxAction = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: column;
  padding: 10px 0;
`;

export const TextAction = styled.Text`
  color: #fff;
  padding: 5px 0;
`;

export const CommentModalContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
`;

export const CommentModalBody = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  background: #2f1e9f;
  padding: 20px;
  width: 90%;
  position: absolute;
  margin-left: 5%;
  bottom: 10%;
  border-radius: 10px;
`;

export const CommentRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0px;
`;

export const CommenterID = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  width: 30%;
`;

export const CommentText = styled.Text`
  color: #ffff23;
  font-size: 12px;
`;

export const CommentInput = styled.TextInput.attrs({
  multiline: true,
})`
  width: 80%;
  border-radius: 5px;
  font-size: 12px;
  padding: 10px 15px;
  background: #fff;
  margin-right: 7%;
`;
