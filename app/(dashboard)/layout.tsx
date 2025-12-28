export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Future: Dashboard Sidebar/Navigation */}
      <div className="flex">
        {/* Sidebar will go here */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
