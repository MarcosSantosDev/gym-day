import { Center, Heading, Image, ScrollView, Text, View, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { AuthNavigatorRoutesProps } from '@/routes/auth.routes';
import LogoSVG from '@/assets/logo.svg';
import BackgroundImg from '@/assets/background.png';
import Input from '@/components/Input';
import Button from '@/components/Button';

const SignUp = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  }
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack  flex={1}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt='Pessoas malhando na academia'
          resizeMode='contain'
          position="absolute"
        />
        <Center my={24}>
          <LogoSVG />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontFamily="heading" fontSize="xl" mb={6}>
            Crie sua conta
          </Heading>
        </Center>

        <Center px={10}>
          <Input placeholder='Nome' />
          <View mb={4} />
          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <View mb={4} />
          <Input
            placeholder='Senha'
            secureTextEntry
          />
          <View mb={4} />
          <Input
            placeholder='Confirme a Senha'
            secureTextEntry
          />
          <View mb={8} />
          <Button title="Criar e acessar" />
        </Center>
        <Center flex={1} justifyContent="flex-end" mt={24} px={10}>
          <Button title="Voltar para o login" variant="outline" onPress={navigateToSignIn} />
        </Center>
        <View mb={16} />
      </VStack>
    </ScrollView>
  );
};

export default SignUp;