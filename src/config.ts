import { settings } from "replugged";
import { EmbedServices } from "./types";

interface Settings {
  send?: boolean;
  edit?: boolean;
  service?: EmbedServices;
}

const defaultSettings = {
  send: true,
  edit: true,
  service: EmbedServices.FxTwitter,
} satisfies Partial<Settings>;

export const cfg = settings.init<Settings, keyof typeof defaultSettings>(
  "dev.lisekilis.RepluggedFxTwitter",
  defaultSettings,
);
