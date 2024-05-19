interface SubmitResult {
  username: string;
  password: string;
  message?: string;
}

export async function submit({ username, password }: { username: string; password: string }) {
  return new Promise((resolve: (value: SubmitResult) => void) => {
    setTimeout(() => {
      resolve({ username, password, message: "Login fail." });
    }, 1000);
  })
}