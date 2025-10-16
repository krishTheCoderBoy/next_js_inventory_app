import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function SignInPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="w-full max-w-md space-y-8">
                <SignIn/>
                <Link href="/">Go Back Home</Link>
            </div>
        </div>

    )
}
