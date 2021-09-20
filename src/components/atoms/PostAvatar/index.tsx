import React from 'react';
import { Image } from 'react-native';
import { ProfileIcon } from '../../../global/styles/icons';

import { styles } from '../../../pages/Feed/styles';

export default function PostAvatar(){
   return (
      <Image source={ProfileIcon} style={styles.postAvatar} />
   );
}