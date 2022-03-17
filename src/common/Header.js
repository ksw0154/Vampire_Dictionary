import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledImage
      source={{
        uri: 'https://w.namu.la/s/31821ff835f0bfa8be3c4e87767194214b5eb8e4d75489e0557ec82e1fb6712232f834f9598b6b10ba7cb9906f601951b6d3558d42bb1f5190fb0e2efbd5625db0c94a84cb81718aa08050d4d96c590d',
      }}
    />
  );
};

export default Header;

const StyledImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 5px;
`;
