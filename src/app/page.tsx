import Link from "next/link";

export default function Home() {
  return (
    <>
        <Link href="/auth/login">
            Login
        </Link>
      <Link href="/app/profile">
        Profile
      </Link>
    </>
  );
}
