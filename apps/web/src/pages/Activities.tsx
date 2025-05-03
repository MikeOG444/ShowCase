import { useState } from 'react';

interface Activity {
  id: number;
  title: string;
  type: string;
  location: string;
  date: string;
  duration: number;
  isVerified: boolean;
}

const mockActivities: Activity[] = [
  {
    id: 1,
    title: 'Hockey Practice',
    type: 'practice',
    location: 'Ice Palace Arena',
    date: '2025-05-01T18:00:00',
    duration: 90,
    isVerified: true,
  },
  {
    id: 2,
    title: 'Team Scrimmage',
    type: 'game',
    location: 'Ice Palace Arena',
    date: '2025-04-28T19:30:00',
    duration: 60,
    isVerified: true,
  },
  {
    id: 3,
    title: 'Skills Training',
    type: 'training',
    location: 'Home',
    date: '2025-04-25T16:00:00',
    duration: 45,
    isVerified: false,
  },
];

const ActivityCard = ({ activity }: { activity: Activity }) => {
  const date = new Date(activity.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">{activity.title}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{activity.type}</p>
          </div>
          {activity.isVerified && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
              </svg>
              Verified
            </span>
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {activity.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {formattedDate} at {formattedTime} ({activity.duration} min)
          </div>
        </div>
      </div>
    </div>
  );
};

const Activities = () => {
  const [activities] = useState<Activity[]>(mockActivities);

  return (
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Activities</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Log New Activity
              </button>
            </div>
            <div className="space-y-4">
              {activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Activities;
