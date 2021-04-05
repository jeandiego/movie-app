import { useNavigation } from '@react-navigation/native';

export function goToDetail(movie) {
  const navigation = useNavigation();
  navigation.navigate('Preview', { movie });
}
