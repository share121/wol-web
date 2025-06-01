import { Handlers, PageProps } from "$fresh/server.ts";
// @deno-types="@types/wol"
import wol from "wol";
import Form from "../islands/form.tsx";
import config from "../config.json" with { type: "json" };

export interface Data {
  success?: boolean;
  message?: string;
}

function wake(mac: string) {
  return new Promise<boolean>((resolve, reject) => {
    wol.wake(mac, function (err, res) {
      if (err) {
        reject(err);
      }
      resolve(res!);
    });
  });
}

export const handler: Handlers<Data> = {
  GET(_req, ctx) {
    return ctx.render({});
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const inpPwd = form.get("password")?.toString();
    if (inpPwd !== config.passwordWithSha256) {
      return ctx.render({
        success: false,
        message: "密码错误",
      });
    }
    try {
      const res = await wake("68-3E-26-13-9D-2C");
      if (res) {
        return ctx.render({
          success: true,
          message: "唤醒数据包发送成功",
        });
      }
      return ctx.render({
        success: false,
        message: "唤醒数据包发送失败",
      });
    } catch (err) {
      if (err instanceof Error) {
        return ctx.render({
          success: false,
          message: err.message,
        });
      }
      return ctx.render({
        success: false,
        message: "未知错误",
      });
    }
  },
};

export default function WolPage({ data }: PageProps<Data>) {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="card bg-base-100 w-96 shadow-sm">
          <Form success={data?.success} message={data?.message} />
        </div>
      </div>
    </>
  );
}
