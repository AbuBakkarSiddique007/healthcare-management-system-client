import React from 'react';

export default function DoctorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className='font-semibold text-2xl text-primary text-center border-2 border-green-500 m-3'>
        DOCTOR DASHBOARD LAYOUT
      </h2>
      {children}
    </>
  );
}
