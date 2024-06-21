import { settings } from "replugged";

interface Settings {
  send?: boolean;
  edit?: boolean;
}

const defaultSettings = {
  send: true,
  edit: true,
} satisfies Partial<Settings>;

export const cfg = await settings.init<Settings, keyof typeof defaultSettings>(
  "dev.lisekilis.RepluggedFxTwitter",
  defaultSettings,
);
