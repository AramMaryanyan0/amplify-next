import { msalInstance } from '../authConfig';
import { MsalProvider, useIsAuthenticated, useMsal } from '@azure/msal-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const SignInButton = () => {
  const { instance } = useMsal();
  return <button onClick={() => instance.loginRedirect()}>Sign In</button>;
};

const SignOutButton = () => {
  const { instance } = useMsal();
  return <button onClick={() => instance.logoutRedirect()}>Sign Out</button>;
};

function MyApp({ Component, pageProps }) {
  const isAuthenticated = useIsAuthenticated();

  return (
      <MsalProvider instance={msalInstance}>
        <div>
          <nav className="p-6 border-b border-gray-300">
            <Link href="/">
              <span className="mr-6 cursor-pointer">Home</span>
            </Link>
            <Link href="/create-post">
              <span className="mr-6 cursor-pointer">Create Post</span>
            </Link>
            <Link href="/profile">
              <span className="mr-6 cursor-pointer">Profile</span>
            </Link>
            {isAuthenticated && (
                <Link href="/my-posts">
                  <span className="mr-6 cursor-pointer">My Posts</span>
                </Link>
            )}
            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
          </nav>
          <div className="py-8 px-16">
            <Component {...pageProps} />
          </div>
        </div>
      </MsalProvider>
  );
}

export default MyApp;
