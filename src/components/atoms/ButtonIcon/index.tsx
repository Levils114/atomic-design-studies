import React from 'react';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

interface ButtonIconProps extends BorderlessButtonProps{
   icon: React.FC<SvgProps>;
}

export default function ButtonIcon({ icon: Icon, ...rest }: ButtonIconProps){
   return(
      <BorderlessButton {...rest}>
         <Icon />
      </BorderlessButton>
   );
}