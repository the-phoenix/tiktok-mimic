import React, { useState } from 'react';
import { Modal } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import server from '../../../server.json';

import {
  BoxAction,
  CommentModalContainer,
  CommentModalBody,
  CommentRow,
  CommenterID,
  CommentText,
  CommentInput,
} from './styles';

interface Props {
  visible: boolean;
  onClose: Function;
}

const CommentModal: React.FC<Props> = ({ visible, onClose }) => {
  const [comments, setComments] = useState(server.comments);
  const [myComment, setMycomment] = useState('');
  const handleComments = () => {
    if (!myComment) return false;
    setComments([...comments, { id: 'tester@', comment: myComment }]);
    setMycomment('');
  };
  return (
    <Modal
      visible={visible}
      onRequestClose={() => onClose()}
      transparent
      animationType="fade"
    >
      <CommentModalContainer onPress={() => onClose()}>
        <CommentModalBody onPress={() => null}>
          {comments.map(({ id, comment }) => (
            <CommentRow key={id}>
              <CommenterID>{`${id}: `}</CommenterID>
              <CommentText>{comment}</CommentText>
            </CommentRow>
          ))}
          <CommentRow>
            <CommentInput
              onChangeText={text => setMycomment(text)}
              value={myComment}
            />
            <BoxAction onPress={() => handleComments()}>
              <FontAwesome name="send" size={25} color="#fff" />
            </BoxAction>
          </CommentRow>
        </CommentModalBody>
      </CommentModalContainer>
    </Modal>
  );
};

export default CommentModal;
