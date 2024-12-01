import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-500/20">
      <div className="container flex flex-col gap-8 px-4 py-10 md:flex-row md:py-14">
        <div className="flex flex-col gap-2 min-w-[240px] lg:min-w-[400px] md:pl-4">
          <h3 className="text-lg font-semibold flex items-center mb-2">
            <img
              className="w-[40px] mr-3"
              src="/images/elixir-ui-transparent-svg.svg"
              alt="Not Found"
            />
            Elixir UI
          </h3>
          <p className="text-sm text-muted-foreground">
            Modern components, super fast shipment
          </p>
          <div className="flex items-center gap-2 pt-2">
            <Link
              href="https://github.com"
              className="inline-flex items-center justify-center rounded-md w-9 h-9 bg-background hover:bg-muted"
            >
              <IconBrandGithub className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              href="https://x.com"
              className="inline-flex items-center justify-center rounded-md w-9 h-9 bg-background hover:bg-muted"
            >
              <IconBrandX className="w-4 h-4" />
              <span className="sr-only">X</span>
            </Link>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold">Documentation</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Components
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Themes
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold">Community</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Contributors
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  Style Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Releases
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  License
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
