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
          <h1 className="text-3xl font-bold leading-tight text-text-primary">Profile</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="bg-card shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex items-center">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-4xl font-bold mr-4">
                  {profile.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl leading-6 font-medium text-text-primary">
                    {profile.name}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-text-secondary">@{profile.username}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.sports.map((sport, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary"
                      >
                        {sport}
                      </span>
                    ))}
                    {profile.teams.map((team, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/20 text-secondary"
                      >
                        {team}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="ml-auto">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-border rounded-md shadow-sm text-sm font-medium text-card-foreground bg-card hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="border-t border-border px-4 py-5 sm:px-6">
                <div className="text-sm text-text-secondary">{profile.bio}</div>
              </div>
              <div className="border-t border-border">
                <dl>
                  <div className="bg-muted px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <div className="text-center">
                      <dt className="text-sm font-medium text-text-secondary">Activities</dt>
                      <dd className="mt-1 text-3xl font-semibold text-text-primary">
                        {profile.stats.activitiesLogged}
                      </dd>
                    </div>
                    <div className="text-center mt-4 sm:mt-0">
                      <dt className="text-sm font-medium text-text-secondary">Verified</dt>
                      <dd className="mt-1 text-3xl font-semibold text-text-primary">
                        {profile.stats.verifiedActivities}
                      </dd>
                    </div>
                    <div className="text-center mt-4 sm:mt-0">
                      <dt className="text-sm font-medium text-text-secondary">Streak</dt>
                      <dd className="mt-1 text-3xl font-semibold text-text-primary">
                        {profile.stats.streakDays} days
                      </dd>
                    </div>
                    <div className="text-center mt-4 sm:mt-0">
                      <dt className="text-sm font-medium text-text-secondary">Achievements</dt>
                      <dd className="mt-1 text-3xl font-semibold text-text-primary">
                        {profile.stats.achievements}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-text-primary mb-4">Recent Achievements</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {profile.achievements.map(achievement => (
                  <div key={achievement.id} className="bg-card overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-primary/20 rounded-md p-3 text-2xl">
                          {achievement.icon}
                        </div>
                        <div className="ml-5">
                          <h3 className="text-lg font-medium text-text-primary">
                            {achievement.title}
                          </h3>
                          <p className="mt-1 text-sm text-text-secondary">
                            {achievement.description}
                          </p>
                          <p className="mt-1 text-xs text-text-tertiary">
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
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
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
