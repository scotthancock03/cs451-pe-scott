import { Slot } from 'expo-router';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaView 
      style={{ flex: 1, backgroundColor: '#000' }} 
      edges={Platform.OS === 'web' ? [] : ['top', 'bottom']}
    >
      <Slot />
    </SafeAreaView>
  );
}