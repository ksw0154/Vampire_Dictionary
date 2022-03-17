import React from 'react';
import {Text, Image} from 'react-native';
import styled from 'styled-components';

const MenuBox = ({title, url, navigation}) => {
  return (
    <StyledBox onPress={() => navigation.navigate('Details')}>
      <StyledImage
        source={{
          uri: url,
        }}
      />
      <StyledText>{title}</StyledText>
    </StyledBox>
  );
};

export default MenuBox;

const StyledBox = styled.TouchableOpacity`
  padding: 15px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fc6;
  border-radius: 15px;
  margin: 10px;
`;

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const StyledText = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: 10px;
`;
