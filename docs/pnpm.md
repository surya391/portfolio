# 🧩 Why Switch from npm to pnpm

## 📘 Overview

This project migrated from **npm** to **pnpm** to achieve faster installs, reduced disk usage, and more reliable dependency management. pnpm is a modern package manager that uses content-addressable storage and links dependencies efficiently instead of duplicating them for every project.

---

## ⚡ 1. Faster Installations

pnpm installs dependencies significantly faster than npm by using a global package store shared between all projects.

**Benefits:**
- Up to 3× faster installation times  
- Reuses cached dependencies  
- Less waiting time during setup and CI

---

## 💾 2. Reduced Disk Space Usage

npm duplicates all dependencies inside every project’s `node_modules`.  
pnpm instead creates hard links from a global store.

**Benefits:**
- Saves multiple gigabytes of disk space  
- Cleaner and faster local environments  
- Efficient package sharing across projects

---

## 🔒 3. Deterministic Installs

pnpm uses a strict and deterministic lockfile (`pnpm-lock.yaml`) that guarantees consistent dependency trees across all environments.

**Benefits:**
- Reproducible builds  
- Fewer dependency conflicts  
- Stable CI/CD runs

---

## 🧠 4. Strict Dependency Resolution

npm sometimes allows “phantom dependencies” (undeclared packages).  
pnpm prevents this by enforcing strict dependency isolation.

**Benefits:**
- Prevents undeclared dependency usage  
- Keeps `package.json` clean and accurate  
- Reduces runtime errors

---

## 🧱 5. Monorepo and Workspace Support

pnpm has first-class support for workspaces and monorepos.  
It can manage multiple related packages efficiently under one repository.

**Benefits:**
- Native workspace linking  
- Shared caching  
- Simplified dependency management

---

## 🔄 6. CI/CD Optimization

pnpm’s caching and deterministic structure make builds faster and more reliable in CI pipelines.

**Benefits:**
- Shorter pipeline times  
- Efficient dependency caching  
- Reduced bandwidth usage

---

## 🔐 7. Security and Stability

pnpm’s linking system makes dependency tampering harder and dependency trees more predictable.

**Benefits:**
- Safer dependency graph  
- Fewer version mismatches  
- Stronger integrity checks

---

## ⚙️ 8. Easy Migration

pnpm is fully compatible with npm scripts and requires minimal setup.

**Steps:**
```bash
# 1. Install pnpm globally
npm install -g pnpm

# 2. Remove old lock and modules
rm -rf node_modules package-lock.json

# 3. Install with pnpm
pnpm install

# 4. Run your app
pnpm dev

## 🚀 Results After Migration

| **Feature**              | **npm**     | **pnpm**             |
|---------------------------|-------------|-----------------------|
| Install speed             | 🐢 Slow     | ⚡ **Fast**           |
| Disk usage                | 📦 High     | 🧩 **Low**            |
| Lockfile consistency      | ⚠️ Partial  | ✅ **Deterministic**  |
| Monorepo support          | ⚙️ Limited  | ✅ **Excellent**      |
| Dependency integrity      | 🔸 Moderate | 🔒 **Strong**         |
