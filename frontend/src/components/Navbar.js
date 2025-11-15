/* NAVBAR FULL REPAIR – Modern Dark UI */

.navbar {
  width: 100%;
  background: #0f0f11;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1e1e22;
  position: sticky;
  top: 0;
  z-index: 999;
}

.nav-left {
  font-size: 22px;
  font-weight: 600;
}

.nav-left a {
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: #bfc1c8;
  font-size: 15px;
  text-decoration: none;
  transition: 0.2s ease;
}

.nav-links a:hover {
  color: white;
}

.theme-toggle {
  background: #4d6fff;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s ease;
}

.theme-toggle:hover {
  background: #3c55cc;
}
