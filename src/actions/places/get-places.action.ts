import { defineAction } from "astro:actions";

import { prisma } from "@/db/index";

export const getPlaces = defineAction({
  accept: 'json',
  handler: async () => { 
    try {

      const places = await prisma.place.findMany();

      return places;
    } catch (error) {
      console.log(error);
      throw 'Error getting places';
    }

  },
});