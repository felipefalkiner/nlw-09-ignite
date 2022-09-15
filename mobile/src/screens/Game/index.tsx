import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { View, TouchableOpacity, Image } from 'react-native'
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';

export function Game() {

  const route = useRoute();
  const game = route.params as GameParams;
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image 
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>

        <Heading
          title={game.title}
          subtitle={"Conecte-se e comece a jogar!"}
        />

      </SafeAreaView>
    </Background>
  );
}