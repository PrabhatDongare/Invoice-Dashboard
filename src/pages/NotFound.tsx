import React from 'react';

// 404 Not Found page
// Displays when the user navigates to a non-existent route
const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="mb-8 text-2xl">Page Not Found</p>

        {/* Link to navigate back to the homepage */}
        <a
          href="/"
          className="inline-block rounded-md border border-[#5A5A5A] px-6 py-3 font-semibold transition-colors duration-200 hover:border-black hover:bg-black hover:text-white"
        >
          Go back to Dashboard
        </a>
      </div>
    </div>
  );
};

export default NotFound;
