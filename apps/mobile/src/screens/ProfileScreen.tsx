import React from 'react';
import { SafeAreaView, ScrollView } from '../lib/nativewind';
import { View, Text, Pressable } from '@showcase/ui';
import { ThemeToggle } from '../components/ThemeToggle';

// Mock user data
const mockUser = {
  name: 'Alex Johnson',
  username: '@alexj',
  sport: 'Hockey',
  position: 'Forward',
  team: 'Wildcats',
  achievements: 0,
  activities: 0,
  followers: 0,
  following: 0,
};

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="p-4">
        <View className="flex-row justify-between items-start mb-4">
          <View>
            <Text>{'\u00A0'}</Text>
          </View>
          <ThemeToggle />
        </View>

        <View className="items-center mb-6">
          <View className="mb-4">
            <View className="w-24 h-24 rounded-full bg-primary justify-center items-center">
              <Text className="text-3xl font-bold text-primary-foreground">
                {mockUser.name
                  .split(' ')
                  .map(name => name[0])
                  .join('')}
              </Text>
            </View>
          </View>

          <Text className="text-2xl font-bold text-foreground mb-1">{mockUser.name}</Text>
          <Text className="text-base text-foreground/70 mb-3">{mockUser.username}</Text>

          <View className="flex-row items-center mb-4">
            <Text className="text-sm text-foreground">{mockUser.sport}</Text>
            <Text className="mx-1.5 text-foreground/50">•</Text>
            <Text className="text-sm text-foreground">{mockUser.position}</Text>
            <Text className="mx-1.5 text-foreground/50">•</Text>
            <Text className="text-sm text-foreground">{mockUser.team}</Text>
          </View>

          <View className="flex-row justify-around w-full mb-4">
            <View className="items-center">
              <Text className="text-lg font-bold text-foreground">{mockUser.achievements}</Text>
              <Text className="text-xs text-foreground/70">Achievements</Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-bold text-foreground">{mockUser.activities}</Text>
              <Text className="text-xs text-foreground/70">Activities</Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-bold text-foreground">{mockUser.followers}</Text>
              <Text className="text-xs text-foreground/70">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-bold text-foreground">{mockUser.following}</Text>
              <Text className="text-xs text-foreground/70">Following</Text>
            </View>
          </View>

          <Pressable className="border border-primary rounded-lg px-4 py-2">
            <Text className="text-primary font-bold">Edit Profile</Text>
          </Pressable>
        </View>

        <View className="mb-6">
          <Text className="text-xl font-bold text-foreground mb-3">Your ShowCase</Text>
          <View className="bg-card rounded-lg p-6 items-center shadow">
            <Text className="text-lg font-bold text-foreground mb-2">No achievements yet</Text>
            <Text className="text-sm text-foreground/70 text-center">
              Complete activities to earn badges, streaks, and trophies
            </Text>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-xl font-bold text-foreground mb-3">Recent Activities</Text>
          <View className="bg-card rounded-lg p-6 items-center shadow">
            <Text className="text-lg font-bold text-foreground mb-2">No activities yet</Text>
            <Text className="text-sm text-foreground/70 text-center mb-4">
              Start tracking your sports journey
            </Text>
            <Pressable className="bg-primary px-6 py-3 rounded-lg">
              <Text className="text-primary-foreground text-base font-bold">Add Activity</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
