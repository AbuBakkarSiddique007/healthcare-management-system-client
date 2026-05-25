import React from 'react';

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2 className='font-semibold text-2xl text-primary text-center border-2 border-red-500 m-3'>
        ADMIN DASHBOARD LAYOUT
      </h2>
      {children}
    </>
  );
}
