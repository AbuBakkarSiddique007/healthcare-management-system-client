export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2 className='font-semibold text-2xl text-primary text-center border-2 border-red-500 m-3'>
        COMMON LAYOUT
      </h2>
      {children}
    </>
  );
}
