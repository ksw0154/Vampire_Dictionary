import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import MenuBox from './MenuBox';

const menuData = [
  {
    title: '캐릭터',
    url: 'https://w.namu.la/s/f6a11c7abd43624dcaa91ae6af8d7f8205374981ab7d85577e8b75f09b68c93389a1b34f6a8462bb7ddb5a10c242bbf1b41a1a78dbb1df60635d9c2290dff860ee4f0b7a8d8f6472639e5eb9649b5a6d952b2a49b6801d6179f5791c81935911',
  },
  {
    title: '파워 업',
    url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FboB7ur%2Fbtrs8A7z6vV%2Fo1ZymOLx9D87twkLauKdg0%2Fimg.png',
  },
  {
    title: '스테이지',
    url: 'https://w.namu.la/s/67169adde48b710e907eeb4ec6d26eb5ade156c328a754b6bdf44cdca751ed72aa834f39e3709ea5638defeed1a13d9577f2453c124bdcadab07ad34f625eabbbdf47c37ac09049cb8271db15135683ca077b52332855c4828b42c6560bfae7f',
  },
  {
    title: '무기',
    url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbVPtGb%2Fbtrs7FVD8yp%2FpkGm4KBPpqkGKCrgPc0DY1%2Fimg.png',
  },
  {
    title: '강화 무기',
    url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbAv1yN%2FbtrtehM3Iuu%2FJ9MViX89MVnzreCbZWsEP1%2Fimg.png',
  },
  {
    title: '장신구',
    url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPx08P%2FbtrtakiRlMe%2FLw8QDz9c9k4iz4kKUNfwWk%2Fimg.png',
  },
  {
    title: '커맨드',
    url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPx08P%2FbtrtakiRlMe%2FLw8QDz9c9k4iz4kKUNfwWk%2Fimg.png',
  },
  {
    title: '아직 미정',
    url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPx08P%2FbtrtakiRlMe%2FLw8QDz9c9k4iz4kKUNfwWk%2Fimg.png',
  },
];

const MenuList = ({navigation}) => {
  return (
    <StyledList>
      {menuData.map((data, index) => (
        <MenuBox
          navigation={navigation}
          title={data.title}
          key={index}
          url={data.url}
        />
      ))}
    </StyledList>
  );
};

export default MenuList;

const StyledList = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 10px;
  justify-content: center;
`;
