
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-50">
      <head>
        <title>Page not found </title>
      </head>
      <div className="px-4 py-8 bg-background-200 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-secondary-500 mb-4">
          404 - Not Found
        </h1>
        <p className="text-text-600 text-lg">
          The page you are looking for does not exist.
        </p>
        <p className="mt-4 text-accent-500">
          You may have mistyped the address or the page may have been removed.
        </p>
        {/* Optionally add a link back to the home page */}
        {/* <Link to="/" className="text-blue-500 hover:underline mt-4 block">
          Go back to the homepage
        </Link> */}
      </div>
    </div>
  );
};

export default NotFound;
