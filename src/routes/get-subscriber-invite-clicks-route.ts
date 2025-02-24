import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getSubscriberInviteClicks } from "../fuctions/get-subscriber-invite-clicks";

export const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/clicks",
    {
      schema: {
        summary: "Get subscriber invite clicks count",
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

      const { count } = await getSubscriberInviteClicks({ subscriberId });

      return { count };
    }
  );
};
