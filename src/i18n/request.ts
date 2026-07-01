import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

import sq from "./messages/sq.json";
import en from "./messages/en.json";
import fr from "./messages/fr.json";
import de from "./messages/de.json";
import ru from "./messages/ru.json";
import pl from "./messages/pl.json";

const messages = { sq, en, fr, de, ru, pl } as const;

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
