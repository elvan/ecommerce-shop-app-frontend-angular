# E-Commerce Shop Angular

## Description

This project is a comprehensive e-commerce platform built with Angular, providing a full-fledged shopping experience with features such as product browsing, cart management, order processing, and an administrative dashboard for managing products and orders. The project aims to deliver a seamless and interactive user experience, leveraging modern web technologies and best practices in web development.

## Features

### **Admin Dashboard and Catalog Management**

- **Product Management**: Provides CRUD operations for managing products, including creation, updates, deletion, and stock management. The admin can easily navigate and manipulate the catalog through a user-friendly interface.
- **Order Management**: Admins can view, process, and manage customer orders, including issuing refunds and tracking order status. A dedicated dashboard is available for order overview and detailed management.
- **Stock Updates**: Allows real-time updates to product quantities, ensuring accurate stock levels are maintained.

### **Modular Route Management**

- **Lazy-Loaded Feature Modules**: The project utilizes lazy-loading for route management, splitting the application into feature modules such as account, checkout, and orders. This enhances performance by loading only the necessary modules.
- **Dynamic Component Loading**: Admin routes and other features are loaded dynamically to improve the application's responsiveness and scalability.

### **Checkout and Payment Integration**

- **Stripe Payment Gateway**: Implements Stripe for secure payment processing, including token creation, payment confirmation, and error handling.
- **Order Creation and Confirmation**: Automatically creates orders upon successful payment, with support for order tracking and detailed summaries.

### **Coupon and Discount Functionality**

- **Coupon Application**: Users can apply discount codes during checkout, which are validated and reflected in the order summary.
- **Dynamic Pricing**: The system calculates discounts and updates the order total based on the applied coupon, enhancing the shopping experience.

### **Real-Time Order and Notification Management**

- **SignalR Integration**: Real-time notifications for order status updates and notifications. This ensures users and admins receive live updates on order progress and other critical events.

### **Comprehensive Cart and Checkout System**

- **Cart Management**: Full-featured cart system with add, update, and remove item functionality. Integrates with local storage to persist cart data between sessions.
- **Checkout Flow**: Guided checkout process with address, delivery, and payment steps, ensuring a smooth user experience from cart to order completion.

### **User Authentication and Route Protection**

- **User Authentication**: Secure login and registration with route protection to ensure that only authenticated users can access certain pages.
- **Role-Based Access Control**: Admins have access to specialized features and routes, protected by custom guards and directives.

### **Enhanced UI and UX**

- **Loading and Empty States**: Improved user experience with dynamic loading indicators and empty state components that provide helpful prompts and actions.
- **Responsive Design**: Utilizes TailwindCSS and Angular Material to create a responsive and visually appealing interface across all devices.

#### Technology Stack

- **Frontend**: Angular, Angular Material, TailwindCSS
- **Backend**: ASP.NET Core (for API integration)
- **Payment**: Stripe API
- **Real-Time Communication**: SignalR
- **State Management**: RxJS
- **Other Tools**: TypeScript, RxJS, Angular CLI

## Installation

### Prerequisites

- **Node.js** (v14 or higher) and **npm**
- **Angular CLI** (v12 or higher)
- **Git**
- **ASP.NET Core** (for backend API)
- **Stripe Account** (for payment integration)

### Environment Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/elvan/ecommerce-shop-app-frontend-angular.git
   cd ecommerce-shop-app-frontend-angular
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**
   Create an `.env` file in the root directory with the following contents:

   ```bash
   STRIPE_PUBLIC_KEY=your_stripe_public_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   API_URL=http://localhost:5000/api
   ```

4. **Start the development server:**

   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200`.

5. **Start the backend server:**

   Follow the instructions in the backend repository to start the API server.

## Usage

1. **Admin Dashboard:**

   - Navigate to `http://localhost:4200/admin` to access the admin dashboard. You must be logged in as an admin to access this section.
   - Use the dashboard to manage products, update stock, and handle orders.

2. **Product Browsing and Cart Management:**

   - Browse products on the shop page, add items to the cart, and proceed to checkout when ready.
   - Apply coupon codes during checkout to receive discounts on your order.

3. **Order Tracking and Notifications:**

   - After completing an order, use the order history page to track your orders and receive real-time updates via notifications.

4. **User Authentication:**

   - Register or log in to manage your account, view order history, and save items to your cart.

This project is structured to provide a robust foundation for an e-commerce application, and can be extended further with additional features and customizations as needed.
