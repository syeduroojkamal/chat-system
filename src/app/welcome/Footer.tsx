import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card py-6 text-center text-muted-foreground text-sm w-full border-t mt-12">
      <div>
        <p>
          Made with ❤️ by Syed Urooj Kamal. This project is a skills showcase.{" "}
        </p>
        <p>
          Visit my{" "}
          <Link
            href="https://www.syeduroojkamal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary"
          >
            personal portfolio
          </Link>{" "}
          for more projects, my resume, and more about me.
        </p>
        <div className="mt-2">
          &copy; {new Date().getFullYear()} Syed Urooj Kamal. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
