import { NavLink } from "react-router";

import styles from "./Navigation.module.css";

function Navigation() {
    const navItems = [
        { path: "/exercise-day-34", label: "Home" },
        { path: "/exercise-day-34/counter-app", label: "Counter App" },
        { path: "/exercise-day-34/todo-list-app", label: "Todo List" },
        { path: "/exercise-day-34/profile-card", label: "Profile Card" },
        { path: "/exercise-day-34/product-list", label: "Products" },
        { path: "/exercise-day-34/comment-system", label: "Comments" },
        { path: "/exercise-day-34/weather-app", label: "Weather" },
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
