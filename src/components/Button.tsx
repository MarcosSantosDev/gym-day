import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";

type ButtonVariant = "solid" | "outline";

type NativeBaseButtonProps = Omit<IButtonProps, 'variant'>;

type ButtonProps = NativeBaseButtonProps & {
  title: string;
  variant?: ButtonVariant;
};

type ButtonStyleByVariants = Record<ButtonVariant, {
  color: ColorType;
  bg: ColorType;
  pressedBg: ColorType;
  borderWidth: number;
  borderColor: ColorType;
}>

const buttonVariant: ButtonStyleByVariants = {
  solid: {
    color: 'white',
    bg: 'green.700',
    pressedBg: 'green.500',
    borderWidth: 0,
    borderColor: 'green.500',
  },
  outline: {
    color: 'green.500',
    bg: 'transparent',
    pressedBg: 'gray.500',
    borderWidth: 1,
    borderColor: 'green.500',
  }
}

const Button = ({ title, variant = 'solid', ...restProps }: ButtonProps) => {
  const buttonStyleByVariant = buttonVariant[variant];
  return (
    <NativeBaseButton
      w="full"
      h={14}
      borderWidth={buttonStyleByVariant.borderWidth}
      borderColor={buttonStyleByVariant.borderColor}
      bg={buttonStyleByVariant.bg}
      _pressed={{
        bg: buttonStyleByVariant.pressedBg
      }}
      {...restProps}
    >
      <Text color={buttonStyleByVariant.color} fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </NativeBaseButton>
  );
};

export default Button;
