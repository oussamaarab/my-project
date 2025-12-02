import { IllustrationLeft } from './IllustrationLeft';
import { LoginForm } from './LoginForm';


export default function LoginPage() {
return (
<div
className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark"
style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
>
<div className="w-full max-w-6xl p-4 md:p-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<IllustrationLeft />
<LoginForm />
</div>
</div>
</div>
);
}
