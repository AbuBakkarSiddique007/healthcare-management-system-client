import React from 'react';

export default function CommonProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className='font-semibold text-2xl text-primary text-center border-2 border-yellow-500 m-3'>
        COMMON PROTECTED LAYOUT
      </h2>
      {children}
    </>
  );
}
