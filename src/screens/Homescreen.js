import * as nativebase from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import customTheme from '../theme/Theme';
import ToggleTheme from '../theme/ToggleTheme';




const HomeScreen = () => {


  const colors = customTheme.colors;
  const {colorMode}=nativebase.useColorMode();
  return (
    <nativebase.Center 
    bg={colorMode === "light" ? colors.background.light:colors.background.default} 
    flex={1} 
    justifyContent="center" 
    alignItems="center">
      <nativebase.Box
      bg={colorMode==='light' ? "muted.100":colors.darkAccent[400]}
      minW={"50%"}
      minH={"50%"}
      safeAreaX={10}
      justifyContent="center"
      alignItems="center"
      borderRadius={20}
      shadow={10}
      mx={10}
      p={2}
      borderWidth={0.5}
      borderColor={colorMode==='light'?"coolGray.300":"coolGray.700"}
      >
        <nativebase.Text fontSize={"2xl"} fontWeight={"bold"}>Bienvenido a la aplicación</nativebase.Text>
        <nativebase.Text fontSize={"sm"} fontWeight={"bold"}>Esta es la pantalla principal de la aplicación.</nativebase.Text>
      
      <nativebase.HStack
      safeAreaTop
      alignItems="center"
      justifyContent="center"
      space={2}
      mt={2}
      >
        <nativebase.Text fontSize={"sm"} fontWeight={"bold"}
        maxW={"120px"}
        mr={5}
        >modo oscuro de la aplicacion.</nativebase.Text>
      <nativebase.Box
      bg={"white"}
      rounded={"50"}
      shadow={10}
      
      >
      <ToggleTheme />
      </nativebase.Box>
      </nativebase.HStack>
      </nativebase.Box>
    </nativebase.Center>
  );
};

export default HomeScreen;
