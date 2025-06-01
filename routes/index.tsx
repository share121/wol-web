import { Handlers, PageProps } from "$fresh/server.ts";
import Form from "../islands/form.tsx";
import config from "../config.json" with { type: "json" };
import { wakeOnLan } from "@hk/wol";

export interface Data {
  success?: boolean;
  message?: string;
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
      await wakeOnLan(config.targetMac, config.targetIp, config.targetPort);
      return ctx.render({
        success: true,
        message: "唤醒数据包发送成功",
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
