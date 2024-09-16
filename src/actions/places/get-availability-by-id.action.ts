import { defineAction } from "astro:actions";

import { z } from "astro:schema";

export const getAvailabilityById = defineAction({
  accept: 'json',
  input: z.string(),
  handler: async (placeId) => { 
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const isAvailable = Math.random() > 0.5; // true | false
    const spotsAvailable = Math.floor(Math.random() * 10) + 1; // 0 - 11

    let message = 'No hay espacios disponibles';
    if (isAvailable) {
      message =
        spotsAvailable > 1
          ? `Hay ${spotsAvailable} espacios disponibles`
          : "Hay un espacio disponible";
    }


    return {
      id: placeId,
      isAvailable,
      spotsAvailable,
      message,
    };

  },
});