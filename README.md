# 💤 Fillflow Frontend – SleepyOwl  

A modern **Next.js + React** based frontend application for managing **operations, storage, production, inventory, B2B orders, and reports** at SleepyOwl.  
This dashboard provides a complete view of business workflows including procurement, replenishment, reporting, and admin management.  

---

## 🚀 Tech Stack  

- **Next.js 14** – React Framework for server-side rendering & routing  
- **React 18** – Component-based UI library  
- **TailwindCSS** – Styling & responsive UI  
- **Redux Toolkit + Redux Persist** – State management  
- **Axios** – API calls  
- **MUI (Material UI)** – Prebuilt UI components  
- **Day.js / Moment.js** – Date & time handling  
- **Formik + Yup** – Forms & validation  
- **React-Toastify** – Notifications  
- **JS PDF & HTML2Canvas** – PDF & report exports  
- **React Icons / Lucide React** – Icons  

---

## ✨ Features  

- 📦 **Storage Management** – Track SKUs, stock levels, raw materials, finished goods  
- 🏭 **Production** – Manage production-level workflows  
- 📊 **Inventory** – Monitor current stock, under-stock, over-stock levels  
- 🔄 **Replenishment Team** – Handle procurement and reordering  
- 📑 **Master Data** – Manage SKUs, suppliers, and base product data  
- 📈 **Reports** – Generate invoices, party ledgers, credit notes, and more  
- 🛒 **B2B Orders** – Create, approve, dispatch, and track business-to-business orders  
- ⚙️ **Admin Settings** – Role management (SA / Super Admin)  

---

## 📂 Project Structure  
fillflow-frontend-sleepyowl/
│── public/ # Static assets
│── src/
│ ├── app/
│ │ ├── Actions/ # Action handlers
│ │ ├── admin/ # Admin settings
│ │ ├── assembly/ # Assembly workflows
│ │ ├── b2b/ # B2B Orders module
│ │ ├── components/ # Reusable React components
│ │ ├── constants/ # App constants
│ │ ├── dispatch/ # Dispatch management
│ │ ├── engraving/ # Engraving workflows
│ │ ├── inventory/ # Inventory management
│ │ ├── login/ # Auth/login page
│ │ ├── master/ # Master data
│ │ ├── new/ # New features
│ │ ├── procurement/ # Procurement workflows
│ │ ├── production/ # Production flows
│ │ ├── Reducers/ # Redux reducers
│ │ ├── report/ # Report management
│ │ ├── reports/ # Report pages
│ │ ├── rto/ # Return to Origin handling
│ │ ├── services/ # API services
│ │ ├── storage/ # Storage module
│ │ ├── utils/ # Helper functions
│ │ ├── Providers.js # Redux + Context providers
│ │ ├── store.js # Redux store config
│ │ ├── layout.js # Global layout
│ │ ├── page.js # Root page ("/")
│ │ └── globals.css # Global styles
│── package.json
│── tailwind.config.js
│── next.config.mjs



---

## ⚡️ Getting Started  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/fillfow/fillflow-frontend-sleepyowl.git
cd fillflow-frontend-sleepyowl
npm install
npm run dev
``` 


##4️⃣ Open in browser

Visit: http://localhost:3000

