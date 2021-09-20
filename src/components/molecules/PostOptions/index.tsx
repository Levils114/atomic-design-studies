import React from 'react';
import { View } from 'react-native';
import { CommentIcon, FavoriteIcon, MessengerIcon, SaveIcon } from '../../../global/styles/icons';

import { styles } from '../../../pages/Feed/styles';
import ButtonIcon from '../../atoms/ButtonIcon';

export default function PostOptions(){
   return (
      <View style={styles.postOptions}>
         <View style={styles.postOptionsSide}>
            <ButtonIcon 
               icon={() => (<FavoriteIcon style={styles.postOptionsIcon}/>)}
            />
            <ButtonIcon 
               icon={() => (<CommentIcon style={styles.postOptionsIcon}/>)}
            />
            <ButtonIcon 
               icon={() => (<MessengerIcon style={styles.postOptionsIcon}/>)}
            />
         </View>

         <ButtonIcon 
            icon={() => (<SaveIcon />)}
         />
      </View>
   );
}