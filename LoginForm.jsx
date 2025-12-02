export function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md rounded-xl bg-white dark:bg-background-dark p-8 md:p-12 shadow-lg dark:border dark:border-slate-800">

        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-4xl">checklist</span>
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">ProjectFlow</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 mb-6">
          <div className="flex w-full flex-col gap-1 text-center">
            <p className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
              Sign in to your account
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
              Manage your school projects all in one place.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">

          {/* Email */}
          <label className="flex flex-col w-full">
            <p className="text-slate-800 dark:text-slate-200 text-base font-medium pb-2">Email address</p>
            <input
              className="form-input flex w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-14 p-[15px] text-base"
              placeholder="Enter your email address"
              type="email"
            />
          </label>

          {/* Password */}
          <label className="flex flex-col w-full">
            <div className="flex justify-between items-baseline pb-2">
              <p className="text-slate-800 dark:text-slate-200 text-base font-medium">Password</p>
              <p className="text-primary text-sm underline cursor-pointer hover:text-primary/80">Forgot your password?</p>
            </div>

            <div className="flex w-full items-stretch">
              <input
                className="form-input flex w-full rounded-l-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-14 p-[15px] pr-2 border-r-0"
                placeholder="Enter your password"
                type="password"
              />
              <div className="text-slate-400 dark:text-slate-500 flex border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 items-center justify-center px-4 rounded-r-lg border-l-0">
                <span className="material-symbols-outlined">visibility</span>
              </div>
            </div>
          </label>

          {/* Login button */}
          <button className="flex items-center justify-center w-full h-14 px-6 mt-4 rounded-lg bg-primary text-white font-bold shadow-sm hover:bg-primary/90">
            Log In
          </button>

          {/* Sign up link */}
          <p className="text-slate-500 dark:text-slate-400 text-sm text-center mt-4">
            Don't have an account?{" "}
            <a className="font-bold text-primary underline hover:text-primary/80" href="#">
              Sign up
            </a>
          </p>

        </div>

      </div>
    </div>
  );
}
