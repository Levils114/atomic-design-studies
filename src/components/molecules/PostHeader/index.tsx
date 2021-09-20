import React from 'react';
import { Image, Text, View } from 'react-native';
import { ProfileIcon } from '../../../global/styles/icons';

import { styles } from '../../../pages/Feed/styles';

export default function PostHeader(){
   return (
      <View style={styles.postHeader}>
         <Image source={ProfileIcon} style={styles.postAvatar} />
         <View>
            <Text style={styles.postUsername}>Rodrigo Gonçalves</Text>
            <Text style={styles.postLocation}>Somewhere</Text>
         </View>
      </View>
   );
}