import Link from "next/link";

const GithubIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-4 5 5 0 0 0-.2-4s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5 5 0 0 0-.2 4 A5.5 5.5 0 0 0 3.3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);

const TwitterIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const LinkedinIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Footer() {
  return (
    <footer className="py-8 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 mt-20">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Kalil. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/kalildev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </Link>
          <Link
            href="https://twitter.com/kalildev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-blue-500 transition-colors"
            aria-label="Twitter"
          >
            <TwitterIcon size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/kalildev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
