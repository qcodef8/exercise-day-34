import { NavLink } from "react-router";

import styles from "./Navigation.module.css";

function Navigation() {
    const navItems = [
        { path: "/", label: "Home" },
        { path: "/counter-app", label: "Counter App" },
        { path: "/todo-list-app", label: "Todo List" },
        { path: "/profile-card", label: "Profile Card" },
        { path: "/product-list", label: "Products" },
        { path: "/comment-system", label: "Comments" },
        { path: "/weather-app", label: "Weather" },
    ];

    const className = ({ isActive }) =>
        `${styles.navButton} ${isActive ? styles.active : ""}`;

    return (
        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                <div className={styles.navLinks}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={className}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
