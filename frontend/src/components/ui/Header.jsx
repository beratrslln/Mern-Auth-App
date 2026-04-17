import React from "react";

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm bg-neutral-900">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold" href="/home">beraT</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="font-bold" href="/login">giriş yap</a>
          </li>
          <li>
            <a className="font-bold" href="/register">kaydol</a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Header;
