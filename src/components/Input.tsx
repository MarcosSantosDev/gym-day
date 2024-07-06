import { Input as NativeBaseInput, IInputProps } from "native-base";

type InputProps = IInputProps;

const Input = ({ ...restProps }: InputProps) => {
  return (
    <NativeBaseInput
      h={14}
      px={4}
      borderWidth={0}
      bg="gray.700"
      color="white"
      fontSize="md"
      fontFamily="body"
      placeholderTextColor="gray.300"
      _focus={{
        bg: 'gray.700',
        borderWidth: 1,
        borderColor: 'green.500'
      }}
      {...restProps}
    />
  );
};

export default Input;
