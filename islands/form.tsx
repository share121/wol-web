import { Data } from "../routes/index.tsx";
import { sha256 } from "js-sha256";

export default function Form(props: Data) {
  function handleSubmit() {
    const inpPwd = document.getElementById("inp-pwd") as HTMLInputElement;
    inpPwd.value = sha256(inpPwd.value);
  }

  globalThis.addEventListener("load", () => {
    document.getElementById("inp-pwd")?.focus();
  });

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="card-body">
        <h2 className="card-title">WOL</h2>
        <input
          autoFocus
          type="password"
          placeholder="输入密码"
          className="input w-full"
          name="password"
          id="inp-pwd"
          required
        />
        {typeof props.success === "boolean" && (
          props.success
            ? (
              <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{props.message}</span>
              </div>
            )
            : (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{props.message}</span>
              </div>
            )
        )}
        <div className="card-actions justify-end">
          <button type="submit" className="btn btn-primary">
            启动电脑
          </button>
        </div>
      </div>
    </form>
  );
}
