export default function AdminLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background-alt">
      {children}
    </div>
  );
}
