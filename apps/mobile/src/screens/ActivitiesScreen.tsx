import React from 'react';
import { SafeAreaView, FlatList } from '../lib/nativewind';
import { View, Text, Pressable } from '@showcase/ui';
import { ThemeToggle } from '../components/ThemeToggle';

// Define activity type
interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
}

// Mock data for activities
const mockActivities: Activity[] = [
  // Empty for now
];

export default function ActivitiesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="p-4 flex-row justify-between items-center">
        <View>
          <Text className="text-2xl font-bold text-foreground mb-2">Activities</Text>
          <Text className="text-base text-foreground/70">Track your sports journey</Text>
        </View>
        <ThemeToggle />
      </View>

      {mockActivities.length > 0 ? (
        <FlatList
          data={mockActivities}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            // Type assertion
            const activity = item as Activity;
            return (
              <View className="bg-card rounded-lg p-4 mb-3 mx-4 shadow">
                <Text className="text-lg font-bold text-foreground mb-1">{activity.title}</Text>
                <Text className="text-sm text-foreground/70 mb-2">{activity.date}</Text>
                <Text className="text-foreground/80">{activity.description}</Text>
              </View>
            );
          }}
          className="flex-1"
        />
      ) : (
        <View className="flex-1 justify-center items-center p-4">
          <Text className="text-xl font-bold text-foreground mb-2">No activities yet</Text>
          <Text className="text-base text-foreground/70 mb-6 text-center">
            Start tracking your sports activities
          </Text>
          <Pressable className="bg-primary px-6 py-3 rounded-lg">
            <Text className="text-primary-foreground font-bold text-base">Add Activity</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
