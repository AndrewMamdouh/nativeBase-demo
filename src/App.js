import {
  Box,
  Text,
  HStack,
  VStack,
  Avatar,
  Center,
  Icon,
  Pressable
} from "native-base";
import { Path } from "react-native-svg";
import { useState } from "react";

const HeartIcon = ({ color }) => (
  <Center>
    <Icon size={'md'} viewBox="0 0 24 24" strokeWidth={5} stroke="none" color={color} fill='none'>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </Icon>
  </Center>
)

const MessageIcon = ({ color }) => (
  <Center>
  <Icon size={'md'} viewBox="0 0 24 24" strokeWidth={5} stroke="none" color={color} fill='none'>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </Icon>
</Center>
)

const ReloadIcon = ({ color }) => (
  <Center>
  <Icon size={'md'} viewBox="0 0 24 24" strokeWidth='1.5' stroke='none' color={color} fill='none'>
    <Path clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" />
  </Icon>
</Center>
)

const navLinks = Array(4).fill('TEXT');

function App() {
  const [active, setActive] = useState(0);

  return (
    <Box
      bg={'#1c1c1c'}
      color={'white'}
      minHeight="100vh"
      alignItems={'center'}
      py={32}
    >
      <VStack space={8} maxW='500px' px={2}>
      <HStack shadow={'3'} mx={4} overflowX='auto'>
        {navLinks.map((link, i) => (
          <Box key={`${link}-${i}`} borderBottomColor={ active === i ? '#58d05e' : '#545454'} borderBottomWidth={2} px={5} py={3}>
            <Pressable onPress={() => setActive(i)}>
              <Text color={ active === i ? '#58d05e' : '#545454'}>{link}</Text>
            </Pressable>
        </Box>
        ))
        }
        </HStack>
      <VStack space={12} px={5}>
        <VStack space={4}>
        <Box>
          <HStack space={5} alignItems="center">
            <Avatar bg='#CCC'/>
            <VStack>
              <Text fontFamily={'arial'} fontWeight='semibold'>TEXT</Text>
              <Text fontFamily={'arial'} fontSize='10' color={'#CCC'}>TEXT</Text>
            </VStack>
          </HStack>
        </Box>
        <Box>
            <Text fontFamily={'arial'} fontSize='sm' color={'#CCC'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Box>
        <HStack space={2}>
          <Box display={'flex'} flexDirection='row' bg='#505050' p={1.5} borderRadius={'full'}>
              <HeartIcon color={'#58d05e'}/>
              <Text px={1} fontSize='12' color={'#58d05e'}>TE</Text>
          </Box>
          <Box display={'flex'} flexDirection='row' bg='#505050' p={1.5} borderRadius={'full'}>
              <MessageIcon color={'#FFF'}/>
              <Text px={1} fontSize='12'>TE</Text>
          </Box>
          <Box display={'flex'} flexDirection='row' alignItems={'center'} bg='#505050' p={1.5} borderRadius={'full'}>
              <ReloadIcon color={'#FFF'}/>
          </Box>
          </HStack>
        </VStack>

        <VStack space={4}>
        <Box>
          <HStack space={5} alignItems="center">
            <Avatar bg='#CCC'/>
            <VStack>
              <Text fontFamily={'arial'} fontWeight='semibold'>Generic Name</Text>
              <Text fontFamily={'arial'} fontSize='10' color={'#CCC'}>TEXT</Text>
            </VStack>
          </HStack>
        </Box>
        <Box>
            <Box bg={'#CCC'} w='full' h='64' display={'flex'} justifyContent='center' alignItems={'center'}>
              <Text color={'#A4A4A4'} fontSize='xl'>Visit Blogging.com Now</Text>
            </Box>
        </Box>
        <HStack space={2}>
          <Box display={'flex'} flexDirection='row' bg='#505050' p={1.5} borderRadius={'full'}>
              <HeartIcon color={'#58d05e'}/>
              <Text px={1} fontSize='12' color={'#bf3cb6'}>ASSD</Text>
          </Box>
          <Box display={'flex'} flexDirection='row' bg='#505050' p={1.5} borderRadius={'full'}>
              <MessageIcon color={'#FFF'}/>
              <Text px={1} fontSize='12'>SDF</Text>
          </Box>
          <Box display={'flex'} flexDirection='row' alignItems={'center'} bg='#505050' p={1.5} borderRadius={'full'}>
              <ReloadIcon color={'#FFF'}/>
          </Box>
          </HStack>
        </VStack>

        <VStack space={4}>
        <Box>
          <HStack space={5} alignItems="center">
            <Avatar bg='#CCC'/>
            <VStack>
              <Text fontFamily={'arial'} fontWeight='semibold'>TEXT</Text>
              <Text fontFamily={'arial'} fontSize='10' color={'#CCC'}>TEXT</Text>
            </VStack>
          </HStack>
        </Box>
        <Box>
            <Text fontFamily={'arial'} fontSize='sm' color={'#CCC'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Box>
        <HStack space={2}>
          <Box display={'flex'} flexDirection='row' bg='#505050' p={1.5} borderRadius={'full'}>
              <HeartIcon color={'#58d05e'}/>
              <Text px={1} fontSize='12' color={'#58d05e'}>TE</Text>
          </Box>
          <Box display={'flex'} flexDirection='row' bg='#505050' p={1.5} borderRadius={'full'}>
              <MessageIcon color={'#FFF'}/>
              <Text px={1} fontSize='12'>TE</Text>
          </Box>
          <Box display={'flex'} flexDirection='row' alignItems={'center'} bg='#505050' p={1.5} borderRadius={'full'}>
              <ReloadIcon color={'#FFF'}/>
          </Box>
          </HStack>
        </VStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default App;
