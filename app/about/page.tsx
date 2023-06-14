export const metadata = {
  title: "About | NextHub",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-center mt-5 font-bold text-2xl">About</h1>
      <p className="text-center mt-5">
        NextHub is a dev.to inspired blog built with Next.js, firebase and
        tailwindcss.
      </p>

      <h1 className="text-center mt-5 font-bold text-2xl">Features</h1>
      <ul className="list-disc list-inside">
        <li>Authentication with Google</li>
        <li>Authentication with Github</li>
        <li>Authentication with Email and Password</li>
        <li>Dark mode</li>
        <li>Create posts</li>
        <li>Rich Text Support</li>
      </ul>

      <p className="text-center mt-5">
        <a
          href="https://github.com/ACosmicWolf/nexthub"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          View on GitHub
        </a>
      </p>
    </div>
  );
}
