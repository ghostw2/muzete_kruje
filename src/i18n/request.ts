import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

import sq from "./messages/sq.json";
import en from "./messages/en.json";
import fr from "./messages/fr.json";
import de from "./messages/de.json";
import pl from "./messages/pl.json";
import es from "./messages/es.json";
import it from "./messages/it.json";

const messages = { sq, en, fr, de, pl, es, it } as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: messages[locale as keyof typeof messages],
  };
});
