
export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 text-2xl md:text-3xl lg:text-4xl">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Film Horizon. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

