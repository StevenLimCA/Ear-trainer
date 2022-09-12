import React from "react";

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <main className="header__main">
        <img src="./logo.svg" alt="piano" className="header__logo" /> Web Piano
      </main>
    </div>
  );
}
