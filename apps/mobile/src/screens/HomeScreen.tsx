import React from 'react';
import { SafeAreaView, ScrollView } from '../lib/nativewind';
import { View } from '@showcase/ui';
import { Text } from '@showcase/ui';
import { ThemeToggle } from '../components/ThemeToggle';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="p-4">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-2xl font-bold text-foreground">Welcome to ShowCase</Text>
          <ThemeToggle />
        </View>

        <Text className="text-base text-foreground/70 mb-6">
          Track, Earn, and Share your sports journey
        </Text>

        <View className="mb-6">
          <Text className="text-xl font-bold text-foreground mb-3" variant="label" weight="bold">
            Recent Activities
          </Text>
          <View className="bg-card rounded-lg p-4 shadow">
            <Text className="text-lg font-bold text-foreground mb-1" variant="body" weight="bold">
              No activities yet
            </Text>
            <Text className="text-foreground/70" variant="body" color="secondary">
              Start tracking your sports journey
            </Text>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-xl font-bold text-foreground mb-3" variant="label" weight="bold">
            Your Achievements
          </Text>
          <View className="bg-card rounded-lg p-4 shadow">
            <Text className="text-lg font-bold text-foreground mb-1" variant="body" weight="bold">
              No achievements yet
            </Text>
            <Text className="text-foreground/70" variant="body" color="secondary">
              Complete activities to earn achievements
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
