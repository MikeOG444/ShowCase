import { useState } from 'react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  date: string;
}

interface UserProfile {
  name: string;
  username: string;
  avatar: string;
  sports: string[];
  teams: string[];
  bio: string;
  stats: {
    activitiesLogged: number;
    verifiedActivities: number;
    streakDays: number;
    achievements: number;
  };
  achievements: Achievement[];
}

const mockProfile: UserProfile = {
  name: 'Alex Johnson',
  username: 'alexj12',
  avatar: '/placeholder-avatar.png',
  sports: ['Hockey', 'Soccer'],
  teams: ['Westside Warriors', 'City United'],
  bio: 'Forward | #12 | 15 years old | 5 years playing experience',
  stats: {
    activitiesLogged: 87,
    verifiedActivities: 64,
    streakDays: 12,
    achievements: 15,
  },
  achievements: [
    {
      id: 1,
      title: 'Practice Pro',
      description: 'Logged 50 practices',
      icon: '🏆',
      date: '2025-04-15',
    },
    {
      id: 2,
      title: 'Game Day Hero',
      description: 'Logged 25 games',
      icon: '🏅',
      date: '2025-03-22',
    },
    {
      id: 3,
      title: 'Consistency King',
      description: 'Maintained a 10-day activity streak',
      icon: '🔥',
      date: '2025-05-01',
    },
  ],
};

const Profile = () => {
  const [profile] = useState<UserProfile>(mockProfile);

  return (
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Profile</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex items-center">
                <div className="h-20 w-20 rounded-full bg-primary-200 flex items-center justify-center text-primary-600 text-4xl font-bold mr-4">
                  {profile.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl leading-6 font-medium text-gray-900">{profile.name}</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">@{profile.username}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.sports.map((sport, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                      >
                        {sport}
                      </span>
                    ))}
                    {profile.teams.map((team, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800"
                      >
                        {team}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="ml-auto">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div className="text-sm text-gray-700">{profile.bio}</div>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <div className="text-center">
                      <dt className="text-sm font-medium text-gray-500">Activities</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">{profile.stats.activitiesLogged}</dd>
                    </div>
                    <div className="text-center mt-4 sm:mt-0">
                      <dt className="text-sm font-medium text-gray-500">Verified</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">{profile.stats.verifiedActivities}</dd>
                    </div>
                    <div className="text-center mt-4 sm:mt-0">
                      <dt className="text-sm font-medium text-gray-500">Streak</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">{profile.stats.streakDays} days</dd>
                    </div>
                    <div className="text-center mt-4 sm:mt-0">
                      <dt className="text-sm font-medium text-gray-500">Achievements</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">{profile.stats.achievements}</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievements</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {profile.achievements.map((achievement) => (
                  <div key={achievement.id} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-primary-100 rounded-md p-3 text-2xl">
                          {achievement.icon}
                        </div>
                        <div className="ml-5">
                          <h3 className="text-lg font-medium text-gray-900">{achievement.title}</h3>
                          <p className="mt-1 text-sm text-gray-500">{achievement.description}</p>
                          <p className="mt-1 text-xs text-gray-400">
                            Earned on {new Date(achievement.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  View All Achievements
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
