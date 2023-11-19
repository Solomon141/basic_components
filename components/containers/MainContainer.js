import { StyleSheet, Text, View } from "react-native";
import React from "react";

import styled from "styled-components/native";
import { colors } from "../colors";

export const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 40px;
  background-color: ${colors.black};
`;

const MainContainer = (props) => {
  return <StyledView  {...props}>{props.children}</StyledView>;
};

export default MainContainer;
