export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center">
          The Briefly
        </h1>
        <p className="text-xl text-center text-muted-foreground">
          Digital Assembly Line for Creative Services
        </p>
        <div className="grid-pattern w-full h-32 rounded-lg border" />
      </div>
    </main>
  );
}
