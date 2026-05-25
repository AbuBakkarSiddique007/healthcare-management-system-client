import React from 'react';

export default function PatientRouteGroupDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className='font-semibold text-2xl text-primary text-center border-2 border-blue-500 m-3'>
        PATIENT ROUTE GROUP LAYOUT
      </h2>
      {children}
    </>
  );
}
