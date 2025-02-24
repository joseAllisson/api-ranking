import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { env } from "../env";
import { accessInviteLink } from "../fuctions/access-invite-link";
import { redis } from "../redis/client";

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Access invite link and redirects user",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string(),
        }),
        reponse: {
          200: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params;

      await accessInviteLink({ subscriberId });

      console.log(await redis.hgetall("referral:access-count"));

      // const redirectUrl = new URL(env.WEB_URL);

      // redirectUrl.searchParams.set("referrer", subscriberId);

      // return reply.redirect(redirectUrl.toString(), 302);
      return { message: "user accessed the link" }
    }
  );
};
