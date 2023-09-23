import { flushSync } from "react-dom";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";

export default function Layout() {
  const data = useLoaderData();
  return (
    <>
      <div className="w-screen min-h-screen pb-12 bg-gradient-to-b from-white to-sky-200 dark:bg-sky-900">
        <header>
          <nav className="flex flex justify-center gap-12 items-center bg-slate-100 py-2">
            <Link className="nav-button" to="/">
              Home
            </Link>
            <Link className="nav-button" to="/cat">
              Cat
            </Link>
          </nav>
        </header>
        <main className="flex flex-col items-center min-h-screen md:mt-20 md:mb-40">
          <Outlet context={data} />
        </main>
      </div>
    </>
  );
}

export const Loader = async () => {
  const response = await fetch("https://cataas.com/cat?json=true");
  const data = await response.json();
  const url = `https://cataas.com/${data.url}`;
  return { url };
};
