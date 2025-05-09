import AppLink from '@components/ui/AppLink';

const Home = () => {
  return (
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-text-primary">ShowCase</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-border rounded-lg p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Track It. Earn It. Share It.</h2>
                <p className="text-lg text-text-secondary mb-8">
                  ShowCase helps youth athletes track their activities, earn achievements, and share
                  their sports journey.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <AppLink to="/activities" className="btn-primary">
                    Log an Activity
                  </AppLink>
                  <AppLink to="/profile" className="btn-secondary">
                    View Your Profile
                  </AppLink>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-card overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-primary/20 rounded-md p-3">
                        <svg
                          className="h-6 w-6 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-text-primary">
                          Track Your Activities
                        </h3>
                        <p className="mt-2 text-sm text-text-secondary">
                          Log games, practices, skills sessions, and tournaments with flexible,
                          intuitive forms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-success/20 rounded-md p-3">
                        <svg
                          className="h-6 w-6 text-success"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-text-primary">Earn Achievements</h3>
                        <p className="mt-2 text-sm text-text-secondary">
                          Unlock badges, build streaks, hit goals, and earn trophies as you progress
                          in your athletic journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-secondary/20 rounded-md p-3">
                        <svg
                          className="h-6 w-6 text-secondary"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-text-primary">
                          Share Your Journey
                        </h3>
                        <p className="mt-2 text-sm text-text-secondary">
                          Connect with your community, showcase your achievements, and share your
                          sports journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
