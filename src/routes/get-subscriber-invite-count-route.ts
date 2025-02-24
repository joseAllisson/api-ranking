import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getSubscriberInvitesCount } from "../fuctions/subscriber-invites-count";

export const getSubscriberInviteCountRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      schema: {
        summary: "Get subscriber invite count",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string(),
        }),
        reponse: {
          200: z.object({
            count: z.number(),
          }),
        },
      },
    },
    async (request) => {
      const { subscriberId } = request.params;

      const { count } = await getSubscriberInvitesCount({ subscriberId });

      return { count };
    }
  );
};
