import React from 'react';
import { Link } from 'react-router-dom';

export function Header({ isLoggedIn }) {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <img
        className="img-fluid"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"
        alt="Marvel Logo"
        style={{ maxWidth: '200px' }} />
      <div>
        {isLoggedIn ? (
          <>
            <Link to="/your-comics" className="btn btn-primary mx-2">Your Comics</Link>
            <Link to="/account" className="btn btn-secondary mx-2">Your Account</Link>
          </>
        ) : (
          <Link to="/createUser" className="btn btn-danger">Create User</Link>
        )}
      </div>
    </header>
  );
}
