import { settings } from "replugged";

export enum EmbedServices {
  FxTwitter = "fxtwitter",
  GirlCockX = "girlcockx",
  FixupX = "fixupx",
  VXTwitter = "vxtwitter",
  StupidPenisx = "stupidpenisx",
  XCunny = "xcunny",
}

const defaultSettings = {
  send: true,
  edit: true,
  https: true,
  service: EmbedServices.FxTwitter,
};

type Settings = Partial<typeof defaultSettings>;

export const cfg = settings.init<Settings, keyof Settings>(
  "dev.lisekilis.RepluggedFxTwitter",
  defaultSettings,
);
