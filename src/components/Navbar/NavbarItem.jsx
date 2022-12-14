import React from "react";
import { Link } from "react-router-dom";

export default function NavBarItem({ to, text, className }) {
  return (
    <li className={className}>
      <Link to={to} >{text}</Link>
    </li>
  );
}
