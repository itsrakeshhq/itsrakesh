export default function PreviewWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-10 rounded-md border justify-center items-center flex my-4">
      {children}
    </div>
  );
}
